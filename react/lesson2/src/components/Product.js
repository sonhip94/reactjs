import React, { Component } from 'react';

class Product extends Component {
	// cach 1
	// constructor(props){
	// 	super(props);
	// 	this.onAddToCart = this.onAddToCart.bind(this);
	// }
	// onAddToCart(){
	// 	alert(this.props.children);
	// }


	//cach 2 khong phai dung bind, k phai dung constructor
	onAddToCart2 = () => {
		alert(this.props.children + ' - ' + this.props.price);
	}
  render() {
    return (
      	<div className="">
      	 	<div className="col-md-4">
      	 		<div className="thumbnail">
      	 			<img alt={this.props.children} src={this.props.image}/>
      	 			<div className="caption">
      	 				<h3>{this.props.children}</h3>
      	 				<p>
      	 					{this.props.price}
      	 				</p>
      	 				<p>
      	 					<a className="btn btn-default" onClick={ this.onAddToCart2 }>Mua Ngay</a>
      	 				</p>
      	 			</div>
      	 		</div>
      	 	</div>
  	 	</div> 	
      
    );
  }
}

export default Product;
