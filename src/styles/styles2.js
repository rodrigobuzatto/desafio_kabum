import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
`;

export const ProductsListContainer = styled(Container)`
    width: 300px;
    flex-direction: column;
`;

export const ProductsContainer = styled(Container)`
    justify-content: flex-start;
`;

export const NavbarContainer = styled(Container)`
    justify-content: space-between;
    border-bottom: 1px solid #0077BF;
    height: 80px;
    padding: 5px;

    a {
        text-decoration: none;
        height: 70px;
    }

    img {
        align-self: center;
        width: 100px;
    }
`;

export const FilterContainer = styled(Container)`
    justify-content: space-between;
    padding: 15px;
`;

export const ProductItem = styled.div`
    border: 1px solid #0077BF;
    border-radius: 5px;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
`;

export const ProductDetail = styled.div`
    border: 1px solid #0077BF;
    border-radius: 5px;
    flex-grow: 1;
    padding: 10px;
    margin: 10px;
`;

export const SearchButton = styled.button`
    align-items: stretch;
    background:#0077BF;
    color: #ffffff;
    padding: 12px;
    line-height: 1px;
    cursor: pointer;
    border: 1px solid #0077BF;
    font-weight: bold;
`;

export const DefaultInput = styled.input`
    padding: 5px;
    font-size: 14px;
    border: 1px solid #c1c1c1;
    flex-grow: 1;
`;