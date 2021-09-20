import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, 
        CategoryArea, 
        CategoryList, 
        ProductArea, 
        ProductList, 
        ProductPaginationArea, 
        ProductPaginationItem
    } from './styled';
import ReactTooltip from 'react-tooltip';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';

let searchTimer = null;

export default () => {

    const history = useHistory();

    const [headerSearch, setHeaderSearch]= useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const [activeCategory, setActiveCategory] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [activeSearch, setActiveSearch] = useState('');

    const getProducts = async () => {
        const prods = await api.getProducts(activeCategory, activePage, activeSearch);
        if(prods.error == '') {
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
        }
    }

    useEffect(() =>{
        const getCategories = async () => {
            const cat = await api.getCategories();
            if(cat.error == '') {
                setCategories(cat.result);
                console.log(cat.result);
            }
            ReactTooltip.rebuild();
        }
        getCategories();
    }, []);

    useEffect(() => {
        setProducts([]);
        getProducts();
    }, [activeCategory, activePage, activeSearch]);

    useEffect(() => {
        clearTimeout(searchTimer);

        searchTimer = setTimeout(() => {
            setActiveSearch(headerSearch);
            console.log(headerSearch);
        }, 2000)

    }, [headerSearch]);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma categoria {activeCategory}
                    <CategoryList>
                        <CategoryItem data={
                            {
                                id: 0, 
                                name: 'Todas as categorias', 
                                image: '/assets/food-and-restaurant.png'
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory} 
                        />
                        {categories.map((i, k) => 
                            <CategoryItem 
                                key={k} 
                                data={i}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory} 
                            />
                        )}
                    </CategoryList>
                </CategoryArea>
            }

            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((i, k) => 
                            <ProductItem key={k} data={i} />
                        )}
                    </ProductList>
                </ProductArea>            
            }

            {totalPages > 0 &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item, index)=>
                        <ProductPaginationItem 
                            key={index} 
                            active={activePage} 
                            current={index + 1}
                            onClick={() => setActivePage(index + 1)}
                        >
                            {index + 1}
                        </ProductPaginationItem>
                    )}
                </ProductPaginationArea>
            }
            

        </Container>
    );
}