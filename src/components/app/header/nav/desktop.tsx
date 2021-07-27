import clsx from 'clsx';
import * as React from 'react';
import * as Data from './data';

interface IDesktopProps {
  dark: boolean;
}

const Desktop: React.FunctionComponent<IDesktopProps> = ({ dark }) => (
  <nav className="">
    <ul
      className={clsx(`flex items-center `, dark ? `text-white` : `text-black`)}
    >
      {Data.navigationLinks.map((e, ind) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={ind}>
          <a href={e.href}> {e.name} </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Desktop;
