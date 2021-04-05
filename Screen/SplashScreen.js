import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  const [animation, setanimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setanimation(false);
      AsyncStorage.getItem('user_id').then(value => {
        if (value) {
          AsyncStorage.getItem('EmailStatus').then(valueState => {
            console.log('SplashScreen -> valueState', valueState);
            navigation.replace(
              valueState === 'false' ? 'EmailStateFalse' : 'BottomTabs',
            );
          });
        } else {
          navigation.replace(value === null ? 'Auth' : 'BottomTabs');
        }
      });
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image
            source={require('../Image/aboutreact.png')}
            style={{width: '90%', resizeMode: 'contain', margin: 30}}
          /> */}
      <ActivityIndicator
        animating={animation}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
