import React from 'react'
import '../styles/calculator.css'
import CalcBottom from './CalcBottom'
import CalcTop from './CalcTop'


const Calculator = ({theme, setTheme}) => {
  const [calcValue, setCalcValue] = React.useState('0') 
  const [inputValue, setInputValue] = React.useState('0') 
  const [sign, setSign] = React.useState(null)
  const [numOne, setNumOne] = React.useState(null)
  const [numTwo, setNumTwo] = React.useState(null)
  return (
    <div className={`calc-container ${theme === 'dark' ? 'light' : ''}`}>
      <CalcTop theme={theme} setTheme={setTheme} 
        calcValue={calcValue} setCalcValue={setCalcValue} 
        inputValue={inputValue} setInputValue={setInputValue}
        numOne={numOne}
        sign={sign}
      />
      <CalcBottom inputValue={inputValue} setInputValue={setInputValue}
      sign={sign} setSign={setSign} 
      numOne={numOne} setNumOne={setNumOne}
      numTwo={numTwo} setNumTwo={setNumTwo}
      setCalcValue={setCalcValue} calcValue={calcValue}
      />
    </div>
  )
}

export default Calculator
