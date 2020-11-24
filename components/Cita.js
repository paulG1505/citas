import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cita = ({ cita }) => {
  return (
    <View style={styles.cita}>
      <View>
        <Text  style={styles.label}>Paciente</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
      backgroundColor:'#fff',
      borderBottomColor:'#e1e1e9',
      borderStyle:'solid',
      borderBottomWidth:1,
      paddingVertical:15,
      paddingHorizontal:15
  },
  label:{
      fontWeight:'bold',
      fontSize:18,
      marginTop:20,
  },
  texto:{
      fontSize:16
  }

});

export default Cita;
