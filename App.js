import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Cita from "./components/Cita";

export const App = () => {
  const [citas, setCitas] = useState([
    { id: "1", paciente: "Paul", propietario: "Juan", sintomas: "No Come" },
    { id: "2", paciente: "Paul1", propietario: "Bryan", sintomas: "No Duerme" },
    { id: "3", paciente: "Paul2", propietario: "Guama", sintomas: "No Sueña" },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <FlatList
        data={citas}
        renderItem={({ item }) => {
          return (
           <Cita cita={item}/>
          );
        }}
        keyExtractor={(cita) => cita.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AA076B",
  },
  titulo: {
    marginTop: 40,
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
