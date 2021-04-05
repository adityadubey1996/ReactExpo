import React, { useState, createRef } from 'react'
import { StyleSheet, TextInput, View, Text, ScrollView, Image, Keyboard, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import ProjectSettings from '../Global'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import { LoginActions } from '../redux/actions/Login'
import Loader from './Components/Loader'
const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errortext, setErrortext] = useState('')
  const dispatch = useDispatch()
  const state = useSelector((state) => state.LoginReducer)
  const LoadingState = useSelector((state) => state.Loaderreducer.state)
  const passwordInputRef = createRef()

  const handleSubmitPress = () => {
    setErrortext('')
    if (!userEmail) {
      alert('Please fill Email')
      return
    }
    if (!userPassword) {
      alert('Please fill Password')
      return
    }
    setLoading(true)
    let formBody = {
      email: userEmail,
      password: userPassword,
    }
    dispatch(LoginActions(userEmail, userPassword))

    // if (Object.keys(state).length > 0) {
    //   console.log('LoginScreen -> state', state)

    //   if (state.sucees) {
    //     console.log('LoginScreen -> state', state)

    //     if (state.emailState) {
    //       setLoading(false)
    //       navigation.replace('BottomTabs')
    //     } else {
    //       setLoading(false)
    //       navigation.replace('EmailStateFalse')
    //     }
    //   } else {
    //     setLoading(false)
    //     setErrortext('something went wrong')
    //   }
    // }
    // dispatch({
    //   type: 'LOGIN',
    //   formBody,
    // })

    // for (let key in dataToSend) {
    //   let encodedKey = encodeURIComponent(key);
    //   let encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    // formBody = formBody.join('&');

    // fetch(`${ProjectSettings.baseURL}/api/auth/login`, {
    //   method: 'POST',
    //   body: JSON.stringify(formBody),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log('handleSubmitPress -> responseJson', responseJson)
    //     //Hide Loader
    //     setLoading(false)
    //     // If server response message same as Data Matched
    //     if (responseJson.sucees) {
    //       AsyncStorage.setItem('user_id', responseJson.token)
    //       AsyncStorage.setItem('EmailStatus', JSON.stringify(responseJson.user.emailState))
    //       if (responseJson.user.emailState) {
    //         navigation.replace('BottomTabs')
    //       } else {
    //         navigation.replace('EmailStateFalse')
    //       }
    //     } else {
    //       setErrortext(responseJson.message)
    //       console.log('Please check your email id or password')
    //     }
    //   })
    //   .catch((error) => {
    //     console.log('LoginScreen -> error', error)
    //     //Hide Loader
    //     setLoading(false)
    //   })
  }
  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: 'center' }}>
              {/* <Image
                source={require('../Image/aboutreact.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              /> */}
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current && passwordInputRef.current.focus()}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? <Text style={styles.errorTextStyle}>{errortext}</Text> : null}
            <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.registerTextStyle} onPress={() => navigation.navigate('RegisterScreen')}>
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
})
export default LoginScreen
