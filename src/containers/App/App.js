import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../../components/Header';
import InnerContent from '../InnerContent';
import {mainRoutesConfig} from '../../routes/routesConfig';
import Exercises from '../Exercises';
import PresentSimplePositiveBe 
  from '../../components/Exercises/Present/presentSimple/presentSimplePositive/PresentSimplePositiveBe';
  import PresentSimplePositive1 
  from '../../components/Exercises/Present/presentSimple/presentSimplePositive/PresentSimplePositive1';

// import IrregularVerbs from '../IrregularVerbs';
// import logo from '../../logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Header/>
          {/* <main> */}
            <Routes>
              {/* <Route path='English-trainer' element={<Header/>}>  */}
              {/* <Route path='/English-trainer' element={<Header/>}>   */}
              <Route path='/' element={<InnerContent/>}> 
                {mainRoutesConfig.map((route, index) => 
                  <Route
                    key = {index}
                    path = {route.path}
                    element = {route.element}
                  />
                )};
                {/* </Route> */}
                <Route path='exercises' element={<Exercises/>}>
                  <Route 
                    path='present-simple-positive-be' 
                    element={<PresentSimplePositiveBe/>}
                  />
                  <Route 
                    path='present-simple-positive-1' 
                    element={<PresentSimplePositive1/>}
                  />
                </Route>
              </Route> 
            </Routes>
          {/* </main>   */}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
