import * as React from 'react';

interface IStatisticsProps {}

const TEXTS = [`+1000 Spectateur`, `2k Abonne instaram`, `10k Abonne facebook`];

const Statistics: React.FunctionComponent<IStatisticsProps> = () => (
  <div className="flex flex-col pt-20 text-xl text-white bg-purple-900 pb-14">
    <div className="container flex self-center">
      <div className="flex-grow">
        <div className="bg-black w-96 h-96" />
      </div>
      <div>
        <h2 className="tracking-wide md:text-7xl">
          On essaye d&apos;atteindre la lune
        </h2>
        <ul className="md:mt-10 md:ml-32 md:text-4xl">
          {TEXTS.map((e) => (
            <li className="leading-relaxed" key={e}>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Statistics;
