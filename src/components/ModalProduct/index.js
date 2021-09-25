import React, { useState } from 'react';
import  { useDispatch } from 'react-redux';
import  { Container, 
        ProductArea,
        ProductPhoto,
        ProductInfoArea,
        ProductDetails,
        ProductName,
        ProductIngredients,
        ProductQuantityArea,
        ProductQuantity,
        ProductQtImage,
        ProductQtText,
        ProductPrice,
        ProductButtons,
        ProductButton
    } from './styled';

export default ({ data, setStatus }) => {

    const dispatch = useDispatch();

    const [qt, setQt] = useState(1);

    const CloseModal = () => {
        setQt(1);
        setStatus(false);
    }

    const handleMinusQt = () => {
        if(qt > 1) {
            setQt( qt - 1);
        }
    }

    const handlePlusQt = () => {
        setQt(qt + 1);
    }

    const handleAddToCart = () => {
        // juntar as informações
        // mandar para o reducer
        dispatch({
            type: 'ADD_PRODUCT',
            payload: {data, qt}
        })

        // fechar o modal
        setQt(1);
        setStatus(false);
    }

    return(
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                
                <ProductInfoArea>

                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>

                    <ProductQuantityArea>

                        <ProductQuantity>
                            <ProductQtImage onClick={handleMinusQt} src="/assets/minus.png" alt="minus" />
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtImage onClick={handlePlusQt} src="/assets/plus.png" alt="plus" />
                        </ProductQuantity>

                        <ProductPrice>
                            R$ {(data.price * qt).toFixed(2)}
                        </ProductPrice>

                    </ProductQuantityArea>

                </ProductInfoArea>

            </ProductArea>

            <ProductButtons>
                <ProductButton cancel={true} onClick={CloseModal} >Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart} >Adicionar ao carrinho</ProductButton>
            </ProductButtons>

        </Container>
    );
}