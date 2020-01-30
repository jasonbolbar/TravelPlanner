import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {styles} from './_styles';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

const esLocale = require('moment/locale/es');
moment.locale('es', esLocale);

export default ({data, onDayChange}) => {
  const [dayInterval, setDayInterval] = useState({initial: 0, end: 4});
  const [selectedDay, setSelectedDay] = useState(Object.keys(data)[0]);
  const onDaySelection = day => {
    setSelectedDay(day);
    onDayChange(day);
  };
  const goDayBack = () => {
    if (dayInterval.initial > 0 && dayInterval.end > 4) {
      setDayInterval({
        initial: dayInterval.initial - 4,
        end: dayInterval.end - 4,
      });
      setSelectedDay(Object.keys(data)[dayInterval.initial - 4]);
    }
  };
  const goDayForward = () => {
    if (dayInterval.initial < 4 && dayInterval.end < 8) {
      setDayInterval({
        initial: dayInterval.initial + 4,
        end: dayInterval.end + 4,
      });
      setSelectedDay(Object.keys(data)[dayInterval.initial + 4]);
    }
  };
  const applySelectedDayStyle = day => {
    if (selectedDay === day) {
      return {...styles.dayElement, borderWidth: 2, borderColor: 'blue',};
    }
    return styles.dayElement;
  };
  return (
    <View style={styles.dayContainer}>
      <TouchableWithoutFeedback onPress={goDayBack}>
        <View style={styles.dayNavButton}>
          <FontAwesomeIcon size={32} icon={faArrowLeft} />
        </View>
      </TouchableWithoutFeedback>
      {Object.keys(data)
        .slice(dayInterval.initial, dayInterval.end)
        .map(entry => (
          <TouchableWithoutFeedback onPress={() => onDaySelection(entry)}>
            <View style={applySelectedDayStyle(entry)}>
              <Text style={styles.dayAbr} key={`abr-${entry}`}>
                {moment(entry).format('ddd')}
              </Text>
              <Text style={styles.dayAbr} key={`dn-${entry}`}>
                {moment(entry).format('D')}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      <TouchableWithoutFeedback onPress={goDayForward}>
        <View style={styles.dayNavButton}>
          <FontAwesomeIcon size={32} icon={faArrowRight} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
