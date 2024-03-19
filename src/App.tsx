import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailView from './components/DetailedView';
import GameInput from './components/GameInput';
import GameRecommendation from './components/GameRecommendation';
import dummyGameDetails from './utils/dummyDetail';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import Login from './components/Login';

const { Header, Content, Footer, Sider } = Layout;


// navigation is defined here
// icon <UserOutlined/> here is just a plain icon. Think of it as an emoji for each 
// label is where the text will be shown. 
const items: { icon: React.ReactNode; label: string; path: string }[] = [
  { icon: <UserOutlined />, label: 'Home', path: '/' },
  { icon: <VideoCameraOutlined />, label: 'Game Details', path: '/game/123' }, // Adjust the path as needed
  { icon: <UploadOutlined />, label: 'Search', path: '/search' },
  { icon: <BarChartOutlined />, label: 'Recommendations', path: '/recommendations' },
  { icon:<UserOutlined />, label: 'Login', path: '/login' },
];

const App: React.FC = () => {
  // token here is just for the default Theme.
  // no need to worry about this token thingy.
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <BrowserRouter>
      <Layout hasSider>
        <Sider
          style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
        >
          <div className=""/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {items.map((item, index) => (
              <Menu.Item key={String(index + 1)} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div
              style={{
                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/game/:gameId"
                  element={<DetailView gameDetails={dummyGameDetails} />}
                />
                <Route
                  path="/search"
                  element={
                    <GameInput
                      onSearch={(gameName: string): void => {
                        console.log(`Search for game: ${gameName}`);
                      }}
                    />
                  }
                />
                <Route
                  path="/recommendations"
                  element={<GameRecommendation recommendations={[]} />}
                />
                  <Route
                  path="/login"
                  element={<Login/>}
                />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
                  Footer here
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
