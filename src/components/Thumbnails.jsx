import React from 'react'
import styled from 'styled-components'
import ThumbItem from './ThumbItem';

const Container = styled.div`
    width: 25%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;


function Thumbnails() {
    return (
        <Container>
            <ThumbItem top="1" />
            <ThumbItem />
        </Container>
    )
}

export default Thumbnails
