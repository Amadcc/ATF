import React from 'react';
import styled from 'styled-components';

export const UsersList = ({text, img, status}) => {
  return (
    <ListWrapper>
      <List>
        <Image
          source={{uri: img}}
          style={{width: 100, height: 100, borderRadius: 400 / 2}}
        />
        <TextWrapper>
          <Text>{text}</Text>
          <Text>{status}</Text>
        </TextWrapper>
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
const TextWrapper = styled.View``;

const Image = styled.Image`
  height: 200;
  width: 100%;
`;

const Text = styled.Text`
  font-size: 18;
  padding: 12px;
`;

const List = styled.View`
  flex-direction: row;
  display: flex;
  font-size: 22px;
  width: 95%;
  padding: 2%;
  border-width: 3;
  border-color: #ccc;
  border-radius: 10;
`;
