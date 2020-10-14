import React from 'react';
import './App.css';
import Layout from './containers/layout/layout.component'
import BurgerBuilder from './containers/buger-builder/burger-builder.component';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
