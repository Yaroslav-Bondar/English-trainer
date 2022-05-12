import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../../components/Header';
import routesConfig from '../../routes/routesConfig';
// import logo from '../../logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header/>
          <Routes>
            {routesConfig.map((route, index) => 
              <Route
                key = {index}
                path = {route.path}
                element = {route.element}
              />
            )};
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
