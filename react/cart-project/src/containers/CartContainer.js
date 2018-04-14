import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as messages from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';


class CartContainer extends Component {

  render() {
  	var {cart} = this.props // lay ra khoi store 
  	console.log(cart);
    return (
        <Cart>
        	{ this.showCartItem(cart) }
          { this.showTotalCount(cart) }
        </Cart>
    );
  }

  showCartItem = (cart) => {
  	var result = messages.MSG_CART_EMPTY;
  	if(cart.length > 0){
  		result = cart.map((item,index) => {
  			return (
  					<CartItem key={index} item={item} />
  				);
  		});
  	}
  	return result;
  }

  showTotalCount = (cart) => {
    var result = null;
    if(cart.length > 0){
      result = <CartResult cart={cart}/>
    }
    return result;
  }

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product :PropTypes.shape({
    		id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            status: PropTypes.bool.isRequired,
            image: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
		}).isRequired,
    	quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
    	cart: state.cart // lay tren store
    }
}

export default connect(mapStateToProps, null)(CartContainer);
