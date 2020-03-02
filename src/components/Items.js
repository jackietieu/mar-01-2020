import React from "react";
import { Mutation, Query } from "react-apollo";
import { gql } from "apollo-boost";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

const Items = () => {
  return (
    <Query query={ITEMS_QUERY}>
      {({ data, loading, error }) => {
        if (loading) {
          return <Typography>Loading ...</Typography>;
        }

        if (error) {
          return <Typography>An unexpected error occured.</Typography>;
        }

        const { items } = data;

        return (
          <Box style={{ marginTop: "24px" }}>
            <Typography variant="h4">Items</Typography>
            <Mutation
              mutation={DELETE_ITEM_MUTATION}
              update={(cache, { data: { deleteItem } }) => {
                const { items } = cache.readQuery({ query: ITEMS_QUERY });

                cache.writeQuery({
                  query: ITEMS_QUERY,
                  data: {
                    items: items.filter(item => item.id !== deleteItem.id)
                  }
                });
              }}
            >
              {deleteItem =>
                items &&
                items.map(item => (
                  <ListItem key={item.id}>
                    <Typography>{item.content}</Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ marginLeft: "16px" }}
                      onClick={e => {
                        deleteItem({
                          variables: {
                            id: item.id
                          }
                        });
                      }}
                    >
                      Delete
                    </Button>
                  </ListItem>
                ))
              }
            </Mutation>
          </Box>
        );
      }}
    </Query>
  );
};

export default Items;

export const ITEMS_QUERY = gql`
  query Items {
    items {
      id
      content
    }
  }
`;

const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItemMutation($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;
