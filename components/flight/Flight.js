import React from 'react';
import {View, Text, Image} from 'react-native';
import moment from 'moment';

const esLocale = require('moment/locale/es');
moment.locale('es', esLocale);
import FlightHeader from './FlightHeader';

import {styles} from './_styles';

export default data => (
  <View style={styles.body}>
    <FlightHeader />
    <View style={styles.indexBody}>
      <View style={styles.flight_title}>
        <Text style={styles.bagInfoText}>{data.title}</Text>
        <Text style={styles.bagInfoText}>
          N° de vuelo: {data.flight_number}
        </Text>
      </View>
      <View style={styles.flight_schema}>
        <View style={styles.initial_schema}>
          <Text>{moment(data.initial_date).format('ddd D MMM')}</Text>
          <Text>{data.initial_time}</Text>
          <Text>Terminal: {data.initial_terminal}</Text>
          <Text>Puerta: {data.initial_gate}</Text>
        </View>
        <View style={styles.flight_time}>
          <Image source={require('../../images/route-airplane.png')} />
          <Text>{data.flight_time}</Text>
        </View>
        <View style={styles.final_schema}>
          <Text>{moment(data.final_date).format('ddd D MMM')}</Text>
          <Text>{data.final_time}</Text>
          <Text>Terminal: {data.final_terminal}</Text>
          <Text>Puerta: {data.final_gate}</Text>
        </View>
      </View>
      <View style={styles.flight_seats}>
        <Text style={styles.bagInfoText}>Asientos: {data.seats}</Text>
      </View>
      <View style={styles.flight_notes}>
        <Text style={styles.bagInfoText}>Transporte hotel-aeropuerto</Text>
        <Text style={styles.transportation_notes}>{data.transportation_notes}</Text>
      </View>
    </View>
  </View>
);
