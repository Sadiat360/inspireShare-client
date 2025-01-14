import './App.scss';
import Header from './components/Header/Header.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import StressCategoryPage from './pages/StressCategoryPage/StressCategoryPage.jsx';
import LoveCategoryPage from './pages/LoveCategoryPage/LoveCategoryPage.jsx'
import CategoryForm from './components/CategoryForm/CategoryForm.jsx';
import CardPage from './pages/CardPage/CardPage.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';

function App() {


  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<SignUpPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path='/StressCategoryPage' element={< StressCategoryPage/>}/>
      <Route path='/LoveCategoryPage' element={< LoveCategoryPage/>}/>
      <Route path='/CardPage' element={< CardPage/>}/>
      <Route path='/CategoryForm' element={< CategoryForm/>}/>

     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
