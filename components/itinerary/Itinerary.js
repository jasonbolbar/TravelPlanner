import React, {useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import DayPicker from './DayPicker';
import {styles} from './_styles';
import data from '../../data/itinerary';

import moment from 'moment';

const esLocale = require('moment/locale/es');
moment.locale('es', esLocale);

export default () => {
  const [selectedDay, setSelectedDay] = useState(Object.keys(data)[0]);
  const itineraryRef = React.createRef();
  const onDayChange = day => {
    itineraryRef.current.scrollTo({animated: false, x: 0, y: 0});
    setSelectedDay(day);
  };
  return (
    <View style={styles.body}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateContainerText}>
          {moment(selectedDay).format('dddd, LL')}
        </Text>
      </View>
      <DayPicker data={data} onDayChange={onDayChange} />
      <View style={styles.itineraryContent}>
        <ScrollView ref={itineraryRef}>
          {data[selectedDay].map((entry, index) => (
            <View key={index} style={styles.itineraryEntry}>
              <View style={styles.itineraryEntryTime}>
                <Text style={styles.dayAbr}>{entry.time}</Text>
              </View>
              <View style={styles.itineraryEntryDescription}>
                <Text style={styles.dayAbr}>{entry.description}</Text>
                {entry.notes ? <Text>{entry.notes}</Text> : null}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
