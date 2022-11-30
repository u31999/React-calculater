import React from 'react'
import '../styles/calculator.css'
import { calculation } from './calculation'

const CalcBottom = ({inputValue, setInputValue, sign, setSign, 
  calcValue, setCalcValue, numOne, setNumOne, numTwo, setNumTwo}) => {

  const setSignAndNumOne = (sign, inputValue) => {
    if(calcValue === '0') {
           setNumOne(inputValue)
        } else {
          setNumOne(calcValue)
        }
        setInputValue('0')
        setSign(sign)
  }
  const calc = (sign, numOne, numTwo) => {
    let result
    switch (sign) {
      case '+':
        result = calculation.addition(numOne, numTwo);
        break;
      case '*':
        result = calculation.multiply(numOne, numTwo);
        break; 
      case '/':
        result = calculation.divide(numOne, numTwo);
        break;
      case '-':
        result = calculation.subtraction(numOne, numTwo);
        break;
      default:
        break;
    }
    if(result) return result.toString()
  }
  const checkFirstRun = () => {
    if(inputValue.length === 1 && inputValue.toString().charAt(0) === '0') {
      return true
    } else {
      return false
    }
  }

  const clearFunc = () => {
    setInputValue('0')
    setNumOne(null)
    setCalcValue('0')
    setSign(null)
  }

  const deleteFunc = () => {
    if(inputValue.length === 1) {
      setInputValue('0')
    } else {
      setInputValue(inputValue.slice(0, -1))
    }
    
  }

  const handleClick = (e) => {
    if(inputValue.length > 16) return

    if(Number(e.target.value)) {
      if(checkFirstRun()) {
        setInputValue(e.target.value)
      } else {
          setInputValue(`${inputValue}${e.target.value}`)
        }
      
        
    } else if (e.target.value === 'O' || e.target.value === 'OO') {
        if(e.target.value === 'O') {
          setInputValue(`${inputValue}0`)
        } else {
          setInputValue(`${inputValue}00`)
        }
    } else if(e.target.value === '.') {
      setInputValue(`${inputValue}${e.target.value}`)
    } else if(e.target.value === 'delete' || e.target.value === 'C') {
      if(e.target.value === 'C') {
        clearFunc()
      } else {
        deleteFunc()
      }
    } else {
      if(e.target.value === '+') {
        setSignAndNumOne('+', inputValue)
      } else if(e.target.value === '-') {
        setSignAndNumOne('-', inputValue)
      } else if(e.target.value === '/') {
        setSignAndNumOne('/', inputValue)
      } else if(e.target.value === '*') {
         setSignAndNumOne('*', inputValue)
      } else if(e.target.value === '=' && sign !== null) {
        let calcResult = calc(sign, numOne, inputValue)
        setCalcValue(calcResult)
        setNumOne(calcResult)
        setInputValue('0')
        

      } 
    }
    }    
  
  /*The click Button */
  const Button = ({value, cName = ''}) => {
  return(
    <div className={`btn-container ${cName === 'simple' ? 'simple-container': ''}`}>
      <button value={value} className={`calc-btn ${cName}`} onClick={handleClick} >{value}</button>
    </div>
  )
}
  
    return (
        <div className='calc-bottom'>
        <div className='button-container'>
          <div className='btn-row'>
            <Button value='C' cName='btn-c' />
            <Button value='%' />
            <div className='btn-container'>
              <button
              value='delete' className='calc-btn delete-btn' 
              onClick={handleClick}
              style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
              </button>
            </div>
            <Button value='/' cName='simple' />
          </div>
          <div className='btn-row'>
            <Button value='7'/>
            <Button value='8'/>
            <Button value='9'/>
            <Button value='*' cName='simple'/>
          </div>
          <div className='btn-row'>
            <Button value='4'/>
            <Button value='5'/>
            <Button value='6'/>
            <Button value='-' cName='simple'/>
          </div>
          <div className='btn-row'>
            <Button value='1'/>
            <Button value='2'/>
            <Button value='3'/>
            <Button value='+' cName='simple'/>
          </div>
          <div className='btn-row'>
            <div className='btn-container'>
              <button
              value='OO' className='calc-btn' 
              onClick={handleClick}
              style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
              00
              </button>
              </div>
            <div className='btn-container'>
              <button
              value='O' className='calc-btn' 
              onClick={handleClick}
              style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
              0
              </button>
            </div>
            <Button value='.' />
            <Button value='=' cName='simple' />
          </div>
        </div>
        <div className='calc-footer'>
          <div className='footer-line'></div>
        </div>
      </div>
    )
}

export default CalcBottom