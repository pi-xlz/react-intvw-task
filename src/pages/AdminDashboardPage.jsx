import React from 'react';
import { showToast, GlobalContext } from '../globalContext';
import { useContext, useEffect } from 'react';

const AdminDashboardPage = () => {
  const { dispatch } = useContext(GlobalContext);
  useEffect(() => {
    showToast(dispatch, 'LOGGED IN');
  }, []);

  return (
    <>
      <div className="w-full flex justify-center items-center h-screen bg-black text-white px-7 py-7">
        <div className="flex justify-between w-full">
          <h1 className="text-2xl">APP</h1>
          <button className="bg-green-600">Logout</button>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
