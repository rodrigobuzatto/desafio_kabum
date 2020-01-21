import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filter } from '../actions/productActions';

class Filter extends Component {
    search = '';

    handleClick = () => {
        this.props.filter(this.search)
    }

    handleChange = (event) => {
        this.search = event.target.value;
    }

    render() {
        return (
            <div>
                <input type="text" id="filter" placeholder="Pesquisar produtos ..." onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Buscar</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (item) => { dispatch(filter(item)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)