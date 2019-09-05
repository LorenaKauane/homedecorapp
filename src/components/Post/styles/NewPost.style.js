import {StyleSheet, Dimensions} from 'react-native';
import * as theme from '../../../util/theme';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  back: {},
  contentHeader: {
    backgroundColor: 'transparent',
    padding: theme.sizes.padding,
    borderTopLeftRadius: theme.sizes.radius,
    borderTopRightRadius: theme.sizes.radius,
    marginTop: -theme.sizes.padding / 2,
  },
  posts: {
    flex: 0,
    width: width - theme.sizes.padding * 2,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius,
    marginTop: theme.sizes.padding * 0.66,
  },
  avatar: {
    width: theme.sizes.padding * 4,
    height: theme.sizes.padding * 4,
    borderRadius: theme.sizes.padding * 4,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  dotsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 36,
    right: 0,
    left: 0,
  },
  boxPost: {
    overflow: 'visible',
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
  },
  title: {
    fontSize: theme.sizes.font * 2,
    fontWeight: 'bold',
  },
  description: {
    fontSize: theme.sizes.font * 1.2,
    lineHeight: theme.sizes.font * 2,
    color: theme.colors.caption,
  },
  button: {
    backgroundColor: theme.colors.active,
    borderRadius: 6.25,
    color: theme.colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 5,
    textAlign: 'center',
  },
});

export default styles;
