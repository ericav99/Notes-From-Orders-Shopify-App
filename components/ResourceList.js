import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card } from '@shopify/polaris';
import store from 'store-js';

const GET_NOTES_BY_ID = gql`
query getNotes($ids: [ID!]!)
{
    orders(ids: $ids)	{
            edges	{
                    node	{
          id
          name
          note
                    }
            }
    }
}
`;

class ResourceListWithProducts extends React.Component {
    render() {
      return (
        <Query query={GET_NOTES_BY_ID}>
          {({ data, loading, error }) => {
            if (loading) return <div>Loading…</div>;
            if (error) return <div>{error.message}</div>;
            console.log(data);
            return (
              <Card>
                <p>stuff here</p>
              </Card>
            );
          }}
        </Query>
      );
    }
  }
  
   export default ResourceListWithProducts;
