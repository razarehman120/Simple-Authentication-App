import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Background from './Background';
import Btn from './Btn';
import {darkgreen, green} from './Constents';

const Home = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginTop: 100, marginBottom: 40}}>
        <Text style={{fontSize: 60, color: 'white'}}>Let's Start </Text>
        <Text style={{fontSize: 60, color: 'white'}}>Coding</Text>
      </View>
      <View style={{marginHorizontal: 20, width: 550}}>
        <Btn
          bgColor={green}
          textColor="white"
          btnLabel="Log in"
          press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor="white"
          textColor={darkgreen}
          btnLabel="Sign up"
          press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};
const styles = StyleSheet.create({});
export default Home;
