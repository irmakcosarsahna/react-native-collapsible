import {StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';
import {colors} from '@config';

const spacing = normalize(8);
const radius = normalize(8);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing * 3,
    marginTop: spacing * 2,
    paddingHorizontal: spacing * 2,
    paddingVertical: spacing * 2,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FCFCFC',
  },
  title: {
    fontWeight: 'bold',
  },
  items: {
    zIndex: -1,
    marginHorizontal: spacing * 3,
    backgroundColor: '#FCFCFC',
  },
  itemContainer: {
    paddingVertical: spacing * 2,
    paddingHorizontal: spacing * 2,
    borderBottomWidth: 0.5,
    borderColor: '#90909054',
  },
  name: {
    fontSize: 16,
  },
  pointsContainer: {
    borderRadius: radius,
    padding: 8,
  },
  points: {
    color: 'white',
    fontWeight: 'bold',
  },
  chevronContainer: {
    borderRadius: radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomRadius: {
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: radius,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    elevation: 10,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 0},
  },
});

export {styles};
