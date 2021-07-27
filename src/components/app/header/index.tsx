import * as React from 'react';
import StatelessHeader from './stateless';

const Header: React.FC = () => {
  const [fixed] = React.useState(true);

  return <StatelessHeader fixed={fixed} />;
};

export default Header;
