import React, { useEffect } from 'react';
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProductItem from '../Home/components/ProductItem';
import productApi from '../../apis/Product.api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import Footer from '../Home/components/Footer/Footer';
import Asidebar from './components/Asidebar';
import Dropdown from './components/Dropdown/Dropdown';

export default function Shop() {

   const {data:products} = useQuery({
    queryKey: ['products'],
    queryFn : ()=> productApi.getAllProducts(),
    placeholderData:keepPreviousData
   })

    return (
        <div>
            <MainLayout showBreadcrumb={true} >
                <div className="container mt-5">
                    <div className="row ">
                       <Asidebar/>


                        <div className="col-lg-9">
                            <div className="shop__product__option">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop__product__option__left">
                                            <p>Hiển thị 1 - 12 sản phẩm</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop__product__option__right">
                                            <Dropdown/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <ProductItem products={products?.data?.data} />
                               
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <nav className='d-flex justify-content-center' aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
            <Footer/>
        </div>
    );
}
