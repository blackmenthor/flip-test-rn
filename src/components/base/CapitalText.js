import React from 'react';
import DefaultText from './DefaultText';

const CapitalText = ({text, style}) => {
  return <DefaultText style={style} text={text.toUpperCase()} />;
};

export default CapitalText;
