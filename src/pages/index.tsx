import React from 'react';
import { PageProps } from 'gatsby';
import * as Home from '@comp/pages/home/exports';

const HomePage: React.FC<PageProps> = () => (
  <main className="min-h-screen">
    <Home.Banner />
  </main>
);

export default HomePage;
