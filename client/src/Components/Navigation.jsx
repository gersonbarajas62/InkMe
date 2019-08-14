import React from 'react'
import { NavLink} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, ButtonGroup } from 'reactstrap';

const Navigation = () => {
  return  (
    <div>
    <div  className="btn float-right">
        <NavLink to="/login"><Button color="blue">Login</Button></NavLink>
      </div>
    <ButtonGroup >
    <div>
      
      
      <div className="btn float-right">
        <NavLink to="/booking"><Button color="blue">Book an Appointment</Button></NavLink>
      </div>  

      <div className="btn  float-right">
        <NavLink to="/styles"><Button color="blue">Styles</Button></NavLink>
      </div>
      <div className="btn  float-right">
        <NavLink to="/"><Button color="blue" >Home</Button></NavLink>
      </div>
    </div>
    </ButtonGroup>
    </div>
  );
};


export default Navigation;
