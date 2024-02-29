import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SoundPlayer from 'react-native-sound-player';

const Menu = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../Assets/Baground.png')}
      resizeMode="stretch"
      style={Styles.image}>
      <View style={Styles.container}>
        <View style={Styles.containMenu}>
          <TouchableOpacity
            style={Styles.ContainAngka}
            onPress={() => {
              {
                navigation.navigate('Angka');
                SoundPlayer.playSoundFile('belajarangka', 'mp4');
              }
            }}>
            <Image source={require('../../Assets/Angka.png')} />
            <Text style={Styles.Text}>Angka</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.ContainAngka}
            onPress={() => {
              {
                navigation.navigate('Huruf');
                SoundPlayer.playSoundFile('belajarhuruf', 'mp4');
              }
            }}>
            <Image source={require('../../Assets/Huruf.png')} />
            <Text style={Styles.Text}>Huruf</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <TouchableOpacity
            style={Styles.ContainAngka}
            onPress={() => {
              {
                navigation.navigate('Bentuk');
                SoundPlayer.playSoundFile('belajarbentuk', 'mp4');
              }
            }}>
            <Image source={require('../../Assets/Bentuk.png')} />
            <Text style={Styles.Text}>Bentuk</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.containMenu}>
          <TouchableOpacity
            style={Styles.ContainAngka}
            onPress={() => {
              {
                navigation.navigate('Warna');
                SoundPlayer.playSoundFile('belajarwarna', 'mp4');
              }
            }}>
            <Image source={require('../../Assets/warna.png')} />
            <Text style={Styles.Text}>Warna</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.ContainAngka}
            onPress={() => {
              {
                navigation.navigate('Hewan');
                SoundPlayer.playSoundFile('belajarhewan', 'mp4');
              }
            }}>
            <Image source={require('../../Assets/hewan.png')} />
            <Text style={Styles.Text}>Hewan</Text>
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
    flex: 1,
    justifyContent: 'center',
  },
  containMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ContainAngka: {
    width: 100,
    height: 115,
    borderRadius: 10,
    backgroundColor: '#09840F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Menu;
