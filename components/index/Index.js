import React from 'react';
import {View, ImageBackground} from 'react-native';
import {styles} from './_styles';
import IndexButton from './IndexButton';
import {
  faCalendarAlt,
  faPlane,
  faBed,
  faUtensils,
  faShoppingBag,
  faCalculator,
  faCloudSunRain,
  faInfo,
  faAddressBook,
  faTree,
} from '@fortawesome/free-solid-svg-icons';

export default () => (
  <ImageBackground
    source={require('../../images/background.jpg')}
    style={{width: '100%', height: '100%'}}>
    <View style={styles.body}>
      <View style={styles.row}>
        <View style={styles.column}>
          <IndexButton
            text="Itinerario"
            icon={faCalendarAlt}
            scene="itinerary"
          />
        </View>
        <View style={styles.column}>
          <IndexButton text="Vuelo" icon={faPlane} scene="flightIndex" />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <IndexButton text="Hotel" icon={faBed} scene="hotel" />
        </View>
        <View style={styles.column}>
          <IndexButton text="Comida" icon={faUtensils} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <IndexButton text="Atraciones" icon={faTree} />
        </View>
        <View style={styles.column}>
          <IndexButton text="Compras" icon={faShoppingBag} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <IndexButton text="Gastos" icon={faCalculator} />
        </View>
        <View style={styles.column}>
          <IndexButton text="Clima" icon={faCloudSunRain} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <IndexButton text="Información" icon={faInfo} />
        </View>
        <View style={styles.column}>
          <IndexButton text="Directorio" icon={faAddressBook} />
        </View>
      </View>
    </View>
  </ImageBackground>
);
