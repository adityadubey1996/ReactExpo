import React from 'react'

const DATA = [
  {
    name: 'brynn',
    id: '1',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '2',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '3',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '4',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '5',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '6',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },

  {
    name: 'brynn',
    id: '7',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '8',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '9',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '10',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '11',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '12',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '13',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '14',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    id: '15',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
]
import { View, Text, Image, FlatList, SafeAreaView, Animated } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const Item = ({ title, avatar }) => {
  console.log('Item -> title', title)
  return (
    <Card style={{}}>
      <View style={{}}>
        <Text>{title}</Text>
        <Image resizeMode="cover" source={{ uri: avatar }} />
      </View>
    </Card>
  )
}

const CardComponent = () => {
  const renderItem = ({ item, avatar }) => {
    const inputRange = [-1, 0, 100, 200]
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    })
    return (
      <Animated.View
        style={
          {
            //   transform: [{ scale }],
          }
        }
      >
        <Item style={{}} title={item.name} />
      </Animated.View>
    )
  }
  const scrollY = React.useRef(new Animated.Value(0)).current
  return (
    <SafeAreaView>
      <Animated.FlatList
        data={DATA}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },

          shadowOpacity: 0.12,
          shadowRadius: 60,
          height: '100%',
        }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></Animated.FlatList>
    </SafeAreaView>
  )
}
export default CardComponent
