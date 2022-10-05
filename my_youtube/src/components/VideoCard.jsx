import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from './Comments';
import Card from './Card';


const Container = styled.div`
    display:flex;
    gap: 24px;
`;

const Wrapper = styled.div`
    flex:7;
`;
const VideoPlayer = styled.div`
    
`;

const Recommendation = styled.div`
    flex:3;
   
`;

const VideoImage = styled.img`
    width: 100%;
    height:800px;
   
`;



const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const ChannelImage = styled.img`
    width: 100px;
    height:100px;
    border-radius: 50%; 
    background-color: #999999;
`;

const Texts = styled.div`
    font-size:16px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text};

`;

const Title = styled.h1`
    font-size:16px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text};
`;




const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`;




const ButtonsGroup = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};

`;

const Button = styled.div`
    display: flex; 
    align-items: center;
    gap: 5px;
    cursor: pointer;

`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`;

const CreatorContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ChannelCreator = styled.div`
    display: flex;
    gap: 20px;
    
`;

const CreatorImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #999999;
`;

const CreatorInfo = styled.span`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text};

`;


const Subscribe = styled.button`
    height: 44px;
    border: 2px solid #eb344f;
    background-color: #eb344f;
    border-radius: 4px;
    color: white;
    font-size: 15px;
    text-align: center;
`;

const ChannelName = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    margin: 9px 0px;
`;

const SubInfo = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin-top: 5px;
    margin-bottom: 20px;
`;

const ChannelInfo = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`;




const VideoCard = () => {
    return (
        <Container>
            <Wrapper>
                <VideoPlayer>
                    <VideoImage />
                </VideoPlayer>
                <Title> My First Video</Title>
                <Details>
                    <Info>1M views     1 day ago</Info>
                    <ButtonsGroup>
                        <Button>
                            <ThumbUpOutlinedIcon />
                            324
                        </Button>
                        <Button>
                            <ThumbDownOffAltOutlinedIcon />
                            Dislike
                        </Button>
                        <Button>
                            <ReplyOutlinedIcon />
                            Share
                        </Button>
                        <Button>
                            <AddTaskOutlinedIcon />
                            Save
                        </Button>
                    </ButtonsGroup>
                </Details>
                <Hr />
                <CreatorContainer>
                    <ChannelCreator>
                        <CreatorImage src="https://i.ibb.co/Jrwtv8g/images-1.jpg"/>
                        <CreatorInfo>
                            <ChannelName>
                                T Sports
                            </ChannelName>
                            <SubInfo>
                                2M subscribers
                            </SubInfo>
                            <ChannelInfo>
                                This is Your Favourite Channel. Welcome Guys. Enjoy .//.This is Your Favourite Channel. Welcome Guys. Enjoy ....
                                This is Your Favourite Channel. Welcome Guys. Enjoy ....
                                This is Your Favourite Channel. Welcome Guys. Enjoy ....
                            </ChannelInfo>
                        </CreatorInfo>
                    </ChannelCreator>
                    <Subscribe>
                        SUBSCRIBE
                    </Subscribe>
                </CreatorContainer>
                <Hr />
                <Comments />

            </Wrapper>
            <Recommendation>
                <Card type="recom"/>
                <Card type="recom"/>
                <Card type="recom"/>
                <Card type="recom"/>
                <Card type="recom"/>
                <Card type="recom"/>
                <Card type="recom"/>
                <Card type="recom"/>
                <Card type="recom"/>
                <Card type="recom"/>
                <Card type="recom"/>
                <Card type="recom"/>

            </Recommendation>
        </Container>
    )
}

export default VideoCard
