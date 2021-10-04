import styled, { keyframes } from 'styled-components';

// const bounce = keyframes`
//     0% {transform: translateY(10px);}
//     100% {transform: translateY(0);}
// `;

export const CartArea = styled.div`
    background-color: #136713;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position:fixed;
    bottom:0;
    right:30px;
`;
export const CartHeader = styled.header`
    width: 290px;
    height: 50px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    cursor:pointer;
`;
export const CartIcon = styled.img`
    width: 23px;
    height: 23px;
    margin-right: 10px;
`;
export const CartText = styled.h2`
    color: #FFF;
    font-size: 17px;
`;
export const CartArrow = styled.img`
    width: 23px;
    height:auto;
    transform: ${props => props.showCart ? 'rotate(0)' : 'rotate(-180deg)'};
    transition: all .4s ease;
    
`;
export const CartBody = styled.div`
    display: ${props => props.showCart ? 'flex' : 'none'};
    color:#FFF;
`;
export const ProductsArea = styled.div``;

export const ProductItem = styled.div`
    display:flex;
    margin:10px;
`;
export const ProductPhoto = styled.img`
    width:64px;
    height:auto;
    border-radius:10px;
`;
export const ProductInfoArea = styled.div`
    flex:1;
    margin-left:10px;
`;
export const ProductName = styled.div`
    font-size:15px;
    font-weight:bold;
`;
export const ProductPrice = styled.div`
    font-size:13px;
`;
export const ProductQuantityArea = styled.div`
    display:flex;
    align-items:center;
`;
export const ProductQtIcon = styled.img`
    width:13px;
    height:auto;
    margin:0 5px;
    cursor:pointer;
`;
export const ProductQtText = styled.div`
    font-size:13px;
    font-weight:bold;
`;

// animation: ${bounce} 1s infinite alternate;