import './App.css';
import Header from './components/header/Header';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Services/>
            <Footer/>
        </>
    );
}

export default App;
