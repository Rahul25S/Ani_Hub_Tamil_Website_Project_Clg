import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profil from './pages/Profil';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import StudioApartmentGoodLightingAngelIncluded from './Anime/StudioApartmentGoodLightingAngelIncluded';
import TimeLoopTheVillainessEnjoys from "./Anime/TimeLoopTheVillainessEnjoys";



const App = () => {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<ProtectedRoute><Profil/></ProtectedRoute>}/>
      <Route path="/Studio-Apartment-Good-Lighting-Angel-Included"element={<StudioApartmentGoodLightingAngelIncluded />} />
      <Route path="/7th-Time-Loop-The-Villainess-Enjoys-a-Carefree-Life-Married-to-Her-Worst-Enemy"element={<TimeLoopTheVillainessEnjoys />} />
      
    </Routes>
    </AuthContextProvider>
    </>
  );
};

export default App;