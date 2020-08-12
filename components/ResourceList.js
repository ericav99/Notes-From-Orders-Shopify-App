import gql from 'graphql-tag';
import React, {Component, Fragment} from 'react'
import { Query } from 'react-apollo';
import { Card } from '@shopify/polaris';
import store from 'store-js';

const GET_PRODUCTS_BY_ID = gql`
query getNotes($endNumOrders: Int, $cursor: String)
{
  orders(first: $endNumOrders, after: $cursor) {
      edges	{
        node	{
          name
          note
                  }
          }
  }
}
`;

const GET_START_CURSOR = gql`
query getNotes($numOrders: Int)
{
  orders(first: $numOrders) {
      edges	{
        cursor
        node {
          name
        }
          }
  }
}
`;

class ResourceListWithProducts extends React.Component {
  render() {
    //*important! Where cursor data of the start index is stored
    var cursorData = '';

    return (
  <div>
      <Query query={GET_START_CURSOR} variables={{numOrders: parseInt(store.get('startRangeInt'), 10)}}>
      {({ data, loading, error }) => {
        const startRangeInt = store.get('startRangeInt')
        console.log(startRangeInt)
        console.log(data)
        if (loading) return <div>Loading…</div>;
        if (error) return <div>{error.message}</div>;
        //startRangeInt - 1 if startRangeInt is 1 will be 0. The first index
        //startRangeInt cannot be equal to 0
          cursorData = data.orders.edges[startRangeInt - 1].cursor
          console.log(cursorData)
          console.log(data.orders.edges[startRangeInt - 1].node.name)
          store.set('cursorInfo', cursorData.toString())
        return (
          <Card>
          </Card>
        );
      }}
    </Query>
      <Query query={GET_PRODUCTS_BY_ID} variables={{ endNumOrders: parseInt(store.get('endRangeInt'), 10) , cursor: store.get('cursorInfo') }}>
        {({ data, loading, error }) => {
          var endNumOrder = parseInt(store.get('endRangeInt'), 10)
          var startNumOrder = parseInt(store.get('startRangeInt'), 10)
          var contents = [];
          console.log(data)
          
          function loop(i) {
            if(i < (endNumOrder)){
              if(data.orders.edges[i].node.note == '')
              {
                console.log('*empty*')
              } else {
                console.log(data.orders.edges[i].node.note)
              }
              contents.push(data.orders.edges[i].node.note)
              contents.push(data.orders.edges[i].node.name)
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

            </Card>
          );
        }}
      </Query>
    </div>
    );
  }
}

 export default ResourceListWithProducts;
