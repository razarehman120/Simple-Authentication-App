import {View, Text, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from './Background';
import {darkgreen} from './Constents';
import Field from './Field';
import Btn from './Btn';

const Login = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 430}}>
        <Text
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            marginVertical: 10,
            color: 'white',
          }}>
          Log in
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            width: 460,
            height: 700,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkgreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'grey',
              fontSize: 19,
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field placeholder="Email/Username" keyboardType={'email-addres'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: 'flex-end',
              width: '65%',
              paddingRight: 16,
              marginBottom: 180,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: darkgreen}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkgreen}
            btnLabel="Log in"
            press={() => Alert('Logged In')}
          />
          <View
            style={{
              flexDirection: 'row',
              direction: 'flex',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: darkgreen}}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
