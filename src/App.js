import './App.css';
import Header from './components/header/Header';
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
    return (<>
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

    </>);
}

export default App;
