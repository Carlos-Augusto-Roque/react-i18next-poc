import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>{t('test')}</p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={() => changeLanguage('en-us')}>
          Inglês
        </button>

        <button onClick={() => changeLanguage('pt-br')}>
          Português
        </button>
      </header>
    </div>
  );
}

export default App;
