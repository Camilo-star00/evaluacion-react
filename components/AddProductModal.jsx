import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddProductModal({ visible, onClose, onSave, form, setForm }) {
  if (!visible) return null;

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <View style={styles.headerModal}>
          <Text style={styles.title}>Agregar producto</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </Pressable>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formControl}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              value={form.name}
              onChangeText={(value) => handleChange('name', value)}
              placeholder="Ej: Tomate"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={styles.input}
              value={form.description}
              onChangeText={(value) => handleChange('description', value)}
              placeholder="Ej: Fresco y orgánico"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Stock</Text>
            <TextInput
              style={styles.input}
              value={form.stock}
              keyboardType="numeric"
              onChangeText={(value) => handleChange('stock', value)}
              placeholder="Ej: 25"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Categoría</Text>
            <TextInput
              style={styles.input}
              value={form.category}
              onChangeText={(value) => handleChange('category', value)}
              placeholder="Ej: Verduras"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Precio</Text>
            <TextInput
              style={styles.input}
              value={form.price}
              keyboardType="numeric"
              onChangeText={(value) => handleChange('price', value)}
              placeholder="Ej: 1200"
            />
          </View>

          <View style={styles.formControl}>
            <Text style={styles.label}>Imagen</Text>
            <TextInput
              style={styles.input}
              value={form.image}
              onChangeText={(value) => handleChange('image', value)}
              placeholder="URL de la imagen"
            />
          </View>

          <Pressable style={styles.saveButton} onPress={onSave}>
            <Text style={styles.saveText}>Guardar producto</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    overflow: 'hidden',
  },
  headerModal: {
    backgroundColor: '#1f8d3d',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
  closeButton: {
    padding: 6,
  },
  closeText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
  },
  formContainer: {
    padding: 18,
  },
  formControl: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bfe2c6',
    borderRadius: 10,
    height: 42,
    paddingHorizontal: 10,
    backgroundColor: '#f7fbf7',
  },
  saveButton: {
    marginTop: 12,
    backgroundColor: '#2e9b4f',
    borderRadius: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});
