import React from 'react';
import Layout from '../Components/Layout/Layout';

const PageNotFnd = () => {
  return (
    <Layout>
      <div className="pg_not_fnd">
        <h1>OH ! <span style={{ color: 'red' }}>404</span>  Error </h1><br />
        <h1 style={{ color: 'red' }}>
          &nbsp; Page not found page</h1>
      </div>
    </Layout>
  );
}

export default PageNotFnd;
