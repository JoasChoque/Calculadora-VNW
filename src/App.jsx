import { useState } from 'react'
import GlobalStyle from './assets/styles/Global'
import * as S from "./assets/styles/Styles"

function App() {
  //State para resultado das contas
  const [result, setResult] = useState('');

  //pegar o valor dos botões
  const getValue = (value) => {
    setResult(result.concat(value));
  };

  //Fazer o calculo transformando o valor pego em expressão
  const calcular = () => {
    setResult(eval(result).toString());
};

  //Resetar valor
  const Resetar = () =>{
    setResult('')
  }

  //Estrutura
  return (
    <S.Main>
      <GlobalStyle/>
      
      <S.Title>Calculadora</S.Title>

      <S.Background>
      <div>
        <S.Result type="text" value={result} />
      </div>
      <div>
        <S.Button onClick={() => getValue('1')}>1</S.Button>
        <S.Button onClick={() => getValue('2')}>2</S.Button>
        <S.Button onClick={() => getValue('3')}>3</S.Button>
        <S.Button onClick={() => getValue('+')}>+</S.Button>
      </div>
      <div>
        <S.Button onClick={() => getValue('4')}>4</S.Button>
        <S.Button onClick={() => getValue('5')}>5</S.Button>
        <S.Button onClick={() => getValue('6')}>6</S.Button>
        <S.Button onClick={() => getValue('-')}>-</S.Button>
      </div>
      <div>
        <S.Button onClick={() => getValue('7')}>7</S.Button>
        <S.Button onClick={() => getValue('8')}>8</S.Button>
        <S.Button onClick={() => getValue('9')}>9</S.Button>
        <S.Button onClick={() => getValue('*')}>*</S.Button>
      </div>
      <div>
        <S.Button onClick={() => getValue('0')}>0</S.Button>
        <S.Button onClick={() => Resetar()}>AC</S.Button>
        <S.Button onClick={() => calcular()}>=</S.Button>
        <S.Button onClick={() => getValue('/')}>/</S.Button>
      </div>
      </S.Background>
    </S.Main>
  )
}

export default App
