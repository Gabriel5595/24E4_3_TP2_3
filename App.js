import { View, StyleSheet } from 'react-native';
import GridItem from './components/GridItem';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <GridItem title="Item A" />
        <GridItem title="Item B" />
        <GridItem title="Item C" />
        <GridItem title="Item D" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '80%',
  },
});
