import MainLayout from "../../layouts/MainLayout/MainLayout";
import Footer from "./components/Footer/Footer";
import Instagram from "./components/Instagram";
import Product from "./components/Product/Product";
import Slider from "./components/Slider";

export default function Home(){
    return (
       <MainLayout showBreadcrumb={false} showCategory={false}>
        <Slider/>
        <Product/>
        <Instagram/>
        <Footer/>
       </MainLayout>
    )
}