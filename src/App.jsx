import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import TeamRoutes from './routes/routes';

function App() {

  return (
    <>
    <TeamRoutes />
      {/* <div>
        <h2 className='title-one'>FEED CSS Team Members</h2>
        <ProfileListing />
 
        <Switch>
          <Route path="/profile/:profileId">
            <ProfileDetail />
          </Route>
        </Switch> 

      </div> */}
    </>
  )
}

export default App
