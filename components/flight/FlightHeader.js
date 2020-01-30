import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {styles} from './_header_styles';

export default () => (
  <View style={styles.body}>
    <View style={styles.bannerContainer}>
      <Image
        source={require('../../images/airplane-banner.jpg')}
        style={styles.banner}
      />
    </View>
    <View style={styles.airlineInfoContainer}>
      <View style={styles.airlineLogoContainer}>
        <Image
          source={require('../../images/spirit.png')}
          style={styles.airlineLogo}
        />
      </View>
      <View style={styles.airlineInfo}>
        <Text style={styles.airlineInfoText}>Apellido: Bolanos</Text>
        <Text style={styles.airlineInfoText}>Código: LHWIPN</Text>
      </View>
    </View>
  </View>
);
