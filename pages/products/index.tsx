import Link from 'next/link';
import React from 'react';

import useProducts from './../../hook/use-product';
type Props = {};

const ProductPage = (props: Props) => {
  const { data: products, error, create, remove, update } = useProducts();
  if (error) return <div className="">failed to load</div>;
  if (!products) return <div className="">loading...</div>;
  console.log(products);
  return (
    <div>
      <div className="">
        {products.map((item: any) => (
          // eslint-disable-next-line react/jsx-key
          <div className="" key={item.id}>
            <div className="">
              <Link href={`/products/${item.id}`}>{item.name}</Link>
            </div>
            <div className="">
              <button
                onClick={() => {
                  remove(item.id);
                }}
              >
                Delete
              </button>
            </div>
            <div className="">
              <button
                onClick={() => {
                  update(item.id, { name: 'productUpdate' });
                }}
              >
                Update
              </button>
            </div>
          </div>
        ))}
        <div className="">
          <button
            onClick={() => {
              create({ name: 'newProducts' });
            }}
          >
            create
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
