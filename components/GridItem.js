import { View, Text, StyleSheet } from 'react-native';

export default function GridItem({ title }) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '45%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
