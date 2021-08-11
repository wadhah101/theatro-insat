import React from 'react';
import { PageProps } from 'gatsby';
import * as Home from '@comp/pages/home/exports';

const HomePage: React.FC<PageProps> = () => (
  <main className="flex flex-col min-h-screen ">
    <Home.Banner />
    <div className="container z-10 self-center mt-24">
      <Home.AboutUs />
    </div>
    <div className="transform -translate-y-8">
      <Home.Stats />
    </div>
  </main>
);

export default HomePage;
