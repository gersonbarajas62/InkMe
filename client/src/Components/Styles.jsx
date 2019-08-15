
/*

class Styles extends React.Component{
    render(){
        return( 
            <div>hey</div>
        )
    }
}*/

//import Example2 from './Carousel2.jsx';

import React from 'react';

class Styles extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }
    submitLogin(e) {

    }
    submitRegister(e) {

    }

    render(){
        return (
        <div>
          <select id="dropdown">
           <option value="">Traditional </option>
           <option value=""> Realism</option>
           <option value="text2">Watercolor</option>
           <option value="text3">Tribal </option>
           <option value="text4">New School</option>
           <option value="text4">Neo Traditional</option>
           <option value="text4">Japanese</option>
           <option value="text4">Blackwork</option>
           <option value="text4">Illustrative</option>
           <option value="text4">Chicano Style</option>

          </select>
           
        </div>
        )}
    }

export default Styles;