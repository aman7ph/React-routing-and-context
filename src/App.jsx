import React from 'react';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Product from './pages/product';
import Homepage from './pages/homepage';
import Pricing from './pages/pricing';
import N404 from './pages/N404';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/app" element={<AppLayout />} />
                    <Route path="product" element={<Product />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="*" element={<N404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
