import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
export class SHOPPAGE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }
    render() {
        return (
            <div> Hello From ShopPage </div>
        );
    }
};

