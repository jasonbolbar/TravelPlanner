import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import FlightHeader from './FlightHeader';

import {styles} from './_styles';

export default ({data}) => (
  <View style={styles.body}>
    <FlightHeader />
    <Text>{JSON.stringify(data)}</Text>
  </View>
);
