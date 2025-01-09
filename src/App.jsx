import './App.scss';
import Header from './components/Header/Header.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import StressCategoryPage from './pages/StressCategoryPage/StressCategoryPage.jsx';
import LoveCategoryPage from './pages/LoveCategoryPage/LoveCategoryPage.jsx'

function App() {


  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path='/StressCategoryPage' element={< StressCategoryPage/>}/>
      <Route path='/LoveCategoryPage' element={< LoveCategoryPage/>}/>

     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
