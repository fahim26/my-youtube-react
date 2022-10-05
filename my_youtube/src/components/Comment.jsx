import React from 'react'
import styled from 'styled-components';

const CommentContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0px;
`;

const CommentImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #999999;
`;

const CommentDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${({ theme }) => theme.text};
    padding: 5px;
    gap: 10px;
`;

const NameDate = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

`;

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`;

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
`;


const CommentDesc = styled.span`
    font-size: 14px;
`;

const Comment = () => {
    return (
        <CommentContainer>
            <CommentImg src="https://i.ibb.co/Jrwtv8g/images-1.jpg" />
            <CommentDetail>
                <NameDate>
                    <Name> Fahimul Islam </Name>
                    <Date> 13 August, 2022</Date>
                </NameDate>
                <CommentDesc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam minus soluta quisquam ipsum vel? Eos soluta recusandae expedita voluptatem quidem. Asperiores ea deserunt tempore quasi, natus eveniet. Sint, qui quidem.
                </CommentDesc>
            </CommentDetail>
        </CommentContainer>
    )
}

export default Comment
