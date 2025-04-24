'use client';

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // ✅ Make sure this matches your backend
  cache: new InMemoryCache(),
  headers:{
    authorization: `Bearer ${localStorage.getItem('token')}`,
  }
});
