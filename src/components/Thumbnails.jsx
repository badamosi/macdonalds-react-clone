import React from 'react'
import styled from 'styled-components'
import ThumbItem from './ThumbItem';
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'

const Container = styled.div`
    width: 25%;
    height: 100vh;
    display: flex;
    flex-direction: column;


    @media only screen and (max-width: 480px){
        width: 100%;
    }
`;


function Thumbnails() {
      const data = [
        {
            title: "Iced Latte",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: Img1,
            top: 1
        },
        {
            title: "Ice Caramel Macchiato",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: Img2,
            top: 0
        }
    ]
      
    console.log(data)
    return (
        <Container>
            {/* <ThumbItem top="1" /> */}
            {data.map(dt => (<ThumbItem data={dt} key={dt.title} />))}
        </Container>
    )
}

export default Thumbnails
