import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import {AddToCart} from './../actions/index'

class ProductsContainer extends Component {

  render() {
    var {products} = this.props;

    return (
        <Products>
        	{ this.showProducts(products) }
        </Products>
    );
  }

  showProducts = products => {
    var result = null;
    var {onAddToCart} = this.props
    if(products.length>0){
        result = products.map((product,index) => {
            return <Product key={index} product = {product} onAddToCart = {onAddToCart}/>
        });
    }
    return result;
  }
}

    ProductsContainer.propTypes = {
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                status: PropTypes.bool.isRequired,
                image: PropTypes.string.isRequired,
                inventory: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired
            })
        ).isRequired
    }

const mapStateToProps = state => {
    return {
        products: state.products // lay tu tren reducers/index
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(AddToCart(product,1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
