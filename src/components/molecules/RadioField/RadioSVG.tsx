import React from 'react';

type Props = {
  className?: string;
};

const RadioSVG: React.FC<Props> = (props: Props) => (
  <svg className={props.className} width="25" height="25" viewBox="0 0 25 25">
    <circle
      cx="12.5"
      cy="12.5"
      r="11.5"
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
    />
    <circle className="inner" fill="currentColor" cx="12.5" cy="12.5" r="30%" />
  </svg>
);

export default RadioSVG;
