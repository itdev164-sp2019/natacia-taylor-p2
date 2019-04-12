import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import { Smartphone } from 'styled-icons/feather/Smartphone'
import { ShoppingCart } from 'styled-icons/feather/ShoppingCart'


const Phone = styled(Smartphone)`
  color: orange;
`
class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
           <ul className="navbar-nav align-items-center">
           <li className="nav-item ml-5">
           <Link to="/" className="nav-link">
           <Phone size="48"/> Products
           </Link>
           </li>
           </ul> 
           <Link to="/cart" className="ml-auto">
           <ButtonContainer>
               <span className="mr-2">
                <ShoppingCart size="48"/>
                </span>
                My Cart
           </ButtonContainer>
           </Link> 
            </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
color:var(--mainWhite) !important;
font-size:1.3rem;
text-transform:capitalize;
}
`;

export default Navbar;