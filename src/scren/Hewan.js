import {
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import SoundPlayer from 'react-native-sound-player';
import Icon from 'react-native-vector-icons/Entypo';

const Hewan = ({navigation}) => {
  const [animalIndex, setAnimalIndex] = useState(null);
  const [mute, setMute] = useState(false);

  const animalList = [
    require('../../Assets/Hewan/Anjing.png'),
    require('../../Assets/Hewan/Ayam.png'),
    require('../../Assets/Hewan/Babi.jpg'),
    require('../../Assets/Hewan/Badak.jpg'),
    require('../../Assets/Hewan/Banteng.png'),
    require('../../Assets/Hewan/bebek.jpg'),
    require('../../Assets/Hewan/Beruang.jpg'),
    require('../../Assets/Hewan/Bunglong.jpg'),
    require('../../Assets/Hewan/Burung.png'),
    require('../../Assets/Hewan/cicak.jpg'),
    require('../../Assets/Hewan/domba.jpg'),
    require('../../Assets/Hewan/gaja.jpg'),
    require('../../Assets/Hewan/gorila.jpg'),
    require('../../Assets/Hewan/harimau.jpg'),
    require('../../Assets/Hewan/iguana.jpg'),
    require('../../Assets/Hewan/jerapa.jpg'),
    require('../../Assets/Hewan/kalajengking.jpg'),
    require('../../Assets/Hewan/kanguru.jpg'),
  ];

  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={require('../../Assets/Hewan/hewaanBaground.jpg')}
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
                size={50}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.ImageBackground}>
            <Image
              source={animalIndex !== null ? animalList[animalIndex] : ''}
              style={Styles.containerImage}
            />
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../Assets/ImageHuruf.png')}
          resizeMode="stretch"
          style={Styles.imageLatar}>
          <View style={Styles.container}>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(0);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('anjing', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>Anjing</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(1);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('ayam', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>AYAM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(2);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('babi', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>BABI</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(3);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('badak', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>BADAK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(4);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('banteng', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>BANTENG</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(5);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('bebek', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>BEBEK</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(6);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('beruang', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>BERUANG</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(7);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('bunglong', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>BUNGLON</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(8);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('burung', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>BURUNG</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(9);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('cicak', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>CICAK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(10);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('domba', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>DOMBA</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(11);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('gaja', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>GAJA</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(12);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('gorila', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>GORILA</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(13);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('harimau', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>HARIMAU</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(14);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('iguana', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>IGUANA</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(15);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('jerapa', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>JERAPA</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(16);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('kalajengking', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>KALAJENGKING</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(17);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('kanguru', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>KANGURU</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={Styles.IconNext}
              onPress={() => navigation.navigate('NextHewan')}>
              <Icon name="level-down" size={50} color="#fff" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};
const Styles = StyleSheet.create({
  image: {
    height: 383,
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 30,
    paddingLeft: 30,
  },
  imageLatar: {
    height: 530,
  },
  ImageBackground: {
    paddingRight: 150,
    paddingLeft: 150,
    marginTop: 50,
  },
  container: {
    padding: 30,
    marginTop: 70,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 35,
  },
  Text: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'BlackOpsOne-Regular',
  },

  containerImage: {
    height: 110,
    width: 150,
    resizeMode: 'stretch',
  },
  IconNext: {
    marginLeft: 280,
    backgroundColor: '#45BB44',
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});

export default Hewan;
