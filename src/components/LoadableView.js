import React from 'react';
import {StyleSheet} from 'react-native';
import CommonStyles from '../utils/CommonStyles';
import Strings from '../localization/Strings';
import Column from './base/Column';
import DefaultText from './base/DefaultText';
import DefaultButton from './base/DefaultButton';
import DefaultLoadingIndicator from './DefaultLoadingIndicator';

/**
 * A Widget that shows an error widget if error is set to True, if not.
 * Renders a DefaultLoadingIndicator if content is null,
 * or renders the content if the content is not null.
 *
 * @requires {boolean} error
 * @requires {Callback} onRetry
 * @requires {Widget} content
 *
 * Default configuration:
 * - flex: 1
 * - alignItems: 'center'
 * - justifyContent: 'center'
 */
const LoadableView = ({error, content, onRetry}) => {
  if (error) {
    return (
      <Column style={styles.columnStyle}>
        <DefaultText style={[CommonStyles.h1]} text={error.message} />
        <DefaultButton title={Strings['Common.Retry']} onPress={onRetry} />
      </Column>
    );
  }

  if (content == null) {
    return <DefaultLoadingIndicator />;
  }

  return content;
};

const styles = StyleSheet.create({
  columnStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadableView;
