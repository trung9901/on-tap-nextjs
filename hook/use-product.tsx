import useSWR, { useSWRConfig } from 'swr';
import { add, removeItem, updateItem } from '../api/products';
import instance from '../api/instance';
const useProducts = () => {
  const { data, error, mutate } = useSWR('/products');
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

  return { data, error, create, update, remove };
};

export default useProducts;
