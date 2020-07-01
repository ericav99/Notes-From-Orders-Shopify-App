import React from 'react';
import ReactDOM from "react-dom";
import {Page, Layout, TextStyle, DataTable, Card} from '@shopify/polaris';
import {DisplayText} from '@shopify/polaris';
import {PlusMinor} from '@shopify/polaris-icons';
import { AppProvider } from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';
import "@shopify/polaris/styles.css";
import { Provider } from '@shopify/app-bridge-react';
import Cookies from 'js-cookie';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import store from 'store-js';
import ResouceListWithProducts from '../components/ResourceList';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include'
  },
});


const rows = [
  ['Customer Name 1', 10001, "none"],
  ['Customer Name 2', 10002, "happy fathers day!"],
  ['Customer Name 3',
    10003, "get well soon Tif"],
];

const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };

const Index = () => (
<Provider config={config}>
  <AppProvider>
  <Page>
      <DisplayText size="extraLarge">Mayas Cookies Notes App</DisplayText>
      <DisplayText size="Small">Created by Eric Av</DisplayText>
      <AppProvider>

      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>

        <Page
        fullWidth
        title="Extract Orders (choose from existing orders)"
        primaryAction={{content: 'Get orders', icon: PlusMinor}}
        pagination={{
          hasNext: true,
        }}
        >
      </Page>

      
   
    </AppProvider>
  </Page>
  </AppProvider>
</Provider>

);

export default Index;