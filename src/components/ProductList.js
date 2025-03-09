import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  // Product data
  const products = [
    {
      id: 1,
      name: 'Smartphone X Pro',
      price: 699.99,
      image: 'https://cdn.midjourney.com/ffb35523-f420-434d-bf67-a9ebf998d19d/0_0.png'
    },
    {
      id: 2,
      name: 'Ultrabook Pro 15"',
      price: 1299.99,
      image: 'https://cdn.midjourney.com/c2f0964d-b09f-4eda-9135-7e6eb4a5db68/0_1.png'
    },
    {
      id: 3,
      name: 'Wireless Noise-Canceling Headphones',
      price: 149.99,
      image: 'https://cdn.midjourney.com/f7f98eec-7590-4f5c-9a94-f9b47ee6ce69/0_2.png'
    },
    {
      id: 4,
      name: 'Smart Watch Series 5',
      price: 249.99,
      image: 'https://cdn.midjourney.com/9c0925df-b724-4fc0-9776-ba82a92c7379/0_3.png'
    },
    {
      id: 5,
      name: 'Bluetooth Portable Speaker',
      price: 79.99,
      image: 'https://cdn.midjourney.com/526a582e-75a9-4f1d-8603-76cf535c7285/0_0.png'
    },
    {
      id: 6,
      name: '4K Ultra HD Smart TV 55"',
      price: 549.99,
      image: 'https://cdn.midjourney.com/043b7c8d-440e-4e39-8bd0-64e3f4182c6e/0_2.png'
    }
  ];

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;