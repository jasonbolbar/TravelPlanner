import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import FlightHeader from './FlightHeader';
import {Actions} from 'react-native-router-flux';

import {styles} from './_styles';

export default () => {
  const goToOrlando = () => Actions.flight({data: {hello: 'world'}});
  const goToCostaRica = () => Actions.flight({data: {bye: 'world'}});
  return (
    <View style={styles.body}>
      <FlightHeader />
      <View style={styles.indexBody}>
        <View style={styles.bagInfoContainer}>
          <Text style={styles.bagInfoText}>
            Item Personal: 45 X 35 X 20 cm y 10 kg
          </Text>
          <Text style={styles.bagInfoText}>
            Maleta Documentada: 158 cm y 18.1 kg
          </Text>
        </View>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={goToOrlando}>
            <View style={styles.indexButton}>
              <Text style={styles.bagInfoText}>San José (SJO) - Orlando</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={goToCostaRica}>
            <View style={styles.indexButton}>
              <Text style={styles.bagInfoText}>Orlando (MCO) - San Jose</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};
