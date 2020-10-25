import React from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import backgroundFon from "../src/img/1586167047_5-p-chernie-foni-s-pitstsami-31.jpg"


function App() {
  return (
      <div className="containerImage" style={{backgroundImage:`url(${backgroundFon})`,backgroundRepeat: 'no-repeat',backgroundSize:"contain"}}>
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
      </div>
  );
}

export default App;
