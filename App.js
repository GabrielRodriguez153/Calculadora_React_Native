import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState(0);

  const armazenar = (value) => {
    setInput((prev) => prev + value);
  };

  const calcular = () => {
    try {
      setResultado(eval(input));
    } catch (error) {
      setResultado('Erro');
    }
  };

  const limpar = () => {
    setInput('');
    setResultado('');
  };

  return (
    <View>
      <View style={styles.displayContainer}>
        <Text style={styles.nums}>{input || '0'}</Text>
        <Text style={styles.nums}>{resultado}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.linha}>
        <TouchableOpacity style={[styles.button, styles.specialButton]} onPress={limpar}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.linha}>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.linha}>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.linha}>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.equalsButton]} onPress={calcular}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.linha}>
        <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={() => armazenar('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => armazenar('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    backgroundColor: '#1C1C1E',  // Um tom mais escuro para o fundo
    minHeight: 120,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    borderBottomRightRadius: 15,  // Bordas levemente mais arredondadas
    borderBottomLeftRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.4,  // Um pouco mais de sombra para profundidade
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 10,
  },
  nums: {
    fontSize: 46,  // Aumentar um pouco o tamanho da fonte para melhor visibilidade
    color: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontWeight: '300',  // Fonte mais leve para um estilo mais refinado
  },
  buttonsContainer: {
    width: '100%',
    marginTop: -10,  // Maior espaçamento superior para melhor separação entre a tela e os botões
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,  // Espaçamento mais consistente entre as linhas de botões
  },
  button: {
    backgroundColor: '#333',  // Fundo consistente com o estilo iOS
    flex: 1,
    marginHorizontal: 7,  // Pequeno ajuste na margem horizontal
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,  // Botões um pouco maiores para facilitar o toque
    borderRadius: 150,  // Arredondar mais os botões para torná-los mais parecidos com os do iPhone
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 6,
    backgroundColor: '#505050',  // Cor ligeiramente mais clara para os botões padrão
  },
  zeroButton: {
    flex: 2,  // Mantém o botão "0" maior, ocupando o espaço de dois botões
    borderRadius: 50,  // Manter o arredondamento
  },
  equalsButton: {
    backgroundColor: '#FF9500',
    shadowColor: '#FF9500',  // Sombra de cor laranja para combinar com o botão
    shadowOpacity: 0.6,  // Sombra mais forte para destaque
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 10,
  },
  specialButton: {
    backgroundColor: '#D32F2F',  // Tom vermelho mais suave
    shadowColor: '#D32F2F',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    fontSize: 28,  // Ajuste para o tamanho do texto nos botões
    color: '#fff',
    fontWeight: '400',  // Tornar o texto dos botões um pouco mais leve para combinar com o design iOS
  },
  specialButtonText: {
    color: '#fff',
    fontWeight: '500',  // Texto dos botões especiais um pouco mais forte para dar destaque
  }
});

