import React, { FC } from 'react';
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import Header from './Components/Header/Header'


const App: FC = () => (
        <div className="App">
            <Header/>
            <MainPage />
            <Footer/>
        </div>
    );


export default App;
