import React from "react";
import { Query } from "react-apollo";
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
        console.log({ data });
        return (
          <>
            <h1>Items</h1>
            {data.items &&
              data.items.map(item => <div key={item.id}>{item.content}</div>)}
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
