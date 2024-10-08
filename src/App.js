import React from 'react';
import CountryList from './components/CountryList';
import client from './services/api';
import { ApolloProvider } from '@apollo/client';
import './styles/global.css';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="header">
          <h1>Country Explorer</h1>
          <p>Discover countries and explore their details</p>
        </header>
        <CountryList />
      </div>
    </ApolloProvider>
  );
};

export default App;
