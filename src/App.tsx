import React, { FC } from 'react';
import { Layout } from 'antd';
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import HeaderInner from './Components/Header/Header';
import FooterInner from './Components/Footer/Footer'
import 'antd/dist/antd.css';

const { Header, Footer,Content} = Layout;




const App: FC = () => (
    
        <>
            <Layout style={{minHeight:'100vh'}}>
            <Header style={{background:'#FFD97D'}} className="header"><HeaderInner/></Header>
            <Content><MainPage/></Content>
            <Footer style ={{marginTop:'auto'}}><FooterInner/> </Footer>
            </Layout>
            </>
    );


export default App;
