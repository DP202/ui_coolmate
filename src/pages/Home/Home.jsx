import MainLayout from "../../layouts/MainLayout/MainLayout";

export default function Home(){
    return (
       <MainLayout showBreadcrumb={false} showCategory={false}>
        <div>Home</div>
       </MainLayout>
    )
}