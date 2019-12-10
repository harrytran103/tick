import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { Icon } from 'react-native-ui-kitten';
import { color } from 'src/config/theme';

interface Props {}

const AddCategoryItem: React.FC<Props> = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Icon name='plus' width={24} height={24} fill='#fff' />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: (Dimensions.get('screen').width - 40) / 4,
    height: (Dimensions.get('screen').width - 40) / 2,
    padding: 12,
    margin: 5,
    borderRadius: 10,
    backgroundColor: color.primary,
    borderWidth: 1,
    borderColor: color.primary
  }
});

export default AddCategoryItem;
