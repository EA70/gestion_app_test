import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserInputs } from './InputUser';
import Home from './pages/home/Home' ;
import List from './pages/list/List';
import NewUser from './pages/newUser/NewUser';
import Single from './pages/single/Single';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path='/'>

            <Route index element={<Home />} />
            
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={< Single />} />
              <Route path="new" element={< NewUser title= "Ajouter Nouveau Utilisateur" inputs={UserInputs} />} />
            </Route>

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;