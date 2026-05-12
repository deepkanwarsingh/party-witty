import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FreeBids from './pages/FreeBids';
import EventListing from './pages/EventListing';
import BuyDrinks from './pages/BuyDrinks';
import OrderSummary from './pages/OrderSummary';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Freebids" element={<FreeBids />} />
        <Route path="/events" element={<EventListing />} />
        <Route path="/buydrinks" element={<BuyDrinks />} />
        <Route path="/ordersummary" element={<OrderSummary />} />
        {/* Default route redirects to FreeBids */}
        <Route path="/" element={<Navigate to="/Freebids" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
