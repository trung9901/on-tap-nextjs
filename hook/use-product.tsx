import useSWR, { useSWRConfig } from 'swr';
import { add, getItem, removeItem, updateItem } from '../api/products';
import instance from '../api/instance';
import { useRouter } from 'next/router';

const useProducts = () => {
  const router = useRouter();
  const { id } = router.query;
  const getParams = () => {
    if (id) {
      return id;
    } else {
      return '';
    }
  };
  const { data, error, mutate } = useSWR(`/products/` + getParams());
  //   const { mutate } = useSWRConfig();
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
    await removeItem(id);
    const refesh = data.filter((item: any) => item.id != id);
    mutate(refesh);
  };
  const get = async (id: any) => {
    const product = await getItem(id);
    mutate(product);
  };
  return { data, error, create, update, remove, get };
};

export default useProducts;
