import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import IconNotif from 'react-native-vector-icons/Entypo';

const Start = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../Assets/Baground.png')}
      resizeMode="stretch"
      style={Styles.image}>
      <View style={Styles.container}>
        <Text style={Styles.contain}>PEMBELAJARAN INTERAKTIF</Text>
        <Text style={Styles.contain}>TK AMANAH BANGSA</Text>
        <TouchableOpacity
          style={Styles.play}
          onPress={() => navigation.navigate('Menu')}>
          <Image source={require('../../Assets/play.png')} />
        </TouchableOpacity>

        <View style={Styles.Databes}>
          <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <IconNotif name="database" size={30} color="#09840F" />
            <Text style={{color: '#09840F'}}>INFO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const Styles = StyleSheet.create({
  image: {
    flex: 1,
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    marginTop: 112,
  },

  contain: {
    fontSize: 20,
    color: '#09840F',
    paddingLeft: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    padding: 30,
  },
  Databes: {
    marginLeft: 310,
    marginTop: 112,
  },
});

export default Start;
