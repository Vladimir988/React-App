import React from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Ui/navbar/Navbar";
import AppRouter from "./components/Ui/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;