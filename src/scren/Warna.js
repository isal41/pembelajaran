import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SoundPlayer from 'react-native-sound-player';
import Icon from 'react-native-vector-icons/Entypo';
const Warna = ({navigation}) => {
  const [mute, setMute] = useState(false);
  const [animalIndex, setAnimalIndex] = useState(null);

  const animalList = [
    require('../../Assets/warna/merah.png'),
    require('../../Assets/warna/kuning.png'),
    require('../../Assets/warna/hijau.png'),
    require('../../Assets/warna/hitam.png'),
    require('../../Assets/warna/putih.png'),
    require('../../Assets/warna/biru.png'),
    require('../../Assets/warna/Ungu.png'),
    require('../../Assets/warna/abu-abu.png'),
    require('../../Assets/warna/orange.png'),
    require('../../Assets/warna/coklat.png'),
    require('../../Assets/warna/pink.png'),
  ];

  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={require('../../Assets/Bentuk/Baground.png')}
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
          <View style={Styles.ImageBackground}>
            <Image
              source={animalIndex !== null ? animalList[animalIndex] : ''}
              style={Styles.containerImage}
            />
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../Assets/warna/BagroundWarna.jpg')}
          resizeMode="stretch"
          style={Styles.imageLatar}>
          <View style={Styles.container}>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(0);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('merah', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/warna/merah.png')}
                  style={Styles.Warna}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(1);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('kuning', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/warna/kuning.png')}
                  style={Styles.Warna}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(2);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('hijau', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/warna/hijau.png')}
                  style={Styles.Warna}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(3);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('hitam', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/warna/hitam.png')}
                  style={Styles.Warna}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(4);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('putih', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/warna/putih.png')}
                  style={Styles.Warna}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(5);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('biru', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/warna/biru.png')}
                  style={Styles.Warna}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(6);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('ungu', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/warna/Ungu.png')}
                  style={Styles.Warna}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(7);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('abu2', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/warna/abu-abu.png')}
                  style={Styles.Warna}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(8);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('orange', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/warna/orange.png')}
                  style={Styles.Warna}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(9);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('coklat', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/warna/coklat.png')}
                  style={Styles.Warna}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(10);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('pink', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/warna/pink.png')}
                  style={Styles.Warna}
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
    height: 450,
  },
  IconContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 40,
    paddingLeft: 40,
    padding: 10,
  },
  imageLatar: {
    height: 400,
  },
  container: {
    padding: 30,
    marginTop: 20,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 40,
  },
  Warna: {
    height: 80,
    width: 80,
  },
  containerImage: {
    height: 119,
    width: 150,
    marginTop: 150,
    marginLeft: 130,
  },
});
export default Warna;
