import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 50vh;
    padding: 20px;
    background-color: ${props => props.top ? 'orange' : 'orangered'};
    color: white;
    text-align: center;
    position: relative;
`;

const Title = styled.h1`
    font-size: 20px;
`;

const Desc = styled.p`
    font-size: 16px;
`;

const Img = styled.img`
    width: 120px;
    margin: 10px 0;

    @media only screen and (max-width: 480px){
        margin: 20px 0;
        width: 150px;
    }
`;

const AddCart = styled.p`
    position: absolute;
    top: 0;
    left: 10;
`;

function ThumbItem({data}) {
    const {top, image, title, description} = data

    return (
        <Container top={top}>
            <AddCart>+ Add to Chart</AddCart>
             <Img src={image} />
            <Title>{title}</Title>
            <Desc>{description}</Desc>
        </Container>
    )
}

export default ThumbItem
