import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filter } from '../actions/productActions';
// import { DefaultInput } from '../styles/styles';
import { FilterContainer, SearchButton, DefaultInput } from '../styles/styles2';

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
            <FilterContainer onSubmit={this.handleClick}>
                <DefaultInput type="text" id="filter" placeholder="Pesquisar produtos ..." onChange={this.handleChange}/>
                <SearchButton type="submit">Buscar</SearchButton>
            </FilterContainer>
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