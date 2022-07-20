import useSWR, { useSWRConfig } from 'swr';
import { add, removeItem, updateItem } from '../api/products';
import instance from '../api/instance';
import { useRouter } from 'next/router';

const useProducts = () => {
  const router = useRouter();
  const { id } = router.query;
  // const getParams = () => {
  //   if (id) {
  //     return id;
  //   } else {
  //     return '';
  //   }
  // };
  // const { data, error, mutate } = useSWR(`/products/` + getParams());
  const { data, error, mutate } = useSWR(
    id !== undefined ? `/products/${id}` : `/products/`
  );
  const create = async (item: any) => {
    const product = await add(item);
    mutate([...data, product]);
  };
  const update = async (id: any, product: any) => {
    const products = await updateItem(id, product);
    const afterUpdate = data.map((item: any) =>
      item.id == id ? products : item
    );
    mutate(afterUpdate);
  };
  const remove = async (id: any) => {
    if (confirm('Are you sure you want to remove')) {
      await removeItem(id);
      const refesh = data.filter((item: any) => item.id != id);
      mutate(refesh);
    }
  };

  return { data, error, create, update, remove };
};

export default useProducts;
