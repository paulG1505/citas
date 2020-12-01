import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Platform,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

export const App = () => {
  const [mostrar, setMostrar] = useState(false);

  const [citas, setCitas] = useState([
    { id: "1", paciente: "Paul", propietario: "Juan", sintomas: "No Come" },
    { id: "2", paciente: "Paul1", propietario: "Bryan", sintomas: "No Duerme" },
    { id: "3", paciente: "Paul2", propietario: "Guaman", sintomas: "No Sueña" },
    { id: "4", paciente: "Paul3", propietario: "Guaman", sintomas: "No Come" },
  ]);

  const eliminarPaciente = (id) => {
    setCitas((citaActual) => {
      return citaActual.filter((cita) => cita.id !== id);
    });
  };

  const mostrarForm = () => {
    setMostrar(!mostrar);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>Administrador de citas</Text>
        <View>
          <TouchableHighlight onPress={mostrarForm} style={styles.btnSubmit}>
            <Text style={styles.textoSubmit}>Crea una nueva Cita </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {mostrar ? (
            <>
              <Text style={styles.subtitulo}>Nueva cita</Text>
              <Formulario />
            </>
          ) : (
            <>
              <Text style={styles.subtitulo}>
                {citas.length > 0 ? "Administra tus citas" : "Crea una cita"}
              </Text>
              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({ item }) => {
                  return (
                    <Cita cita={item} eliminarPaciente={eliminarPaciente} />
                  );
                }}
                keyExtractor={(cita) => cita.id}
              />
            </>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AA076B",
  },
  titulo: {
    //platform es para correr codigo especifico de ios o android
    marginTop: Platform.OS === "ios" ? 30 : 20,
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    padding: 10,
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  contenido: {
    flex: 1,
    marginBottom: 20,
  },
  listado: {
    flex: 1,
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: "#7d024e",
    marginVertical: 10,
  },
  textoSubmit: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:18
  },
});
