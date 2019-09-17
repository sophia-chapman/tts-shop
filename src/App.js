import React from 'react';
import Layout from 'layouts/Layout';
import { Router } from '@reach/router';
import CreateProduct from 'pages/CreateProduct';

function App() {
  return (
    <Layout>
      <Router>
        <CreateProduct path="/" />
      </Router>
    </Layout>
  );
}

export default App;
