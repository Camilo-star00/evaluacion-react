import { StyleSheet, TextInput, View } from 'react-native';

export default function BarraBusqueda({ busqueda, setBusqueda }) {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar producto..."
        value={busqueda}
        onChangeText={setBusqueda}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#f4fbf4',
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderColor: '#cfe9d3',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 44,
    fontSize: 15,
  },
});
