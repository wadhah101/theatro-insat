import * as React from 'react';
import StatelessHeader from './stateless';

const Header: React.FC = () => {
  const [fixed] = React.useState(false);
  const [absolute] = React.useState(true);
  const [dark] = React.useState(true);

  return <StatelessHeader dark={dark} fixed={fixed} absolute={absolute} />;
};

export default Header;
