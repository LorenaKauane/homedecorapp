import {StyleSheet} from 'react-native';
import * as theme from '../../../util/theme';

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2,
  },
  posts: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  exploreHome: {
    flex: 0,
    flexDirection: 'column',
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
  dotsBox: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.active,
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
