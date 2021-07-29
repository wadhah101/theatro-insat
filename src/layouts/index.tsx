import * as React from 'react';
import * as App from '@comp/app/exports';
import { Helmet } from 'react-helmet';

const description = `Theatro insat webpage demo v1 `;

const Layout: React.FunctionComponent = ({ children }) => (
  <div className="font-sans ">
    <App.Header />
    <Helmet>
      <meta charSet="utf-8" />
      <title> Theatro INSAT </title>
      <html lang="en" />
      <meta name="description" content={description} />
    </Helmet>
    {children}
    <App.Footer />
  </div>
);

export default Layout;
