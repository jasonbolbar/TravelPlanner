import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './_styles';
import data from '../../data/hotel';

export default () => (
  <View style={styles.body}>
    <View style={styles.bannerContainer}>
      <Image
        source={require('../../images/hotel-banner.jpg')}
        style={styles.banner}
      />
    </View>
    <View style={styles.hotelLogoContainer}>
      <Image source={require('../../images/hotel.png')} />
    </View>
    <View style={styles.infoContainer}>
      <ScrollView>
        <View style={styles.scrollBody}>
          <View style={styles.hotelInfoContainer}>
            <Text style={styles.text}>{data.name}</Text>
            <Text style={styles.text}>Dirección: {data.address}</Text>
            <Text style={styles.text}>Toll Free: {data.toll_free}</Text>
            <Text style={styles.text}>Local: {data.phone}</Text>
            <Text style={styles.text}>Check-in: {data.check_in}</Text>
            <Text style={styles.text}>Check-out: {data.check_out}</Text>
          </View>
          <View style={styles.transportationContainer}>
            <Text>Transportes</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  </View>
);
