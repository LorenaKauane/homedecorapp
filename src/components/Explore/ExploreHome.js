import React, {Component} from 'react';
import styles from './styles/ExploreHome.style';
import * as theme from '../../util/theme';
import {Text, View, Image, TouchableOpacity} from 'react-native';

class ExploreHome extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          this.props.navigation.navigate('Post', {
            post: this.props.posts,
          })
        }>
        <View
          style={[
            styles.flex,
            styles.explore,
            styles.shadow,
            this.props.index === 0 ? {marginLeft: theme.sizes.margin} : null,
            this.props.isLastItem
              ? {marginRight: theme.sizes.margin / 2}
              : null,
          ]}>
          <View style={styles.exploreHeader}>
            <Image
              style={[styles.exploreImage]}
              source={{uri: this.props.item.caminhoFoto}}
            />
          </View>
          <View
            style={[
              styles.flex,
              styles.column,
              styles.shadow,
              {
                justifyContent: 'space-evenly',
                padding: theme.sizes.padding / 2,
              },
            ]}>
            <Text
              style={{
                fontSize: theme.sizes.font * 1.25,
                fontWeight: '500',
                paddingBottom: theme.sizes.padding / 4.5,
              }}>
              {this.props.item.title}
            </Text>
            <Text style={{color: theme.colors.caption}}>
              {' '}
              {this.props.item.category}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ExploreHome;
