import React from 'react';
import useUsers from '../../hook/use-user';

type Props = {};

const UserPage = (props: Props) => {
  const { data: users, error } = useUsers();
  console.log(users);
  return (
    <div>
      {users?.map((item: any) => (
        // eslint-disable-next-line react/jsx-key
        <div className="">{item.email}</div>
      ))}
    </div>
  );
};

export default UserPage;
