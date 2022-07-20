import useSWR, { useSWRConfig } from 'swr';

const useUsers = () => {
  const { data, error, mutate } = useSWR('/users');

  return { data, error };
};

export default useUsers;
