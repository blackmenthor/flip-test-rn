import React from 'react';
import {StyleSheet} from 'react-native';
import CapitalText from '../../../../components/base/CapitalText';
import DefaultText from '../../../../components/base/DefaultText';
import Row from '../../../../components/base/Row';
import Column from '../../../../components/base/Column';

const TwoRowTexts = ({
  firstTitle,
  firstContent,
  secondTitle,
  secondContent,
}) => {
  return (
    <Row style={styles.mainContainerStyle}>
      <Column style={styles.leftContainerStyle}>
        <CapitalText style={styles.headerStyle} text={firstTitle} />
        <DefaultText style={styles.subHeaderStyle} text={firstContent} />
      </Column>
      {!secondTitle && !secondContent ? null : (
        <Column style={styles.rightContainerStyle}>
          <CapitalText style={styles.headerStyle} text={secondTitle} />
          <DefaultText style={styles.subHeaderStyle} text={secondContent} />
        </Column>
      )}
    </Row>
  );
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    marginVertical: 8,
  },
  leftContainerStyle: {
    flex: 2,
  },
  rightContainerStyle: {
    flex: 1,
  },
  headerStyle: {
    fontWeight: 'bold',
  },
  subHeaderStyle: {
    fontSize: 16,
  },
});

export default TwoRowTexts;
