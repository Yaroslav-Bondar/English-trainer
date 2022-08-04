import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../../components/Header';
import InnerContent from '../InnerContent';
import {mainRoutesConfig} from '../../routes/routesConfig';
// import logo from '../../logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__container}>
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
