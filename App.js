import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Carta } from './components/carta';
import { CartaReversa } from './components/carta_invertida';
import { CartaLinks } from './components/carta_links';

export default function App() {
  return (
    <ScrollView style={{flex: 1, flexGrow: 1}}>
      <View style={styles.container}>
        <Carta />
        <CartaReversa />
        <CartaLinks />

        <CartaLinks />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
});