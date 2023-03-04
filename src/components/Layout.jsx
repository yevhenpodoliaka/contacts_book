import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import TopAppBar from './TopAppBar/TopAppBar';
import Loader from './Loader';

const Layout = () => {
  
  return (
    <>
      <TopAppBar />
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
    </>
  );
}

export default Layout
