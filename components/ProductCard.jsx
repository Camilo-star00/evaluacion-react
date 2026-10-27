import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function TarjetaProducto({ product }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />

      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>
          {product.description}
        </Text>

        <View style={styles.dataRow}>
          <View style={styles.dataCol}>
            <Text style={styles.label}>Stock</Text>
            <Text style={styles.value}>{product.stock}</Text>
          </View>

          <View style={styles.dataCol}>
            <Text style={styles.label}>Categoría</Text>
            <Text style={styles.value}>{product.category}</Text>
          </View>
        </View>

        <View style={styles.dataRow}>
          <View style={styles.dataCol}>
            <Text style={styles.label}>Precio</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>

          <View style={styles.dataCol}>
            <Text style={styles.label}> </Text>
            <Text style={styles.value}> </Text>
          </View>
        </View>

        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Agregar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#d9eadb',
    marginBottom: 14,
  },
  image: {
    width: '100%',
    height: 110,
    backgroundColor: '#e8f5ea',
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
    textAlign: 'center',
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 16,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dataCol: {
    width: '48%',
  },
  label: {
    fontSize: 10,
    color: '#555555',
    marginBottom: 2,
  },
  value: {
    fontSize: 12,
    color: '#222222',
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f8d3d',
  },
  button: {
    backgroundColor: '#2e9b4f',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
});
