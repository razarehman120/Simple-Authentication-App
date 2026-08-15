import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from './Background';
import Field from './Field';
import Btn from './Btn';
import {darkgreen} from './Constents';

const Signup = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 430}}>
        <Text
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            fontSize: 19,
            color: 'white',
            marginBottom: 20,
            fontWeight: 'bold',
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 430,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder=" First Name" keyboardType={'email-address'} />
          <Field placeholder=" Last Name" />
          <Field placeholder=" Email/Username" />
          <Field placeholder=" Contact Number" keyboardType={'number'} />
          <Field placeholder=" Password" secureTextEntry={true} />
          <Field placeholder=" Confirm Password" secureTextEntry={true} />
          <View
            style={{
              flexDirection: 'row',
              direction: 'flex',
            }}>
            <Text style={{fontSize: 15, color: 'grey'}}>
              By Signing in, you are agreed to our{''}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: darkgreen,
                paddingRight: 35,
              }}>
              Terms & conditions
            </Text>
          </View>

          <Btn
            onPress={() => props.navigation.navigate('Login')}
            bgColor={darkgreen}
            btnLabel={'Sign up'}
            textColor={'white'}
          />
          <View
            style={{
              flexDirection: 'row',
              direction: 'flex',
              justifycontent: 'center',
            }}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{fontSize: 15, fontWeight: 'bold', color: darkgreen}}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
