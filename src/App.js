import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Card from './Components/card';
import Navbar from './Components/navbar';
import Form from './Components/article';
import Table from './Components/table';
import CompraForm from './Components/compra';
import VentaForm from './Components/venta';
import ProovedorForm from './Components/proovedor';
import Cliente from './Pages/cliente';
//import axios from 'axios';
//import Home from './Pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      compras: [],
      message: ''
    }
  }


  render(){  
  return (
    <div>
     <div>
       <div>
         
         <BrowserRouter >
         <Navbar />
          <Switch>
            <Route exact path="/">
              <Table />
            </Route>
            <Route exact path="/articulo/nuevo">
              <Form />
            </Route>
            <Route exact path="/proovedor/nuevo">
              <ProovedorForm />
            </Route>
            <Route exact path="/cliente/nuevo">
              <Cliente />
            </Route>
            <Route exact path="/compra/nueva">
              <CompraForm />
            </Route>
            <Route exact path="/venta/nueva">
              <VentaForm />
            </Route>
          </Switch>
         </BrowserRouter>      
      </div>
     </div>
    </div>
  )};
}

export default App;
