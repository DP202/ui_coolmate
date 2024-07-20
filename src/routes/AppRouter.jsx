import { useRoutes } from "react-router-dom";
import pathConfig from "../configs/path.config";
import Home from '../pages/Home';
import Shop from "../pages/Shop";
import ProductDetail from "../pages/Shop/components/ProductDetail/ProductDetail";

export default function AppRouter() {
    return useRoutes([
        {
            path: pathConfig.home,
            element: <Home />
        },
        {
            path:pathConfig.shop,
            element:<Shop/>
        }, 
        {
            path:pathConfig.productDetail,
            element:<ProductDetail/>
        }
    ]);
}
