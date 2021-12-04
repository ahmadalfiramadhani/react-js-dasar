import React from 'react';
import ReactDOM from 'react-dom';
// import App from './react-js-dasar/App';
// import Map from './react-js-dasar/Map';
// import Lifecycle from './react-js-dasar/Lifecycle';
// import Crud from './crude';
import Brud from './crude'

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';


        // <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //   <NavDropdown.Divider />
        //   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        // </NavDropdown>
        
ReactDOM.render( 
  <React.StrictMode>
  <Brud / >
  </React.StrictMode>,
  document.getElementById('root')
);