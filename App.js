import { StyleSheet, Text, View } from 'react-native';
import Item from './src/components/Item';

const listaItens = [
  {
    nome: "Espada de ouro de Magan",
    descricao: "Uma espada que foi usada pelo rei Magan. ATAQUE +28",
    urlItem: "https://rpg-adventuretime.weebly.com/uploads/2/3/1/9/23190296/926482940.png?252",
  },
  {
    nome: "Luvas de couro velho",
    descricao: "Uma luva bem velho e bastante desgastada. DEFESA +3",
    urlItem: "https://i.pinimg.com/originals/9b/86/56/9b8656cb410e14f71bd5808bf8af342f.png",
  },
  {
    nome: "Pedra da ressurreição",
    descricao: "Consumir este item irá te ressuscitar com 20% de sua vida",
    urlItem: "http://theagedarkrpg.weebly.com/uploads/2/6/0/5/26057155/3597963.png?166",
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      {listaItens.map(item => <Item item={item} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#425e79',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
