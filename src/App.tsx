import React, { FC } from 'react';
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";


const App: FC = () => (
        <div className="App">
            <MainPage/>
            <Footer/>
        </div>
    );


export default App;
