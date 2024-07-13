import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import RefferalDashboard from './components/RefferalDashboard';
import RefferalDetail from './components/RefferalDetail';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/dashboard" element={<RefferalDashboard />} />
                    <Route path="/refferal/:id" element={<RefferalDetail />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
