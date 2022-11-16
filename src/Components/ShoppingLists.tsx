import React from "react";
import { Dimensions, FlatList, View } from "react-native"

import ShoppingListItem from "./ShoppingListItem";

const ShoppingLists = (props) => {
  const { bgColor = "#44d3dd", fontStyle, height = Dimensions.get('window').height - 200 } = props
  return (
    <View style={{ height }}>
      <FlatList
        data={[
          {
            id: "Test1",
            title: "Desayunos",
            detail: "Test",
            products: []
          },
          {
            id: "Test2",
            title: "Comestibles",
            detail: "Test",
            products: []
          },
          {
            id: "Test3",
            title: "Casa",
            detail: "Test",
            products: []
          },
          {
            id: "Test4",
            title: "Insumos Aseo",
            detail: "Test",
            products: []
          },
          {
            id: "Test5",
            title: "Desayunos",
            detail: "Test",
            products: []
          },
          {
            id: "Test6",
            title: "Comestibles",
            detail: "Test",
            products: []
          },
          {
            id: "Test7",
            title: "Casa",
            detail: "Test",
            products: []
          },
          {
            id: "Test8",
            title: "Insumos Aseo",
            detail: "Test",
            products: []
          },
        ]}
        renderItem={({ item }) => (
          <ShoppingListItem
            bgColor={bgColor}
            fontStyle={fontStyle}
            key={item.id}
            item={item}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}


export default ShoppingLists
