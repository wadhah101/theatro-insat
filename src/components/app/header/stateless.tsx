import * as React from 'react';
import * as Self from './exports.self';

interface IStatelessHeaderProps {
  fixed: boolean;
}

const StatelessHeader: React.FunctionComponent<IStatelessHeaderProps> = () => (
  <header className="flex items-center justify-center h-20 shadow ">
    <div className="container flex items-center">
      <Self.Logo />
      <div className="flex-grow" />
      <Self.Nav.Desktop />
    </div>
  </header>
);

export default StatelessHeader;
