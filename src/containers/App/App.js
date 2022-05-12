import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import Header from '../../components/Header';
import IrregularVerbs from '../IrregularVerbs';
// import logo from '../../logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route
              path = '/grammar-trainers'
              element = <IrregularVerbs/>
            />
            <Route
              path = '/'
              element = <HomePage/>
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
