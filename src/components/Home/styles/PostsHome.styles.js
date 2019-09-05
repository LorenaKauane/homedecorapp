import {StyleSheet, Dimensions, Platform} from 'react-native';
import * as theme from '../../../util/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  posts: {
    flex: 0,
    width: width - theme.sizes.padding * 2,
    height: width * 0.6,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius,
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  boxPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameUser: {
    flexDirection: 'column',
    flex: 2,
    paddingHorizontal: theme.sizes.padding / 2,
  },
});

export default styles;
