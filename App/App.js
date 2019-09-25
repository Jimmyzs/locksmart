/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const data = require('./SampleData/racks.json');

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import  MapView, { 
  PROVIDER_GOOGLE,
  Marker,
} from 'react-native-maps';


const App = () => {
  function addMarkers() {
    let markers = [];
    let key = 1;
    data.forEach((rack)=>{
      let LatLng = {
        latitude: rack.latitude,
        longitude: rack.longitude
      };

      markers.push(<Marker
        coordinate={LatLng} 
        key = {key}
      />)
      key++;
    });
    return markers;
  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView> 
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // Sets map as Google Maps
            style={styles.map}
            region={{
              latitude: 40.7678,
              longitude: -73.9645,
              latitudeDelta: 0.15,
              longitudeDelta: 0.121,
            }}
          >
            {addMarkers()}
          </MapView>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 1000,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
