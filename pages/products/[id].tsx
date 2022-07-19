import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
type Props = {};

const DetailPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const url = `https://620237e9b8735d00174cb87f.mockapi.io/products/${id}`;
  const fetcher = async (url: string) => await (await fetch(url)).json();
  const { data, error } = useSWR(id ? url : null, fetcher);
  if (error) return <div className="">failed to fetch data</div>;
  if (!data) return <div className="">data was not found</div>;
  return <div>detail: {data.name}</div>;
};

export default DetailPage;
