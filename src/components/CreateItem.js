import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { ITEMS_QUERY } from "./Items";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const CreateItem = () => {
  const [content, setContent] = React.useState("");

  return (
    <Mutation
      mutation={CREATE_ITEM_MUTATION}
      update={(cache, { data }) => {
        const { items } = cache.readQuery({ query: ITEMS_QUERY });
        cache.writeQuery({
          query: ITEMS_QUERY,
          data: { items: items.concat([data.createItem]) }
        });
      }}
    >
      {createDraft => {
        return (
          <>
            <form
              onSubmit={async e => {
                e.preventDefault();
                await createDraft({
                  variables: { content }
                });
                setContent("");
              }}
            >
              <Typography variant="h4" style={{ marginBottom: "16px" }}>
                Create Item
              </Typography>
              <Box display="flex" alignItems="center">
                <TextField
                  onChange={e => setContent(e.target.value)}
                  label="Item Name"
                  value={content}
                  variant="outlined"
                />
                <Button
                  disabled={!content}
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: "16px" }}
                >
                  <Typography>Create</Typography>
                </Button>
              </Box>
            </form>
          </>
        );
      }}
    </Mutation>
  );
};

export default CreateItem;

const CREATE_ITEM_MUTATION = gql`
  mutation CreateItemMutation($content: String!) {
    createItem(content: $content) {
      id
      content
    }
  }
`;
