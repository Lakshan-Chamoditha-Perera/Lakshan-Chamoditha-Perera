import React from 'react';
import './App.css'; // Ensure your CSS file includes styles for light and dark themes
import Header from './components/header/Header';
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {

    return (<div>
        <Header/>
        <main className="main">
            <Home/>
            <Services/>
            <Work/>
            <Skills/>
            <Contact/>
        </main>
        <Footer/>
        <ScrollUp/>
    </div>);
}

export default App;
