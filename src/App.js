
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Dancex_footer from './components/all_shared/Footer';
import Header_components from './components/all_shared/Header';
import Homecomponent from './components/Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstpage from './components/firstpage';
import Page_details from './components/page_details';
import Profie_section from './components/profie_page';



function App() {
  return (
    <div className="App">
      <Header_components />
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Firstpage />}></Route>
           <Route path="/course" element={<Homecomponent />}></Route>
           <Route path="/details" element={<Page_details />}></Route>
           <Route path="/profile" element={<Profie_section />}></Route>
         </Routes>
      </BrowserRouter>
      
      <Dancex_footer />
    </div>
  );
}

export default App;
