import React, { FC, useEffect } from 'react';
import { Layout } from 'antd';
import './App.css';
import MainPageContainer from './Components/MainPage/MainPageContainer';
import HeaderInner from './Components/Header/Header';
import FooterInner from './Components/Footer/Footer';
import 'antd/dist/antd.css';

const { Header, Footer,Content } = Layout;


const App: FC = () => (

        <>
            <Layout style={{minHeight:'100vh'}}>
            <HeaderInner/>
            <Content>
                <MainPageContainer/>
            </Content>
            <FooterInner/>
            </Layout>
            </>
    );

export default App;


// git checkout develop;
// git pull origin develop// подтягиваю изменеения из репозитория;
// git checkout -b mybranch || git checkout mybranch (если надо подтянуть изменения в свою ветку);
// ?? git merge develop || cherry-pick;
// git push origin mybranch;
// pull request на гитхабе;

