import React, { Component } from "react";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import "./../../App.css";

class ProductActionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            txtName: "",
            txtPrice: "",
            chkbStatus: ""
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            callApi(`products/${id}`, "GET", null).then(res => {
                var data = res.data;
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status
                });
            });
        }
    }

    onChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    };

    onSave = e => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;

        if (id) {
            //update
            callApi(`products/${id}`, "PUT", {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                history.goBack();
            });
        } else {
            callApi("products", "POST", {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                history.goBack();
            });
        }
    };

    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <legend>Form title</legend>

                    <div className="form-group">
                        <label>Tên sản phẩm:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            onChange={this.onChange}
                            value={txtName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Gia sản phẩm:</label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtPrice"
                            onChange={this.onChange}
                            value={txtPrice}
                        />
                    </div>

                    <div className="form-group">
                        <label>Trạng thái:</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chkbStatus"
                                onChange={this.onChange}
                                value={chkbStatus}
                                checked={chkbStatus}
                            />
                            Còn hàng
                        </label>
                    </div>

                    <Link to="/product-list" className="btn btn-danger mr-10">
                        Quay lai
                    </Link>
                    <button type="submit" className="btn btn-primary">
                        Luu lai
                    </button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;
