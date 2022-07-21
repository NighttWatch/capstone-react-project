import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.compenent';
import CartDropDown from '../cart-dropdown/cart-dropdown.compenent';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles';

// A fragment is usefull if you don't actually want to render some spesific moment.
const Navigation = () => {
  const { currentUser } = useContext(UserContext); 
  const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrwnLogo className='logo' />
          </LogoContainer>          
          <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser 
                ? (<NavLink as='span' onClick={ signOutUser }>SIGN OUT</NavLink>)
                : (<NavLink to='/auth'>SIGN IN</NavLink>)
            }
            <CartIcon/>
          </NavLinks>
          {isCartOpen && <CartDropDown/>}
        </NavigationContainer>
          <Outlet />
        
      </Fragment>
    )
};


export default Navigation;