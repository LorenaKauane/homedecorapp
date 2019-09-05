import React, {Component} from 'react';
import styles from './styles/PostsHome.styles';
import * as theme from '../../util/theme';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import DescriptionPostHome from './DescriptionPostHome';

class PostHome extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          this.props.navigation.navigate('Post', {
            post: this.props.posts,
          })
        }>
        <ImageBackground
          style={[styles.posts, styles.shadow]}
          imageStyle={{borderRadius: theme.sizes.radius}}
          source={{uri: this.props.item.caminhoFoto}}>
          <View style={styles.boxPost}>
            <View style={{flex: 0}}>
              <Image
                source={{uri: this.props.item.user.caminhoFoto}}
                style={styles.avatar}
              />
            </View>
            <View style={styles.nameUser}>
              <Text style={{color: theme.colors.white, fontWeight: 'bold'}}>
                {this.props.item.user.name}
              </Text>
              <Text style={{color: theme.colors.white}}>
                {this.props.item.category}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <DescriptionPostHome item={this.props.item} />
      </TouchableOpacity>
    );
  }
}

export default PostHome;
