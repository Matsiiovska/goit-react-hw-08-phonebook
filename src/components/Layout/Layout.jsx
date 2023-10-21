import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
