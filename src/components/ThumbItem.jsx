import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 50vh;
    padding: 10px;
    background-color: ${props => props.top ? 'orange' : 'orangered'};
`;

function ThumbItem({top}) {
    return (
        <Container top={top}>
             Work in progress
        </Container>
    )
}

export default ThumbItem
