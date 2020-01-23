import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filter } from '../actions/productActions';

class Filter extends Component {
    search = '';

    handleClick = (event) => {
        event.preventDefault()
        this.props.filter(this.search)
    }

    handleChange = (event) => {
        this.search = event.target.value;
    }

    componentDidMount() {
        this.props.filter(this.search);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <input type="text" id="filter" placeholder="Pesquisar produtos ..." onChange={this.handleChange}/>
                    <button type="submit">Buscar</button>
                </form>
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