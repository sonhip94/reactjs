import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
	{
		name: 'Trang chu',
		to : '/',
		exact : true
	},

	{
		name: 'Gioi thieu',
		to : '/about',
		exact : false
	},

	{
		name: 'Lien he',
		to : '/lienhe',
		exact : false
	},

	{
		name: 'San pham',
		to : '/dssp',
		exact : false
	},
];


const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
          <Route 
            path={to} exact={activeOnlyWhenExact}
            children={ ({matched}) =>{
                var active = matched ? 'active abc' : '';
                return  (
                    <li className={ `my-li ${active}`}>
                      <Link to={to} className="my-link">
                        {label}
                      </Link>
                    </li>
                  )
            }}/>

      );
}

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
            	{this.showMenu(menus)}
                
            </ul>
          </div>
        </nav>
    );
  }

  showMenu = menus => {
  	var result = null;
  	if(menus.length > 0 ){
  		result = menus.map((menu,index) => {
  			return (
  				<MenuLink 
  					key={index} 
  					label={menu.name} 
  					to={menu.to} 
  					activeOnlyWhenExact={menu.exact} 
				/>
			);
  		});

  	}
  	return result;
  }
}

export default Menu;
