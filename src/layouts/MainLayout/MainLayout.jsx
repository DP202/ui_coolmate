import React from 'react';
import Breadcrumb from './components/Breadcrumb';
import Category from './components/Category';
import Header from './components/Header';

export default function MainLayout({ children, showBreadcrumb,showCategory }) {
    return (
        <div className=''>
            <Header />
            {showBreadcrumb && <Breadcrumb />}
            {showCategory && <Category/>}
            {children}
           


        </div>
    )
}