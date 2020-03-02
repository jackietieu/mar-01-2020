import React from "react";
import { Mutation, Query } from "react-apollo";
import { gql } from "apollo-boost";

const Items = () => {
  return (
    <Query query={ITEMS_QUERY}>
      {({ data, loading, error }) => {
        if (loading) {
          return <span>Loading ...</span>;
        }

        if (error) {
          return <span>An unexpected error occured.</span>;
        }

        const { items } = data;

        return (
          <>
            <h1>Items</h1>
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
                  <div key={item.id}>
                    {item.content}
                    <button
                      onClick={e => {
                        deleteItem({
                          variables: {
                            id: item.id
                          }
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))
              }
            </Mutation>
          </>
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
