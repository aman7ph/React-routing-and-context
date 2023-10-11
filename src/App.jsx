import React from 'react';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Product from './pages/product';
import Homepage from './pages/homepage';
import Pricing from './pages/pricing';
import N404 from './pages/N404';
import Nav from './componets/Nav';

const App = () => {
    return (
        <div>
            <Nav />
            <BrowserRouter>
                <Routes>
                    <Route path="home" element={<Homepage />} />
                    <Route path="product" element={<Product />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="*" element={<N404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
