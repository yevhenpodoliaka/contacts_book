import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import TopAppBar from './TopAppBar/TopAppBar';

export default function Layout() {
  return (
    <>
      <TopAppBar />
      <main style={{padding:"15px", margin:"65px 0"}}>
        <Suspense fallback={<p>LOADING...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
