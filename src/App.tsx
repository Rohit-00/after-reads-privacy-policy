import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { DeleteAccount } from './pages/DeleteAccount';
import { SignIn } from './pages/SignIn';
import { AuthRequired } from './components/AuthRequired';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/login" element={<SignIn />} />
        <Route 
          path="/account/delete" 
          element={
            <AuthRequired>
              <DeleteAccount />
            </AuthRequired>
          } 
        />
        {/* Redirect /privacy to root since it's now the home page */}
        <Route path="/privacy" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;