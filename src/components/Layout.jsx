import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import TopAppBar from './TopAppBar/TopAppBar';

const Layout = () => {
  
  return (
    <>
      <TopAppBar />
        <Suspense fallback={<p>LOADING...</p>}>
          <Outlet />
        </Suspense>
    </>
  );
}

export default Layout
