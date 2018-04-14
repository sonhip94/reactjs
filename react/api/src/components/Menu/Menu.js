import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
    {
        name: "Trang chủ",
        to: "/",
        exact: true
    },

    {
        name: "Quản lý sản phẩm",
        to: "/product-list",
        exact: false
    }
];

const MenuLink = ({ name, to, exact }) => {
    return (
        <Route
            path={to}
            exact={exact}
            children={({ match }) => {
                var active = match ? "active" : "";
                return (
                    <li className={active}>
                        <Link to={to}>{name}</Link>
                    </li>
                );
            }}
        />
    );
};

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <a className="navbar-brand">Call API</a>
                    <ul className="nav navbar-nav">{this.showMenus(menus)}</ul>
                </div>
            </div>
        );
    }

    showMenus = menus => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        name={menu.name}
                        to={menu.to}
                        exact={menu.exact}
                    />
                );
            });
        }
        return result;
    };
}

export default Menu;