import React from 'react'
import LogoImg from '../assets/logo.png'
import ImgMain from '../assets/main-img.png'
import styled from 'styled-components'

const Container = styled.div`
    width: 75%;
    height: 100vh;
    background-color: chocolate;
    padding: 20px;
`;

const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin: 40px 0;
`;

const Logo = styled.img`
    width: 100px;
`;

const Menu = styled.ul`
    list-style: none;
    text-decoration: none;
    color: white;
`;

const MenuItem = styled.li`
    display: inline-block;
    margin-right: 30px;
    font-size: 20px;
    font-weight: 500;
`;

const CartIcon = styled.img`
    width: 50px;
`;

const Body = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin: 8% auto;
    height: 70vh;
    width: 80%;
    /* background-color: blue; */
`;

const MainImg = styled.img`
    width: 40%;
`;

const Wrapper = styled.div`
    width: 50%;
    padding: 10px;
`;

const Title = styled.h1`
    font-size: 75px;
    color: orange;
    letter-spacing: 2px;
    font-weight: bold;
    margin-top: 0 !important;
`;

const Nutrition = styled.h3`
    font-size: 30px;
    color: white;
`;

const SubTitle = styled.p`
    font-size: 20px;
    color: white;
`;

const CartButton = styled.button`
    padding: 10px 15px;
    color: white;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 30px;
    font-size: 25px;

`;


function Main() {
    return (
        <Container>
            <Header>
                <Logo src={LogoImg} />
                <Menu>
                    <MenuItem>Menu</MenuItem>
                    <MenuItem>McCafe</MenuItem>
                    <MenuItem>Trending</MenuItem>
                    <MenuItem>Career</MenuItem>
                </Menu>
                <CartIcon />
            </Header>
            <Body>
                <MainImg src={ImgMain} />
                <Wrapper>
                    <Title>Caramel <br />Mocha</Title>
                    <Nutrition>310 cal.</Nutrition>
                    <SubTitle>The caramel mocha is made with expertly roasted expresso beans</SubTitle>
                    <CartButton>Add to Chart</CartButton>
                </Wrapper>
            </Body>
        </Container>
    )
}

export default Main
