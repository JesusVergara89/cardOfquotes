import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import quotes from './json/users.json'

const arrayOfColors = [
  '#743E6F','#812F1B','#930F3B','#14314F',
  '#515A3F','#463B43','#5D3C54','#2A4D2B',
  '#273379','#03067D','#4E2732','#6A1156',
  '#471557','#6F364D','#6A3902','#072B4A'
]
const arrayOfColors1 = [
  '#FA6EB1','#AA5BFF','#FEC2B6','#4BD9F1',
  '#03FD53','#65FFD1','#F78BB9','#39CCA8',
  '#A8DB0F','#E0E786','#36DBED','#E0924F',
  '#83BCCE','#BF05E0','#A7EC95','#A0F7CB'
]

function App() {

  const getRandom = (array) => {
    return Math.floor(Math.random() * array.length)
  }

  const getElement = (array) => {
    let i = getRandom(array)
    return array[i]
  }


  const [quoteRandom, setquoteRandom] = useState(getElement(quotes))
  const [colorRandom, setcolorRandom] = useState(getElement(arrayOfColors))
  const [colorRandomX, setcolorRandom1] = useState(getElement(arrayOfColors1))

  const clickButton = () => {
    setquoteRandom(getElement(quotes))
    setcolorRandom(getElement(arrayOfColors))
    setcolorRandom1(getElement(arrayOfColors1))
  }


  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div style={appStyle} className="App">
      <Card
        quoteRandom1={quoteRandom}
        colorRandom1={colorRandom}
        colorRandomX={colorRandomX}
        clickButton1={clickButton}
      />
    </div>
  )
}

export default App

