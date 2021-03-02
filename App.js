import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [numeros, setNumeros] = useState('');
  const [listaNumeros, setListaNumeros] = useState([]);
  const [contador, setContador] = useState(0);
  const valorMaximo = 60;

  const gerarNumerosAleatorios = async () => {
    var numeros = []
    var labelNumeros = ''
    while (numeros.length < 6) {
      var aleatorio = Math.floor(Math.random() * valorMaximo);

      if (numeros.indexOf(aleatorio) == -1)
          numeros.push(aleatorio);
    }
    for(let i = 0; i < numeros.length; i++){
      labelNumeros += ' ' + numeros[i]
    }
    setNumeros(labelNumeros)
  }

  const adicionarNumeros = () => {
    setListaNumeros(listaNumeros => {
      gerarNumerosAleatorios()
      setContador (contador + 1);
      return [{key: contador.toString(), value: numeros}, ...listaNumeros];
    })
  }
  return (
    <View style={styles.container}>
     <View style={styles.NumeroInputView}>
        <View
          style={styles.NumeroInputButton}
        >
        <Button          
          title="gerar números"
          onPress={adicionarNumeros}
        />
        </View>
     </View>
     <View>
    <View
      style={{width: '80%', alignSelf: 'center'}}
    >
      <FlatList 
        data={listaNumeros}
        renderItem = {numeros => (
          <View style={styles.itemNaLista}>
            <Text>{numeros.item.value}</Text>
          </View>
        )}
      />
    </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 40 
  },
  NumeroInputView: { 
    alignItems: 'center',
    marginBottom: 12 
  },
  NumeroInputButton: { 
    width: '80%' 
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#DDD',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 16,
    alignItems: 'center'
  }
})


