import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('./assets/logo-pra-fazer.png')}>
        </Image>
      </View>
      <View>
        <TextInput style={styles.input}>E-mail</TextInput>
        <TextInput style={styles.input}>Senha</TextInput>
        <TouchableOpacity>
          <Text style={styles.botao}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.usuario}>Criar Usuário</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    margin: 15
  },
  input: {
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    width: 300,
    color: '#808080'
  },
  botao: {
    backgroundColor: '#070A52',
    padding: 10,
    textAlign: 'center',
    color: 'white',
    borderRadius: 10
  },
  usuario: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
    padding: 15

    
  }

});
