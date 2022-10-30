import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import TopAppBar from './TopAppBar/TopAppBar';

export default function Layout() {
  return (
    <>
      <TopAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
