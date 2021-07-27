import clsx from 'clsx';

import * as React from 'react';
import * as Self from './exports.self';

interface IStatelessHeaderProps {
  fixed: boolean;
  absolute: boolean;
  dark: boolean;
}

const StatelessHeader: React.FunctionComponent<IStatelessHeaderProps> = ({
  dark,
  fixed,
  absolute,
}) => (
  <header
    className={clsx(
      `flex top-0 left-0 z-50  w-full items-center  h-24 justify-center shadow`,
      fixed && `fixed`,
      absolute && `absolute`,
      dark && ` bg-black bg-opacity-50 `,
    )}
  >
    <div className="container flex items-center">
      <Self.Logo />
      <div className="flex-grow" />
      <Self.Nav.Desktop dark={dark} />
    </div>
  </header>
);

export default StatelessHeader;
