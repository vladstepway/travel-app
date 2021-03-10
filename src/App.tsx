import React, { FC } from 'react';
import { Layout } from 'antd';

import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import HeaderInner from './Components/Header/Header';
import FooterInner from './Components/Footer/Footer'

const { Header, Footer,Content } = Layout;



const App: FC = () => (
        <>
            <Layout>
            <Header><HeaderInner/></Header>
            <Content><MainPage/></Content>
            <Footer><FooterInner/> </Footer>
            </Layout>
        </>
    );


export default App;
