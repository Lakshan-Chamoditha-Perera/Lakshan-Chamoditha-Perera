import './App.css';
import Header from './components/header/Header';
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Home/>
            <Skills/>
            <Services/>
            <Footer/>
        </>
    );
}

export default App;
