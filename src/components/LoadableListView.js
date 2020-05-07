import React from 'react';
import LoadableView from './LoadableView';
import DefaultListView from './DefaultListView';

const LoadableListView = ({
  error,
  onRetry,
  items,
  keyExtractor,
  renderItem,
}) => {
  return (
    <LoadableView
      error={error}
      onRetry={onRetry}
      content={
        items ? (
          <DefaultListView
            items={items}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        ) : null
      }
    />
  );
};

export default LoadableListView;
