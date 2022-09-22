import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux' 
//is a hook that you pass a selector function, selector function is something that essantially extracts off the values that you want from the whole entire redux.

import CartIcon from '../cart-icon/cart-icon.compenent';
import CartDropDown from '../cart-dropdown/cart-dropdown.compenent';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutStart } from '../../store/user/user.action';

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles';

// A fragment is usefull if you don't actually want to render some spesific moment.
const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  console.log("navigation",currentUser);
  const isCartOpen  = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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