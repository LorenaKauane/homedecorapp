import {StyleSheet, Dimensions, Platform} from 'react-native';
import * as theme from '../../../util/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  description: {
    flexDirection: 'column',
    position: 'absolute',
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    bottom: 20,
    left: (width - theme.sizes.padding * 4) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme.colors.white,
    width: width - theme.sizes.padding * 4,
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
  title: {
    fontSize: theme.sizes.font * 1.25,
    fontWeight: '500',
    paddingBottom: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    color: theme.colors.caption,
  },
});

export default styles;
