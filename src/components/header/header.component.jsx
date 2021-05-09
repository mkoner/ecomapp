import React from 'react';


import {connect} from 'react-redux'

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectHidden} from '../../redux/cart/cart.selectors'

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from './header.styles'

const Header = ({ currentUser,hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon/>
    </OptionsContainer>
     { hidden? null :<CartDropdown/>}
  </HeaderContainer>
);

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  hidden:selectHidden(state)
})

export default connect(mapStateToProps) (Header);