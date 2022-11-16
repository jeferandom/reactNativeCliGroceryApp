import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const ShoppingListItem = ({ item, bgColor = "#44d3dd", fontStyle = {
  fontSize: 20,
  color: "#212529",
} }) => {
  const { title = `[list title here]`, } = item;
  return (
    <ShoppingListItemBox bgColor={bgColor} height={100} width={300}>
      <Text style={fontStyle}>{title}</Text>
    </ShoppingListItemBox>
  )
}

const ShoppingListItemBox = styled.TouchableOpacity`
  flex-direction: row;
  padding: 0 16px;
  margin: 12px 0;
  height:  ${({ height }) => height};
  width:  ${({ width }) => width};
  border-radius: 5 ;
  background-color: ${({ bgColor }) => bgColor};
`;



export default ShoppingListItem
