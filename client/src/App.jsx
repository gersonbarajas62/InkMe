import React, { Component } from 'react';
// RHL only for front end development
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'

import Navigation from './Components/Navigation.jsx.js'

import MapContainer from './Components/MapContainer.jsx.js'
import Login from './Components/Login.jsx.js'
import Styles from './Components/Styles.jsx.js'


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <BrowserRouter>
        <div >

          <Navigation />

           {/*data={this.state.styles} selectStyles={this.selectStyles} style={this.state.style}*/}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/booking" component={MapContainer} ></Route>
              <Route path="/login"  component={Login} ></Route>
              <Route path ="/styles" component={Styles} ></Route>
            </Switch>
        </div>

      </BrowserRouter>
    )
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default App;
