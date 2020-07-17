import gql from 'graphql-tag';
import React, {Component, Fragment} from 'react'
import { Query } from 'react-apollo';
import { Card } from '@shopify/polaris';
import store from 'store-js';

const GET_PRODUCTS_BY_ID = gql`
query getNotes($endNumOrders: Int)
{
  orders(first: $endNumOrders) {
      edges	{
        node	{
          name
          note
                  }
          }
  }
}
`;


/*
$numOrders: Int, $endNumOrders: Int
first: $endNumOrders, after: $numOrders

query getProducts($ids: [ID!]!) {
  nodes(ids: $ids) {
    ... on Product {
      title
    }
  }
  shop {
    name
    plan {
      partnerDevelopment
    }
  }
}
ids: store.get('ids')
variables={{ numOrders: 4, endNumOrders: 0 }}
*/

class ResourceListWithProducts extends React.Component {
  render() {
    return (
      <Query query={GET_PRODUCTS_BY_ID} variables={{ endNumOrders: parseInt(store.get('endRangeInt'), 10) , numOrders: store.get('startRangeInt') }}>
        {({ data, loading, error }) => {
          const endNumOrder = store.get('endRangeInt')
          var contents = [];

          function loop(i) {
            if(i < endNumOrder){
              if(data.orders.edges[i].node.note == '')
              {
                console.log('*empty*')
                contents.push(data.orders.edges[i].node.note)
                contents.push(data.orders.edges[i].node.name)
              } else {
                console.log(data.orders.edges[i].node.note)
                contents.push(data.orders.edges[i].node.note)
                contents.push(data.orders.edges[i].node.name)
              }
              loop(i + 1)
            } else {
              console.log('Finished Reading!');
            }
            store.set('contents', contents)
          }

          if (loading) return <div>Loading…</div>;
          //console.log(store.get('endRangeInt'))
          console.log('Number of orders to go to: ' + endNumOrder);
          if (error) return <div>{error.message}</div>;
          loop(0)
          console.log(contents)
          //console.log(data);
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
