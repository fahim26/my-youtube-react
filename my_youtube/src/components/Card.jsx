import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";


const Container = styled.div`
    margin-bottom: 45px;
    width: 350px;
    cursor: pointer;
    display: ${(props) => props.type === "recom" && "flex"}

`;

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999999;
`;


const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`;

const ChannelImage = styled.img`
    width: 36px;
    height:36px;
    border-radius: 50%; 
    background-color: #999999;
`;

const Texts = styled.div`

`;

const Title = styled.h1`
    font-size:16px;
    font-weight: 500p;
    color: ${({theme}) => theme.text};
`;

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 9px 0px;
`;

const Info = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
`;


const Card = ({type}) => {
    return (
        <Link to="videos/" style={{textDecoration:"none"}}>
        <Container type={type}>
            <Image />
            <Details>
                <ChannelImage />
                <Texts>
                    <Title>My First Video</Title>
                    <ChannelName>Mirchi Bangla</ChannelName>
                    <Info> 1M views     1 day ago</Info>
                </Texts>
            </Details>
        </Container>
        </Link>

    )
}

export default Card
