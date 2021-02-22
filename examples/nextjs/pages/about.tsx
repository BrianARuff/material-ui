import * as React from 'react';

type Props = {
  text: string;
};

const About: React.FC<Props> = ({ text }) => {
  return <div>{text}</div>;
};

export default About;
