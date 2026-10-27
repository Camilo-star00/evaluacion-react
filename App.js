import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ModalAgregarProducto from './components/ModalAgregarProducto';
import ListaProductos from './components/ListaProductos';
import BarraBusqueda from './components/BarraBusqueda';

const productosIniciales = [
  {
    id: 1,
    name: 'Tomate',
    description: 'Fresco, Grande jugoso y al mejor precio del mercado ',
    stock: 20,
    category: 'Verduras',
    price: 3000,
    image: 'https://media.istockphoto.com/id/1450576005/es/foto/tomate-aislado-tomate-sobre-fondo-blanco-perfecta-vista-lateral-de-tomate-retocado-con-trazado.jpg?s=612x612&w=0&k=20&c=DZQAmlxov8KbvT4vcSAoU9L5dU6bqNTbBESzBMtuMZ4=',
  },
  {
    id: 2,
    name: 'Zanahoria',
    description: 'Orgánica jugosita y fresca para la ensaladita o lo que tu quieras',
    stock: 15,
    category: 'Verduras',
    price: 2500,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtiCjMiyAp-6X_oO_0d6sLVW9FBiNPMs0d6tMln-v32DhqMx_N_1aCrOA&s=10',
  },
  {
    id: 3,
    name: 'Papa',
    description: 'Criolla perfecta para cualquier comida de tu hogar',
    stock: 30,
    category: 'Tubérculo',
    price: 2000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKs-lOAh6ItH9Rcwdx5H1JLaPhD18j8e_-_LhjiRSmSw&s',
  },
  {
    id: 4,
    name: 'Lechuga',
    description: 'Fresca grande jugosa y al mejor precio ',
    stock: 10,
    category: 'Verduras',
    price: 1800,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sMr-PPdwQPbUsER_2mnGVzX6DPtih-MU9UAi96FQp8mxYQHwMvFHaYZ4&s=10',
  },
];

const formularioVacio = {
  name: '',
  description: '',
  stock: '',
  category: '',
  price: '',
  image: '',
};

export default function App() {
  const [productos, setProductos] = useState(productosIniciales);
  const [modalVisible, setModalVisible] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [formulario, setFormulario] = useState(formularioVacio);

  const productosFiltrados = useMemo(() => {
    if (!busqueda.trim()) return productos;

    return productos.filter((product) => {
      const text = busqueda.toLowerCase();
      return (
        product.name.toLowerCase().includes(text) ||
        product.category.toLowerCase().includes(text) ||
        product.description.toLowerCase().includes(text)
      );
    });
  }, [productos, busqueda]);

  const guardarProducto = () => {
    const nuevoProducto = {
      id: Date.now(),
      name: formulario.name || 'Producto',
      description: formulario.description || 'Nuevo',
      stock: Number(formulario.stock) || 0,
      category: formulario.category || 'Verduras',
      price: Number(formulario.price) || 0,
      image:
        formulario.image ||
        'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    };

    setProductos((prev) => [nuevoProducto, ...prev]);
    setFormulario(formularioVacio);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Listado de productos</Text>
      </View>

      <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />
      <ListaProductos productos={productosFiltrados} />

      <Pressable style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>

      <ModalAgregarProducto
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={guardarProducto}
        formulario={formulario}
        setFormulario={setFormulario}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fbf4',
  },
  header: {
    backgroundColor: '#1f8d3d',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '700',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 24,
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#2e9b4f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 42,
    lineHeight: 42,
    marginBottom: 6,
  },
});
