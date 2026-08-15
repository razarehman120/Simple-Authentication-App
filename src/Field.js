import {TextInput} from 'react-native';
import React from 'react';
import {darkgreen} from './Constents';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        color: darkgreen,
        backgroundColor: 'rgb(220 ,220 ,220)',
        borderRadius: 100,
        paddingHorizontal: 10,
        marginVertical:10,
        paddingRight:10,
        width:"65%",
      }}
      placeholderTextColor={darkgreen}></TextInput>
  );
};

export default Field;
