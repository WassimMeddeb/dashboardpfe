import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import test from './Pager/test';
import { BrowserRouter as Router, Switch,Route   } from 'react-router-dom';

export default function App() {
  return (
    <Div>
      
      
      <Router>
      <Sidebar />
          <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/Home' exact component={test}/>


          </Switch>
        
      </Router>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
`;
