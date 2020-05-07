import React from 'react';
import DefaultText from './DefaultText';

/**
 * A Text widget with toUpperCase invocation to its content.
 * @requires {String} text
 * @requires {Style} style
 */
const CapitalText = ({text, style}) => {
  return <DefaultText style={style} text={text.toUpperCase()} />;
};

export default CapitalText;
