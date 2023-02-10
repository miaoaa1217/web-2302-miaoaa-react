import {Layout, Menu} from 'antd';
import {useRoutes, useNavigate} from "react-router-dom";
import {AppstoreOutlined, CameraOutlined, FolderOutlined, HomeOutlined} from "@ant-design/icons";
import {Suspense} from "react";
import routers from "../../routers";

function HomeView() {
    const {Header, Sider, Content} = Layout;
    const navigate = useNavigate();
    const element = useRoutes(routers);
    const items = [
        {key: "", label: "主页", icon: <HomeOutlined/>},
        {key: "album", label: "相册管理", icon: <FolderOutlined/>},
        {key: "picture", label: "图片管理", icon: <CameraOutlined/>},
        {key: "brand", label: "品牌管理", icon: <AppstoreOutlined/>}
    ]

    return (
        <div className="app">
            <Layout>
                <Sider width={250} style={{height: "100vh", paddingTop: "64px"}}>
                    <Menu
                        defaultSelectedKeys={['']}
                        mode="inline"
                        theme="dark"
                        items={items}
                        onClick={(e) => {
                            let path = e.key ? `/admin/${e.key}` : "/admin"
                            navigate(path)
                        }}
                    />
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content>
                        <Suspense>
                            {element}
                        </Suspense>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default HomeView;
