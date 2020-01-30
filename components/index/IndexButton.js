import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {styles} from './_styles';
import {Actions} from 'react-native-router-flux';

const IndexButton = ({text, icon, scene}) => {
  const onPressButton = () => {
    Actions[scene]();
  };
  return (
    <TouchableOpacity onPress={onPressButton}>
      <View style={styles.button}>
        <FontAwesomeIcon icon={icon} size={32} />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

IndexButton.defaultProps = {
  scene: 'index',
}

export default IndexButton;
