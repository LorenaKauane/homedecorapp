import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/Home.styles';
import * as theme from '../../util/theme';
import PostHome from './PostHome';
import HeaderExplore from '../Explore/HeaderExplore';
import ExploreHome from '../Explore/ExploreHome';
import {connect} from 'react-redux';
import {postList} from '../../actions';

const {width, height} = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.postList();
  }

  scrollX = new Animated.Value(0);
  static navigationOptions = ({navigation}) => ({
    header: (
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('NewPost');
            }}>
            <Text style={styles.button}>New post</Text>
          </TouchableOpacity>
          <Text style={{fontSize: theme.sizes.font * 1.4}}>Last Posts</Text>
        </View>
      </View>
    ),
  });

  renderDots() {
    const {posts} = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View style={styles.dotsBox}>
        {posts.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`step-${item._id}`}
              style={[
                styles.dots,
                styles.activeDot,
                {borderWidth: borderWidth},
              ]}
            />
          );
        })}
      </View>
    );
  }

  renderPosts = () => {
    return (
      <View style={[styles.column, styles.posts]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{overflow: 'visible', height: 280}}
          data={this.props.posts}
          keyExtractor={(item, index) => `${item._id}`}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: this.scrollX}}},
          ])}
          renderItem={({item}) => this.posts(item)}
        />
        {this.renderDots()}
      </View>
    );
  };

  posts = item => {
    const {navigation, posts} = this.props;

    return <PostHome navigation={navigation} item={item} posts={posts} />;
  };

  renderExplore = () => {
    return (
      <View style={styles.exploreHome}>
        <HeaderExplore />
        <View style={styles.column}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={[styles.shadow, {overflow: 'visible'}]}
            data={this.props.posts}
            keyExtractor={(item, index) => `${item._id}`}
            renderItem={({item, index}) => this.explore(item, index)}
          />
        </View>
      </View>
    );
  };

  explore = (item, index) => {
    const {posts, navigation} = this.props;
    const isLastItem = index === posts.length - 1;
    return (
      <ExploreHome
        navigation={navigation}
        item={posts[index]}
        index={index}
        posts={posts}
        isLastItem={isLastItem}
      />
    );
  };

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: theme.sizes.padding}}>
        {this.renderPosts()}
        {this.renderExplore()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({posts: state.posts.postsList});

export default connect(
  mapStateToProps,
  {postList},
)(Home);
