import {Navigate} from "react-router-dom";
import {lazy} from "react";
// 使用路由懒加载（lazy）
const Home = lazy(() => import("../pages/Home"));
const Album = lazy(() => import("../pages/Home/Album"));
const Brand = lazy(() => import("../pages/Home/Brand"));
const Picture = lazy(() => import("../pages/Home/Picture"));
const Error = lazy(() => import("../pages/Error"));

const routers = [
    {
        path: "/",
        element: <Navigate to="/admin"/>
    },
    {
        path: "*",
        element: <Navigate to="/error"/>,
    },
    {
        path: "/admin",
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "album",
                element: <Album/>,
            },
            {
                path: "brand",
                element: <Brand/>,
            },
            {
                path: "picture",
                element: <Picture/>,
            }
        ]
    },
    {
        path: "/error",
        element: <Error/>,
    }
];
export default routers;
