import React from 'react';
import LoadableView from './LoadableView';
import DefaultListView from './DefaultListView';

/**
 * A Widget that shows an error widget if error is set to True, or else render a FlatList.
 * @requires {boolean} error
 * @requires {Callback} onRetry
 * @requires {List} items
 * @requires {Callback(item)} keyExtractor
 * @requires {Callback(item)} renderItem
 */
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
