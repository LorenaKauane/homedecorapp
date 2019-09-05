import React, {Component} from 'react';
import {
  Text,
  View,
  Animated,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as theme from '../../util/theme';
import styles from './styles/Post.style';

const {width} = Dimensions.get('window');

class Post extends Component {
  scrollX = new Animated.Value(0);

  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <View style={[styles.flex, styles.row, styles.header]}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <FontAwesome
              name="chevron-left"
              color={theme.colors.white}
              size={theme.sizes.font * 1}
            />
          </TouchableOpacity>
        </View>
      ),
      headerTransparent: true,
    };
  };

  renderDots = () => {
    const {navigation} = this.props;
    const post = navigation.getParam('post');
    const dotPosition = Animated.divide(this.scrollX, width);

    return (
      <View style={[styles.flex, styles.row, styles.dotsContainer]}>
        {post.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`step-${item._id}-${index}`}
              style={[styles.dots, {opacity}]}
            />
          );
        })}
      </View>
    );
  };

  render() {
    const {navigation} = this.props;
    const post = navigation.getParam('post');

    return (
      <View style={styles.flex}>
        <View style={[styles.flex]}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: this.scrollX}}},
            ])}>
            {post.map((obj, index) => {
              return (
                <View key={`${index}-${obj._id}`} style={styles.boxPost}>
                  <ImageBackground
                    source={{uri: obj.caminhoFoto}}
                    resizeMode="cover"
                    style={{width, height: width}}
                  />
                  <View
                    style={[
                      styles.flex,
                      styles.contentHeader,
                      {height: width},
                    ]}>
                    <Image
                      style={[styles.avatar, styles.shadow]}
                      source={{uri: obj.user.caminhoFoto}}
                    />
                    <Text style={styles.title}>{obj.title}</Text>
                    <View
                      style={[
                        styles.row,
                        {
                          alignItems: 'center',
                          marginVertical: theme.sizes.margin / 2,
                        },
                      ]}></View>
                    <TouchableOpacity>
                      <Text style={styles.description}>
                        {obj.description}...
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>
          {this.renderDots()}
        </View>
      </View>
    );
  }
}

export default Post;
