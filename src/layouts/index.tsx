import * as React from 'react';
import * as App from '@comp/app/exports';

const Layout: React.FunctionComponent = ({ children }) => (
  <div className="font-sans ">
    <App.Header />
    {children}
    <App.Footer />
  </div>
);

export default Layout;
