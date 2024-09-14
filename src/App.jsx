import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profil from './pages/Profil';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import TheDailyLifeoftheImmortalKing from './Anime/TheDailyLifeoftheImmortalKing';
import ThatTimeIGotReincarnatedasaSlime from './Anime/ThatTimeIGotReincarnatedasaSlime';
import RankingofKings from './Anime/RankingofKings';
import FireForce from './Anime/FireForce';
import DARLINGintheFRANXX from './Anime/DARLINGintheFRANXX';
import BlackClover from './Anime/BlackClover';
import DrStone from './Anime/DrStone';
import MakeineTooManyLosingHeroines from './Anime/MakeineTooManyLosingHeroines';
import MyHeroAcademia from './Anime/MyHeroAcademia';
import TheStrongestMagicianintheDemonLordArmyWasaHuman from './Anime/TheStrongestMagicianintheDemonLordArmyWasaHuman';
import TomochanIsaGirl from './Anime/TomochanIsaGirl';



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
      <Route path='/The-Daily-Life-of-the-Immortal-King' element={<TheDailyLifeoftheImmortalKing />}/>
      <Route path='/That-Time-I-Got-Reincarnated-as-a-Slime' element={<ThatTimeIGotReincarnatedasaSlime />}/>
      <Route path="/Ranking-of-Kings"element={<RankingofKings />} />
      <Route path="/Fire-Force"element={<FireForce />} />
      <Route path="/DARLING-in-the-FRANXX"element={<DARLINGintheFRANXX />} />
      <Route path="/Black-Clover"element={<BlackClover />} />
      <Route path="/Dr-Stone"element={<DrStone />} />
      <Route path="/Makeine-Too-Many-Losing-Heroines"element={<MakeineTooManyLosingHeroines />} />
      <Route path="/My-Hero-Academia"element={<MyHeroAcademia />} />
      
      <Route path="/Tomochan-Is-a-Girl"element={<TomochanIsaGirl />} />
      <Route path="/The-Strongest-Magician-in-the-Demon-Lord-Army-Was-a-Human"element={<TheStrongestMagicianintheDemonLordArmyWasaHuman />} />
    </Routes>
    </AuthContextProvider>
    </>
  );
};

export default App;