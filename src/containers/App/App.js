import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../../components/Header';
import routesConfig from '../../routes/routesConfig';
import IrregularVerbs from '../IrregularVerbs';
// import logo from '../../logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      {/* <IrregularVerbs/> */}
        <BrowserRouter>
          <Header/>
          <main>
            {/* <IrregularVerbs/> */}
            <Routes>
              {routesConfig.map((route, index) => 
                <Route
                  key = {index}
                  path = {route.path}
                  element = {route.element}
                />
              )};
            </Routes>
          </main>  
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
