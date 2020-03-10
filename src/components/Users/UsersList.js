import React from 'react';
import styled from 'styled-components';

export const UsersList = ({text, img}) => {
  return (
    <ListWrapper>
      <List>
        <Image source={{uri: img}} />
        <Text>{text}</Text>
      </List>
    </ListWrapper>
  );
};

const ListWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-color: #fff;
  padding: 5px;
`;

const Image = styled.Image`
  height: 200;
  width: 100%;
  border-top-right-radius: 8;
  border-top-left-radius: 8;
`;

const Text = styled.Text`
  font-size: 18;
  padding: 20px;
`;

const List = styled.View`
  width: 95%;
  border-width: 3;
  border-color: #ccc;
  border-radius: 10;
`;
