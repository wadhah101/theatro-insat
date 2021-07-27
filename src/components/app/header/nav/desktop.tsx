import clsx from 'clsx';
import { Link } from 'gatsby';

import * as React from 'react';
import * as Data from './data';

interface IDesktopProps {
  dark: boolean;
}

const Desktop: React.FunctionComponent<IDesktopProps> = ({ dark }) => (
  <nav className="">
    <ul
      className={clsx(
        `flex  items-center `,
        dark ? `text-white text-opacity-50  ` : `text-black`,
      )}
    >
      {Data.navigationLinks.map((e, ind) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={ind}>
          <Link
            className="mx-4 text-lg"
            partiallyActive={ind !== 0}
            activeClassName=" text-white text-opacity-100 underline "
            to={e.href}
          >
            {e.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Desktop;
