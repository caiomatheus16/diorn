import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Statusbar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#C9D1D9';
const imageProfileGitHub = '#4F565E';
const linkProfileGithub = 'https://github.com/caiomatheus16';
('https://avatars.githubusercontent.com/u/83544644?v=4');
const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(linkProfileGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo Link');
      Linking.openURL(linkProfileGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <Statusbar backgroundcolor={'#010409'} barStyle="dark-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Caio de óculos"
          style={style.avatar}
          source={{uri: imageProfileGitHub}}
        />
        <Text
          accessibilityLabel="Nome caio matheus"
          style={[style.defaultText, style.name]}>
          Caio Matheus
        </Text>
        <Text
          accessibilityLabel="caiomatheus16"
          style={[style.defaultText, style.nickname]}>
          caiomatheus16
        </Text>
        <Text
          accessibilityLabel="Funcionalidade"
          style={[style.defaultText, style.description]}>
          Desenvolvedor JavaScript Em Formação !
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.Button}>
            <Text style={[style.defaultText, style.textbutton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundcolor: '#010409',
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
    allignItems: 'center',
  },
  content: {
    allignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontsize: 14,
  },
  Button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textbutton: {
    fontWeight: 'bold',
    fontsize: 14,
  },
});
