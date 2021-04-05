import React from 'react';
import {View, Text, SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import CardsScreen11 from './Components/card.js';
const ListViewScreen = props => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text>This is the List view Screen</Text>
        </View>
        <View>
          <CardsScreen11 />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListViewScreen;
