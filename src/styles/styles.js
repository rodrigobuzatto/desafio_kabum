import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
`;

export const ProductsListContainer = styled(Container)``;

export const ProductsContainer = styled(Container)`
    justify-content: space-between;
    margin: 15px;
`;

export const ShoppingCartContainer = styled(Container)`
    flex-direction: column;
`;

export const ShoppingCartDetailContainer = styled(Container)`
    flex-direction: column;
    margin: 15px;
    flex-grow: 1;
`;

export const ProductDetailContainer = styled(Container)`
    flex-direction: column;
    border: 1px solid #0077BF;
    border-radius: 5px;
    padding: 10px;
    flex-grow: 1;
`;

export const ProductDetailContainerError = styled(ProductDetailContainer)`
    border: none;
    align-items: center;
`;

export const NavbarContainer = styled(Container)`
    justify-content: space-between;
    border-bottom: 1px solid #0077BF;
    min-height: 50px;
    padding: 5px;
    flex-grow: 1;

    a {
        text-decoration: none;
        align-self: center;
    }

    img {
        width: 150px;
        margin-left: 15px;
    }
`;

export const FilterContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    padding: 15px;
`;

export const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #0077BF;
    border-radius: 5px;
    width: 200px;
    margin: 15px;
`;

export const ProductDetail = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
`;

export const ProductActions = styled(ProductDetail)`
    flex-direction: column;
`;

export const ShoppingCartDetail = styled(ProductDetail)`
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #0077BF;
    border-radius: 5px;
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
    border-radius: 0 5px 5px 0;
`;

export const DefaultInput = styled.input`
    padding: 15px;
    font-size: 14px;
    border: 1px solid #c1c1c1;
    flex-grow: 1;
    border-radius: 5px 0 0 5px;
`;

export const MyCart = styled.div`
    align-self: center;
    height: 20px;
    padding: 5px 10px;
    text-align: center;
    background:#0077BF;
    border-radius: 5px;
    margin-right: 15px;

    a {
        font-size: 14px;
        font-weight: bold;
        color: #ffffff;
    }

    label {
        position: absolute;
        background: #F95913;
        border: 1px solid #F95913;
        color: #ffff;
        border-radius: 50%;
        margin: -10px 0 -20px 0;
        width: 20px;
        height: 20px;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const ProductImage = styled.img`
    width: 150px;
`;

export const Title = styled.h1`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
`;

export const DefaultParagraph = styled.p`
    font-size: 12px;
`;

export const DefaultPrice = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

export const ProductDetailsInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 15px;
`;

export const BackToCartButton = styled.div`
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
    margin: 15px;

    a {
        font-size: 14px;        
        color: #ffffff;
        text-decoration: none;
    }
`;

export const ProductListButton = styled(ProductDetailsButton)`    
    flex-grow: 1;
    text-align: left;
    background: none;

    a { 
        color: #0077BF;
        font-weight: bold;
    }

    a:hover {
        text-decoration: underline;
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
    border: none;
    font-size: 18px;
    font-weight: bold;
    width: 30px;
    height: 30px;
`;

export const QuantityLabel = styled.label`
    font-size: 24px;
    font-weight: bold;
    padding: 0 10px;
`;

export const SubTotalContainer = styled(Container)`
    justify-content: space-between;
    margin-left: 15px;
`;

export const SubTotalInfo = styled.div`
    flew-grow: 1;
    text-align: left;
`;