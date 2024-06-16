import React from 'react';
import { useState } from 'react'
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import Footer from './Composant/footer'
import Header from './Composant/header'
import Acceuil from './Composant/Composant_acceuil/acceuil'
import './App.css'
import ImmeubFil from './assets/Routes/Immeuble_fil'
import ImmeubDet from './assets/Routes/ImmeubleDet'
import Commandes from './assets/Routes/commandes';
import Page404 from './assets/Routes/page404';
//routes auth
import Login from './assets/Routes/Auth/login';
import Inscription from './assets/Routes/Auth/register';
import MessageBox from './assets/Routes/MessageBox';
import Dashboard from './assets/Routes/Auth/dashboard';
import ImmeubSupp from './assets/Routes/Auth/immeubSup';
import Saves from './assets/Routes/Auth/saves';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	<div id="preloader">
		<div class="loader-wrapper">
			<div class="loader-new">
				<div class="ball"></div>
				<div class="ball"></div>
				<div class="ball"></div>
			</div>
			<div class="text">Chargement...</div>
		</div>
	</div>
    <Router>
  <Header />
    <Routes>
      <Route exact path="" element={<Acceuil/>}/>
      <Route  path="/filactu" element={<ImmeubFil />}/>
      <Route  path="/commande/:id" element={<Commandes />}/>
      <Route  path="/immeub/:id" element={<ImmeubDet />}/>
      
      <Route  path="/Sup/:id" element={<ImmeubSupp />}/>
      <Route  path="/commandes/status/" element={<MessageBox msx={"commande"} />}/>
      <Route  path="/Login/" element={<Login />}/>
      <Route exact path='/inscription/' element={<Inscription />}/>
      <Route path='/Saves/' element={<Saves />}/>
      <Route path='/dashboard/' element={<Dashboard />}/>
      <Route  path="*" element={<Page404 />}/>
    </Routes>
  <Footer />
    </Router>
    </>
  )
}

export default App
