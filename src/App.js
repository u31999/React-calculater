import React from 'react'
import './App.css';
import Calculator from './component/Calculator';
import Footer from './component/Footer';
import Title from './component/Title';

function App() {
  const [theme, setTheme] = React.useState('dark')
  return (
    <div className={`App ${theme === 'dark' ? 'light' : 'dark'}`}>
    <Title />
    <Calculator theme={theme} setTheme={setTheme} />
    <Footer theme={theme} />
    </div>
  );
}

export default App;
