import React from 'react';
import {View, Text, SafeAreaView, Alert, TouchableOpacity} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
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
            This is the Profile Screen
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            // onPress={navigation.push('ButtonScreen')}
            onPress={() => {
              navigation.navigate('ButtonScreen');
            }}>
            <Text>Test</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            // onPress={navigation.push('ButtonScreen')}
            onPress={() => {
              navigation.navigate('ImageUploadScreen');
            }}>
            <Text>Photo Upload</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            // onPress={navigation.push('ButtonScreen')}
            onPress={() => {
              navigation.navigate('ListViewScreen');
            }}>
            <Text>List screen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
