import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

const Info = () => {
  return (
    <ImageBackground
      source={require('../../Assets/Baground.png')}
      resizeMode="stretch"
      style={Styles.image}>
      <View style={Styles.Contaainer}>
        <View style={Styles.Contain}>
          <Text style={Styles.Info}>INFORMASI</Text>
          <Text style={Styles.ContainInfo}>
            Aplikasi Dibuat Untuk Tingkat Taman Kanak-Kanak Khususnya Pada TK
            Amanah Bangsa Di Kel. JeneBatu, Kec. BUngaya, Kab. Gowa. Guna Untuk
            Meningkatkan Semngat Belajar Yang Interaktif.
          </Text>
          <Text style={Styles.Info}>Pembuat </Text>
          <Text style={Styles.InfoNama}>Kamaruddin</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const Styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  Contaainer: {
    flex: 1,
  },
  Contain: {
    padding: 30,
    justifyContent: 'center',
    flex: 1,
  },
  Info: {
    color: '#000',
    fontSize: 20,
    marginTop: 10,
    fontWeight: '800',
  },
  ContainInfo: {
    color: '#000',
    fontSize: 17,
    marginTop: 10,
  },
  InfoNama: {
    color: '#000',
    fontSize: 20,
  },
});

export default Info;
