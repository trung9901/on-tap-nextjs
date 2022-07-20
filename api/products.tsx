import instance from './instance';
export const add = (data: any) => {
  return instance.post('/products', data);
};
export const updateItem = (id: any, data: any) => {
  return instance.put(`/products/${id}`, data);
};
export const removeItem = (id: any) => {
  return instance.delete(`/products/${id}`);
};
