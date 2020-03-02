import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { ITEMS_QUERY } from "./Items";

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
              <h1>Create Item</h1>
              <input
                onChange={e => setContent(e.target.value)}
                placeholder="Enter text here..."
                value={content}
              />
              <input disabled={!content} type="submit" value="Create" />
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
