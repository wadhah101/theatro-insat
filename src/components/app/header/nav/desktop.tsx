import * as React from 'react';

interface IDesktopProps {}

const links = [`home`, `about`, `jti`, `something`];

const Desktop: React.FunctionComponent<IDesktopProps> = () => (
  <nav className="">
    <ul className="flex items-center">
      {links.map((e, ind) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={ind}>
          <a href={e}> {e} </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Desktop;
