import {StyleSheet, Dimensions} from 'react-native';
import * as theme from '../../../util/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  explore: {
    flexDirection: 'column',
    width: (width - theme.sizes.padding * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.5,
  },
  exploreHeader: {
    flex: 0,
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius,
  },
  exploreImage: {
    width: (width - theme.sizes.padding * 2) / 2,
    height: (width - theme.sizes.padding * 2) / 2,
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
});

export default styles;
