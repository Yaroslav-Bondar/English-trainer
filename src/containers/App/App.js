import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../../components/Header';
import InnerContent from '../InnerContent';
import {mainRoutesConfig} from '../../routes/routesConfig';
// import logo from '../../logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' element={<InnerContent/>}> 
                {mainRoutesConfig.map((route, index) => 
                  <Route
                    key = {index}
                    path = {route.path}
                    element = {route.element}
                  />
                )};
              </Route> 
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
