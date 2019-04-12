import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import { ThemeProvider } from 'styled-components'
import theme from './theme/Theme'


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
     <React.Fragment>
         <Navbar />
         <Switch> {/* better for rendering nested routes (vs router)*/}
           <Route exact path="/" component={ProductList}/>
           <Route path="/details" component={Details}/>
           <Route path="/cart" component={Cart}/>
           <Route component={Default}/>
         </Switch>
         <Modal/>
     </React.Fragment>
     </ThemeProvider>
    );
  }
}

export default App;
