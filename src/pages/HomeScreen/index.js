import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container } from './styled';

import Header from '../../components/Header';

export default () => {

    const [headerSearch, setHeaderSearch]= useState('');

    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/tela2/testador');
    }

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
        </Container>
    );
}