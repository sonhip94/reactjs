import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Product from './components/Product';

class App extends Component {
  constructor(props){
    super(props);
    // this.onAddProduct = this.onAddProduct.bind(this);
    this.state = {
          products : [
            {
          id: 1,
          name: 'Iphone 6',
          price: 1000,
          status: true,
          image: 'https://d11fuji4mn7bm2.cloudfront.net/media/cache/data/Apple/iPhone%206/iPhone-6-Gold-Angles-800x800.png'
        },
        {
          id: 2,
          name: 'Iphone 6Plus',
          price: 2000,
          status: true,
          image: 'http://dienthoaidoc.com/wp-content/uploads/2014/10/so-sanh-iphone-6-va-iphone-6-plus-9.jpg'
        },
        {
          id: 3,
          name: 'Iphone 7',
          price: 3000,
          status: true,
          image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/select/iphone7-select-2016?wid=222&hei=305&fmt=png-alpha&qlt=95&.v=1471892660314'
        },
        {
          id: 4,
          name: 'Iphone 7Pus',
          price: 4000,
          status: false,
          image: 'http://techhubonline.com/wp-content/uploads/sites/10/2016/12/iphone-7-plus-red-3.jpg'
        }
      ],
      isActive : true
    };

  }
  /////////////////////////
  onAddProduct = () => {
    console.log(this.refs.name.value);
  }
  onSetState = () =>{
    // if(this.state.isActive === true){
    //   this.setState({
    //     isActive:false
    //   });
    // }
    // else{
    //   this.setState({
    //     isActive:true
    //   });
    // }

    this.setState({
      isActive : !this.state.isActive
    });

  }
  render() {
  //   var products = [
  //   {
  //     id: 1,
  //     name: 'Iphone 6',
  //     price: 1000,
  //     status: true,
  //     image: 'https://d11fuji4mn7bm2.cloudfront.net/media/cache/data/Apple/iPhone%206/iPhone-6-Gold-Angles-800x800.png'
  //   },
  //   {
  //     id: 2,
  //     name: 'Iphone 6Plus',
  //     price: 2000,
  //     status: true,
  //     image: 'http://dienthoaidoc.com/wp-content/uploads/2014/10/so-sanh-iphone-6-va-iphone-6-plus-9.jpg'
  //   },
  //   {
  //     id: 3,
  //     name: 'Iphone 7',
  //     price: 3000,
  //     status: true,
  //     image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/select/iphone7-select-2016?wid=222&hei=305&fmt=png-alpha&qlt=95&.v=1471892660314'
  //   },
  //   {
  //     id: 4,
  //     name: 'Iphone 7Pus',
  //     price: 4000,
  //     status: false,
  //     image: 'http://techhubonline.com/wp-content/uploads/sites/10/2016/12/iphone-7-plus-red-3.jpg'
  //   }
  // ];
// products.map((product,index)
    let elements = this.state.products.map((product,index) => {
      let result = '';
      if(product.status){
        result = <tr key={index}>
                    <td>{index}</td>
                    <td>{product.name}</td>
                    <td><label className="btn btn-primary">{product.price}</label></td>
                  </tr>
      }
      return result;
    });
    return (
      <div>
        <div className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand">Props</a>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="row">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Ten san pham</th>
                    <th>Gia</th>
                  </tr>
                </thead>
                <tbody>
                  { elements }
                </tbody>
              </table>
              <div className="clearfix"></div>
              <hr/>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Them san pham</h3>
                  <label>Ten san pham</label>
                  <input type="text" className="form-control" ref="name"/>
                </div>
                <div className="panel-body">
                  <button type="submit" className = "btn btn-success" onClick={ this.onAddProduct }>Luu</button>
                </div>
              </div>

              <div className="">
                {elements}
              </div>
              <br/>
              <div className="clearfix"></div>
              <div className="">
                <button type="button" className="btn btn-defaulse" onClick = {this.onSetState}>Click Me!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
