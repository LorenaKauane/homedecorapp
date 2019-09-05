import React, {Component} from 'react';
import styles from './styles/HeaderExplore.style';
import * as theme from '../../util/theme';
import {Text, View} from 'react-native';

class HeaderExplore extends Component {
  render() {
    return (
      <View style={styles.recommendedHeader}>
        <Text style={{fontSize: theme.sizes.font * 1.4}}>
          Explore Categories
        </Text>
      </View>
    );
  }
}

export default HeaderExplore;
