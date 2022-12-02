import React from 'react'
import '../styles/calculator.css'
import { FaMoon, FaSun } from 'react-icons/fa'

const CalcTop = ({theme, setTheme, calcValue, setCalcValue, inputValue, numOne, 
  sign}) => {
   const handleThemeChange = () => {
    if(theme === 'dark') setTheme('light')
    if(theme === 'light') setTheme('dark')
    console.log(theme)
   }
   const handleInputChange = (e) => {
    e.target.value(inputValue)
   }


  return (
     <div className='calc-top'>
        <div className='change-color-container'>
        <div className={theme === 'dark' ?  'light' : 'dark'}>
            <input type="checkbox" className="checkbox" 
            id="checkbox" value={theme} onChange={handleThemeChange} />
            <label htmlFor="checkbox" className="label">
            <FaMoon className='moon' />
            <FaSun className='sun' />
            <div className='ball'></div>
            </label>
            </div>
        </div>
        <div className='calc-screen'>
          <div className='calc-result'>{calcValue}</div>
          {sign && <div className='sign'>{`${numOne && numOne !== '0' ? numOne : ''} `}{<span>{sign}</span>}</div>}
            
          <div className='calc-input'>
            <input type='text' id='calc-number' name='calc-number' 
            value={inputValue} onChange={handleInputChange} />

          </div>
        </div>
      </div>
  )
}

export default CalcTop
