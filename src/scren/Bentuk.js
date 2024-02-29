import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SoundPlayer from 'react-native-sound-player';
import Icon from 'react-native-vector-icons/Entypo';

const Bentuk = ({navigation}) => {
  const [animalIndex, setAnimalIndex] = useState(null);
  const [mute, setMute] = useState(false);

  const animalList = [
    require('../../Assets/Bentuk/kotak.png'),
    require('../../Assets/Bentuk/PersegiPanjang.png'),
    require('../../Assets/Bentuk/Bundaran.png'),
    require('../../Assets/Bentuk/Lonjong.png'),
    require('../../Assets/Bentuk/SegiTiga.png'),
    require('../../Assets/Bentuk/Bintang.png'),
    require('../../Assets/Bentuk/SegilLima.png'),
    require('../../Assets/Bentuk/Segienam.png'),
    require('../../Assets/Bentuk/SegiDelapan.png'),
    require('../../Assets/Bentuk/SegiKetupat.png'),
    require('../../Assets/Bentuk/SegiPana.png'),
  ];
  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={require('../../Assets/Bentuk/BagroundBentu.png')}
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
          source={require('../../Assets/Bentuk/Baground.png')}
          resizeMode="stretch"
          style={Styles.imageLatar}>
          <View style={Styles.container}>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(0);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('persegi', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/Bentuk/kotak.png')}
                  style={Styles.Bentuk}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(1);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('persegipanjang', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/Bentuk/PersegiPanjang.png')}
                  style={Styles.Bentuk}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(2);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('lingkaran', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/Bentuk/Bundaran.png')}
                  style={Styles.Bentuk}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(3);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('ofal', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/Bentuk/Lonjong.png')}
                  style={Styles.Bentuk}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(4);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('segi3', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/Bentuk/SegiTiga.png')}
                  style={Styles.Bentuk}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(5);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('bintang', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/Bentuk/Bintang.png')}
                  style={Styles.Bentuk}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(6);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('segi5', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/Bentuk/SegilLima.png')}
                  style={Styles.Bentuk}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(7);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('segi6', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/Bentuk/Segienam.png')}
                  style={Styles.Bentuk}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(8);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('segi8', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/Bentuk/SegiDelapan.png')}
                  style={Styles.Bentuk}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(9);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('belahketupat', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/Bentuk/SegiKetupat.png')}
                  style={Styles.Bentuk}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(10);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('tandapana', 'mpeg');
                  }
                }}>
                <Image
                  source={require('../../Assets/Bentuk/SegiPana.png')}
                  style={Styles.Bentuk}
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
  IconContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 40,
    paddingLeft: 50,
    padding: 7,
  },
  imageLatar: {
    height: 530,
  },
  container: {
    padding: 30,
    marginTop: 80,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 40,
  },
  ImageBackground: {
    padding: 100,
  },
  Bentuk: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  containerImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});

export default Bentuk;
