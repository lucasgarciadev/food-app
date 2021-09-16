import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList } from './styled';
import ReactTooltip from 'react-tooltip';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

export default () => {

    const history = useHistory();

    const [headerSearch, setHeaderSearch]= useState('');
    const [categories, setCategories] = useState([]);

    const [activeCategory, setActiveCategory] = useState(0);

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

    }, [activeCategory])

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

        </Container>
    );
}