import React, { Component } from "react";
import {Link} from "react-router-dom";

class ProductItem extends Component {
    onDelete = id => {
        if(confirm('Bạn chắc chắn muốn xóa hay k?')){ //eslint-disable-line
            this.props.onDelete(id);
        }
    };
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? "Còn hàng" : "Hết hàng";
        var statusClass = product.status ? "warning" : "default";
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link to={`/product/edit/${product.id}`} className="btn btn-success mr-10">
                        SỬa
                    </Link>
                    <button
                        type="button"
                        onClick={() => this.onDelete(product.id)}
                        className="btn btn-danger"
                    >
                        Xoa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
