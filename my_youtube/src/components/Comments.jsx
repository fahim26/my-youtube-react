import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';


const Container = styled.div`

`;

const NewCommentAdd = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const CommentorImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #999999;
`;

const CommentInput = styled.input`
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text};
    border-bottom: 3px solid ${({ theme }) => theme.soft};
    padding: 5px;
`;

const Comments = () => {
  return (
    <Container>
        <NewCommentAdd>
            <CommentorImg src="https://i.ibb.co/Jrwtv8g/images-1.jpg" />
            <CommentInput placeholder="add a comment ..."/>
        </NewCommentAdd>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        
    </Container>
  )
}

export default Comments
