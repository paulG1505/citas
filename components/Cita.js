import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const Cita = ({ cita,eliminarPaciente }) => {

  const dialogoEliminar = (id) => {
      eliminarPaciente(cita.id);
  };

  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.texto}>{cita.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario</Text>
        <Text style={styles.texto}>{cita.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas</Text>
        <Text style={styles.texto}>{cita.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={dialogoEliminar}
          style={styles.btnEliminar}
        >
          <Text style={styles.textoEliminar}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor: "#fff",
    borderBottomColor: "#e1e1e9",
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  texto: {
    fontSize: 16,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: "red",
    marginVertical: 10,
  },
  textoEliminar: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Cita;
