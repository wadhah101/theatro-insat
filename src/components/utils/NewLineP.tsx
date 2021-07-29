import * as React from 'react';

interface INewLinePProps {
  data: string;
}

const NewLineP: React.FunctionComponent<INewLinePProps> = ({ data }) => (
  <div>
    {data.split(`\n`).map((e, ind) => (
      // eslint-disable-next-line react/no-array-index-key
      <p key={ind}> {e} </p>
    ))}
  </div>
);

export default NewLineP;
