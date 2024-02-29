import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SoundPlayer from 'react-native-sound-player';
import Icon from 'react-native-vector-icons/Entypo';

const Angka = ({navigation}) => {
  const [animalIndex, setAnimalIndex] = useState(null);
  const [mute, setMute] = useState(false);

  const animalList = [
    require('../../Assets/angka/1.png'),
    require('../../Assets/angka/2.png'),
    require('../../Assets/angka/3.png'),
    require('../../Assets/angka/4.png'),
    require('../../Assets/angka/5.png'),
    require('../../Assets/angka/6.png'),
    require('../../Assets/angka/7.png'),
    require('../../Assets/angka/8.png'),
    require('../../Assets/angka/9.png'),
    require('../../Assets/angka/10.png'),
  ];
  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={require('../../Assets/imageAngka.png')}
          resizeMode="stretch"
          style={Styles.image}>
          <View style={Styles.IconContainer}>
            <TouchableOpacity
              style={{
                backgroundColor: '#45BB44',
                height: 50,
                width: 50,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('Menu');
              }}>
              <Icon name="arrow-long-left" size={50} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#45BB44',
                height: 50,
                width: 50,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                SoundPlayer.stop();
                setMute(prev => !prev);
              }}>
              <Icon
                name={mute ? 'sound-mute' : 'sound'}
                size={40}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={animalIndex !== null ? animalList[animalIndex] : ''}
              style={Styles.containImage}
            />
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../Assets/LatarBawa.jpg')}
          resizeMode="stretch"
          style={Styles.imageLatar}>
          <View style={Styles.container}>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(0);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('angka1', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/angka/1.png')}
                  style={Styles.Nomor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(1);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('angka2', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/angka/2.png')}
                  style={Styles.Nomor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(2);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('angka3', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/angka/3.png')}
                  style={Styles.Nomor}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(3);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('angka4', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/angka/4.png')}
                  style={Styles.Nomor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(4);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('angka5', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/angka/5.png')}
                  style={Styles.Nomor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(5);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('angka6', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/angka/6.png')}
                  style={Styles.Nomor}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(6);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('angka7', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/angka/7.png')}
                  style={Styles.Nomor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(7);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('angka8', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/angka/8.png')}
                  style={Styles.Nomor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(8);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('angka9', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/angka/9.png')}
                  style={Styles.Nomor}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={Styles.contain}
                onPress={() => {
                  setAnimalIndex(9);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('angka10', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/angka/10.png')}
                  style={Styles.Nomor10}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};
const Styles = StyleSheet.create({
  image: {
    height: 370,
  },
  imageLatar: {
    height: 530,
  },
  container: {
    padding: 50,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  Nomor: {
    height: 70,
    width: 70,
  },
  Nomor10: {
    height: 70,
    width: 100,
  },
  containImage: {
    height: 119,
    width: 150,
    marginTop: 70,
    marginLeft: 130,
    // backgroundColor: '#ffff',
  },
  IconContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    padding: 10,
    // marginTop: 50,
  },
});

export default Angka;
