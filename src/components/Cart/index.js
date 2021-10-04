import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartArea,
        CartHeader, 
        CartIcon, 
        CartText, 
        CartBody, 
        CartArrow,
        ProductsArea,
        ProductItem,
        ProductPhoto,
        ProductInfoArea,
        ProductName,
        ProductPrice,
        ProductQuantityArea,
        ProductQtIcon,
        ProductQtText 
    } from './styled';

export default () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.cart.products);

    const [show, setShow] = useState(true);

    const handleCartShow = () => {
        show === false ? setShow(true) : setShow(false);
    }

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {key, type}
        })
    }

    return(
        <CartArea>
            <CartHeader onClick={handleCartShow}  >
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu Carrinho ({products.length})</CartText>
                <CartArrow showCart={show} src="/assets/down.png" alt="arrow" />
            </CartHeader>
            <CartBody showCart={show} >
                <ProductsArea>
                    {products.map((i, k) => 
                        <ProductItem key={k} >
                            <ProductPhoto src={i.image} />
                            
                            <ProductInfoArea>
                                <ProductName>{i.name}</ProductName>
                                <ProductPrice>R$ {i.price.toFixed(2)}</ProductPrice>
                            </ProductInfoArea>

                            <ProductQuantityArea>
                                <ProductQtIcon 
                                    src="/assets/minus.png" 
                                    onClick={(()=>handleProductChange(k, '-'))}
                                />
                                <ProductQtText>{i.qt}</ProductQtText>
                                <ProductQtIcon 
                                    src="/assets/plus.png"
                                    onClick={(()=>handleProductChange(k, '+'))} 
                                />
                            </ProductQuantityArea>
                        </ProductItem>
                    )}
                    
                </ProductsArea>
            </CartBody>
        </CartArea>
    );
}