import React from 'react';
import {StyleSheet} from 'react-native';
import Column from './base/Column';
import DefaultText from './base/DefaultText';
import DefaultButton from './base/DefaultButton';
import DefaultLoadingIndicator from './DefaultLoadingIndicator';
import CommonStyles from '../utils/CommonStyles';

const LoadableView = ({error, content, onRetry}) => {
  if (error) {
    return (
      <Column style={styles.columnStyle}>
        <DefaultText style={[CommonStyles.h1]} text={error.message} />
        <DefaultButton title="Coba Lagi" onPress={onRetry} />
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
