import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View style={styles.formulario}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => {
            console.log(texto);
          }}
        />
      </View>
      <View>
        <Text style={styles.label}>Propietario:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => {
            console.log(texto);
          }}
        />
      </View>
      <View>
        <Text style={styles.label}>Contacto:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => {
            console.log(texto);
          }}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View>
        <Text style={styles.label}>Síntomas:</Text>
        <TextInput
          multiline
          style={styles.input}
          onChangeText={(texto) => {
            console.log(texto);
          }}
        />
      </View>
    </View>
  );
};

export default Formulario;

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: "2.5%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    padding: 10,
  },
});
