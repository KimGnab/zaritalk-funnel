import React from 'react';
import Lookup from './pages/onboard/LookupPage';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lookup" element={<Lookup />} />
        {/*<Route path="/request" element={<Lookup />} />*/}
        {/*<Route path="/result" element={<Lookup />} />*/}
        <Route path="/*" element={<Navigate to="/lookup"></Navigate>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
