
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Dancex_footer from './components/all_shared/Footer';
import Header_components from './components/all_shared/Header';
import Homecomponent from './components/Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstpage from './components/firstpage';



function App() {
  return (
    <div className="App">
      <Header_components />
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Firstpage />}></Route>
           <Route path="/course" element={<Homecomponent />}></Route>
           
         </Routes>
      </BrowserRouter>
      
      <Dancex_footer />
    </div>
  );
}

export default App;
