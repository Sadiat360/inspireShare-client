import './App.scss';
import Header from './components/Header/Header.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import StressCategoryPage from './pages/StressCategoryPage/StressCategoryPage.jsx';
import CategoryForm from './components/CategoryForm/CategoryForm.jsx';
import CardPage from './pages/CardPage/CardPage.jsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import StreakTrackPage from './pages/StreakTrackPage/StreakTrackPage.jsx';
import { StreakProvider } from './StreakContext/StreakContext.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import Footer from './components/Footer/Footer.jsx';
import SignUpHeader from './components/SignUpHeader/SignUpHeader.jsx';
import { useLocation } from 'react-router-dom';


function Layout() {
 const location = useLocation();
 const isSignUpOrHome = location.pathname === '/' || location.pathname === '/login';

  return (
    <>
    
      {isSignUpOrHome ? <SignUpHeader />:  <Header />}
     <Routes>
      <Route path='/' element={<SignUpPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path='/StressCategoryPage' element={< StressCategoryPage/>}/>
      <Route path='/CardPage' element={< CardPage/>}/>
      <Route path='/CategoryForm' element={< CategoryForm/>}/>
      <Route path='/StreakTrackPage' element={< StreakTrackPage/>}/>
      <Route path='/ProfilePage' element={< ProfilePage/>}/>
     </Routes>
     <Footer />
      
     
     
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <StreakProvider>
        <Layout /> {/* Now useLocation() is inside BrowserRouter */}
      </StreakProvider>
    </BrowserRouter>
  );
}

export default App
