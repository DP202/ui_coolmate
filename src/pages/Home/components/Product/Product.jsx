// Product.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductItem from '../ProductItem';
import productApi from '../../../../apis/Product.api';

export default function Product() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getAllProducts(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products.</div>;

  return (
    <section className="product spad pt-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="filter__controls">
              <li className="active" data-filter="*">Best Sellers</li>
              <li data-filter=".new-arrivals">New Arrivals</li>
              <li data-filter=".hot-sales">Hot Sales</li>
            </ul>
          </div>
        </div>
        <div className="row product__filter">
          <ProductItem
            products={products?.data?.data} 
          />
        </div>
      </div>
    </section>
  );
}
