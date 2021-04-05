import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const EmailStateFalse = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Email Status Inacitve
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            // onPress={navigation.push('ButtonScreen')}
            onPress={() => {
              AsyncStorage.clear();
              props.navigation.replace('Auth');
            }}>
            <Text>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailStateFalse;
