import React, {Component} from 'react';
import styles from './styles/DescriptionPostHome.styles';
import * as theme from '../../util/theme';
import {Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class DescriptionPostHome extends Component {
  render() {
    return (
      <View style={[styles.description, styles.shadow]}>
        <Text style={styles.title}>{this.props.item.title}</Text>
        <View style={styles.content}>
          <Text style={{color: theme.colors.caption}}>
            {this.props.item.description.split('').slice(0, 50)}...
          </Text>
          <FontAwesome
            name="chevron-right"
            size={theme.sizes.font * 0.75}
            color={theme.colors.caption}
          />
        </View>
      </View>
    );
  }
}

export default DescriptionPostHome;
