import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SoundPlayer from 'react-native-sound-player';
import Icon from 'react-native-vector-icons/Entypo';

const Huruf = ({navigation}) => {
  const [huruf, setHuruf] = useState('');
  const [mute, setMute] = useState(false);

  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={require('../../Assets/ImageHuruf.png')}
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
          <TouchableOpacity>
            <View style={Styles.TextBagackground}>
              <Text style={Styles.text}>{huruf}</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          source={require('../../Assets/Bentuk/Baground.png')}
          resizeMode="stretch"
          style={Styles.imageLatar}>
          <View style={Styles.container}>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('A');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('a', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>A</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('B');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('b', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>B</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('C');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('c', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('D');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('d', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>D</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('E');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('e', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>E</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('F');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('f', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>F</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('G');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('g', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>G</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('H');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('h', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>H</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('I');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('i', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>I</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('J');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('j', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>J</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('K');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('k', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>K</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('L');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('l', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>L</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('M');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('m', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>M</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('N');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('n', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>N</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('O');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('o', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>O</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('P');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('p', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>P</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('Q');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('q', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>Q</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('R');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('r', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>R</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('S');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('s', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>S</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('T');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('t', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>T</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.contain}>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('U');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('u', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>U</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('V');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('v', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>V</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('W');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('w', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>W</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('X');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('x', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>X</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('Y');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('y', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>Y</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setHuruf('Z');
                  if (mute === false) {
                    SoundPlayer.playSoundFile('z', 'mpeg');
                  }
                }}>
                <Text style={Styles.Text}>Z</Text>
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
    paddingRight: 50,
    paddingLeft: 50,
    padding: 10,
  },
  imageLatar: {
    height: 550,
  },
  container: {
    padding: 30,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Text: {
    fontSize: 50,
    color: '#000',
    fontFamily: 'BlackOpsOne-Regular',
  },
  TextBagackground: {
    padding: 10,
    marginLeft: 155,
    marginTop: 20,
  },
  text: {
    fontSize: 100,
    color: '#000',
    fontFamily: 'BlackOpsOne-Regular',
  },
});

export default Huruf;
