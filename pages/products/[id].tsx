import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import useProducts from '../../hook/use-product';
type Props = {};

const DetailPage = (props: Props) => {
  // const router = useRouter();
  // const { id } = router.query;
  // const url = `https://620237e9b8735d00174cb87f.mockapi.io/products/${id}`;
  // const fetcher = async (url: string) => await (await fetch(url)).json();
  // const { data: products, error } = useSWR(id ? url : null, fetcher);
  const { data: products, error, create, remove, update } = useProducts();
  if (error) return <div className="">failed to fetch data</div>;
  if (!products) return <div className="">loading...</div>;
  return <div>detail: {products.name}</div>;
};

export default DetailPage;
