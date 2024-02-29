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

const NextHewan = ({navigation}) => {
  const [animalIndex, setAnimalIndex] = useState(null);
  const [mute, setMute] = useState(false);

  const animalList = [
    require('../../Assets/Hewan/Kodok.jpg'),
    require('../../Assets/Hewan/komodo.png'),
    require('../../Assets/Hewan/kucing.jpg'),
    require('../../Assets/Hewan/kecoa.jpg'),
    require('../../Assets/Hewan/keledai.webp'),
    require('../../Assets/Hewan/kerbau.png'),
    require('../../Assets/Hewan/kuda.jpg'),
    require('../../Assets/Hewan/kura2.jpg'),
    require('../../Assets/Hewan/landak.jpg'),
    require('../../Assets/Hewan/lipan.png'),
    require('../../Assets/Hewan/marmut.jpg'),
    require('../../Assets/Hewan/monyet.jpg'),
    require('../../Assets/Hewan/panda.jpg'),
    require('../../Assets/Hewan/rusa.png'),
    require('../../Assets/Hewan/Sapi.jpg'),
    require('../../Assets/Hewan/semut.png'),
    require('../../Assets/Hewan/serigala.jpg'),
    require('../../Assets/Hewan/singah.png'),
    require('../../Assets/Hewan/tikus.png'),
    require('../../Assets/Hewan/ular.png'),
    require('../../Assets/Hewan/zebra.png'),
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
                navigation.navigate('Hewan');
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
                    SoundPlayer.playSoundFile('katak', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>KATAK</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(1);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('komodo', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>KOMODO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(2);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('kucing', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>KUCING</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(3);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('kecoak', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>KECOA</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(4);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('keledai', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>KELEDAI</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(5);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('kerbau', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>KERBAU</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(6);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('kuda', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>KUDA</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(7);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('kura2', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>KURA-KURA</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(8);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('landak', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>LANDAK</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(9);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('lipan', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>LIPAN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(10);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('marmut', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>MARMUT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(11);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('monyet', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>MONYAT</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(12);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('panda', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>PANDA</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(13);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('rusa', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>RUSA</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(14);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('sapi', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>SAPI</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(15);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('semut', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>SEMUT</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(16);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('serigala', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>SERIGALA</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(17);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('singa', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>SINGA</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(18);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('tikus', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>TIKUS</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={Styles.Text}></Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(19);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('ular', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>ULAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAnimalIndex(20);
                  if (mute === false) {
                    SoundPlayer.playSoundFile('zebra', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>ZEBRA</Text>
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
    height: 383,
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
    paddingBottom: 30,
  },
  Text: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'BlackOpsOne-Regular',
  },
  containerImage: {
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  },
});

export default NextHewan;
