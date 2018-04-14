import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import Product from './Product'
class Products extends Component {
  render() {
  	var products = [
  		{
      id: 1,
      name: 'Iphone 6',
      price: 1000,
      status: true,
      image: 'https://d11fuji4mn7bm2.cloudfront.net/media/cache/data/Apple/iPhone%206/iPhone-6-Gold-Angles-800x800.png',
    	inventory: 10,
      description: 'Iphone 6 dep da man',
      rating: 4
    },
    {
      id: 2,
      name: 'Iphone 6Plus',
      price: 2000,
      status: true,
      image: 'https://i5.walmartimages.com/asr/2d368c4e-5095-46b7-b1e2-9472832bd9fe_1.0681b8e531a9fd65010089c28cf6c988.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
      inventory: 15,
      description: 'Iphone 6 Plus dep da man',
      rating: 3
    },
    {
      id: 3,
      name: 'Iphone 7',
      price: 3000,
      status: true,
      image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/select/iphone7-select-2016?wid=222&hei=305&fmt=png-alpha&qlt=95&.v=1471892660314',
  		inventory: 20,
      description: 'Iphone 7 dep da man',
      rating: 5    
    },
    {
      id: 4,
      name: 'Iphone 7Pus',
      price: 4000,
      status: false,
      image: 'http://techhubonline.com/wp-content/uploads/sites/10/2016/12/iphone-7-plus-red-3.jpg',
      inventory: 10,
      description: 'Iphone 7 Plus dep da man',
      rating: 2
    }
  	];

  	var {match} = this.props; // this.props.match
  	var url = match.url;


  	var result = products.map((product,index) => {
  		return (
  				<NavLink to={`${url}/${product.id}`} key={index}>
  					<li className="list-group-item" >
	  					{product.name} - {product.description} -{product.price} 
	  				</li>
  				</NavLink>
  			);
  	});
    return (
      <div className="container">
      	<h1> Danh sach san pham</h1>
      	<div className="row">
      		<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      			<ul className="list-group">
      				{result}
      			</ul>
      		</div>
      	</div>
      	<div className="row">
      		<Route path="/products/:id" component={Product} />
      	</div>
      </div>
    );
  }
}

export default Products;
