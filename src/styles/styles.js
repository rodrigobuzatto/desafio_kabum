import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;

    div {
        margin: 10px;
    }    
`;

export const MenuContainer = styled(Container)`
    justify-content: flex-start;
    flex-direction: column;
    border-right: 1px solid #0077BF;
    min-height: 600px;
    width: 300px;
`;

export const FilterContainer = styled.form`
    align-items: flex-start;
    flex-grow: 0;
`;

export const NavContainer = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
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

export const MenuProducts = styled.ul`
    padding: 10px;
    margin: 0;
`;

export const MenuItem = styled.li`
    background: #0077BF;
    padding: 5px;    
    border-radius: 5px;
    list-style-type: none;
    margin: 5px 0;

    a {
        text-decoration: none;
        color: #ffffff;
        font-size: 12px;
    }
`;

export const MenuItemMessage = styled(MenuItem)`    
    background: #ffffff;
    border: none;

    a {
        color: #000000;
    }
`;

export const MenuTitle = styled.h1`
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    color: #ffffff;
    background:#0077BF;
    margin: 0;
`;

export const MyCart = styled.div`
    align-self: center;
    height: 20px;
    padding: 5px 10px;
    text-align: center;
    background:#0077BF;
    border-radius: 5px;

    a {
        font-size: 14px;
        font-weight: bold;
        color: #ffffff;
    }

    label {
        position: absolute;
        background: #ffffff;
        border: 5px solid #0077BF;
        color: #0077BF;
        padding:0 5px;
        border-radius: 50%;
        margin: -15px 0 0 -25px;
    }
`;

export const SearchButton = styled.button`
    position: absolute;
    align-items: stretch;
    background:#ffffff;
    color: #0077BF;
    padding: 12px;
    line-height: 1px;
    cursor: pointer;
    border: 1px solid #0077BF;
    font-weight: bold;
`;

export const CartActions = styled.button`
    align-self: center;
    height: 20px;
    padding: 5px 10px;
    text-align: center;
    background:#0077BF;
    border-radius: 5px;
    color: #ffffff;
    border: none;
    padding: 15px;
    line-height: 1px;
    cursor: pointer;
    margin-bottom: 10px;
`;

export const ProductDetailsButton = styled.div`
    align-self: center;
    padding: 5px 10px;
    text-align: center;
    background:#0077BF;
    border-radius: 5px;
    border: none;
    padding: 15px;
    line-height: 1px;
    cursor: pointer;

    a {
        font-size: 14px;        
        color: #ffffff;
        text-decoration: none;
    }
`;

export const QuantityContainer = styled(Container)`
    margin: 10px 0;
    align-items: stretch;
    justify-content: center;
`;

export const QuantityButton = styled.button`
    border-radius: 50%;
    background: #0077BF;
    color: #ffffff;
    padding: 5px 12px;
    border: none;
    font-size: 18px;
    font-weight: bold;
`;

export const QuantityLabel = styled.label`
    font-size: 24px;
    font-weight: bold;
    padding: 0 10px;
`;

export const BackToCartButton = styled(ProductDetailsButton)``;

export const Title = styled.h1`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
`;

export const ProductItem = styled.div`
    width: 200px;
    padding: 5px;
`;

export const DefaultParagraph = styled.p`
    font-size: 12px;
`;

export const DefaultInput = styled.input`
    padding: 5px;
    font-size: 14px;
    border: 1px solid #c1c1c1;
    width: 218px;
`;

export const ProductContainer = styled(Container)`
    border: 1px solid #0077BF;
    border-radius: 5px;
    flex-direction: column;
    padding: 10px;
    align-items: stretch;
    margin: 10px;
`;