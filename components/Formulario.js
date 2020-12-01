import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
//genera id
import moduleName from 'module'


const Formulario = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const [paciente, setPaciente] = useState("");
  const [propietario, setPropietario] = useState("");
  const [contacto, setContacto] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    const opciones = { year: "numeric", month: "long", day: "2-digit" };
    setFecha(date.toLocaleDateString("es-Es", opciones));
    hideDatePicker();
  };
  const confirmarHora = (hora) => {
    const opciones = {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
      year: false,
    };
    setHora(hora.toLocaleString("en-US", opciones));
    hideTimePicker();
  };

  const crearNuevaCita = () => {
    if(paciente.trim()==='' ||
    propietario.trim()==='' ||
    contacto.trim()==='' || 
    sintomas.trim()==='' || 
    fecha.trim()==='' ||
    hora.trim()==='' ){
     mostrarAlerta();
     return;
    }
    const cita={paciente,propietario,contacto,fecha,hora,sintomas};

  };

  const mostrarAlerta=()=>{
    Alert.alert(
      'Error',//titulo
      'Todos los campos son obligatorios',//cuerpo
      [{text:'OK'}]//botones
    )
  }

  return (
    <ScrollView style={styles.formulario}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => setPaciente(texto)}
        />
      </View>
      <View>
        <Text style={styles.label}>Propietario:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => setPropietario(texto)}
        />
      </View>
      <View>
        <Text style={styles.label}>Contacto:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => setContacto(texto)}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.label}>Fecha:</Text>
        <TouchableHighlight
          style={styles.buttonDate}
          // title="Seleccionar Fecha"
          onPress={showDatePicker}
        >
          <Text style={styles.textoDate}>SELECCIONAR FECHA</Text>
        </TouchableHighlight>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={confirmarFecha}
          onCancel={hideDatePicker}
          locale="es-ES"
          headerTextIOS="Elige una Fecha"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
        />
        <Text>{fecha}</Text>
      </View>
      <View>
        <Text style={styles.label}>Hora:</Text>
        <TouchableHighlight
          style={styles.buttonDate}
          // title="Seleccionar Hora"
          onPress={showTimePicker}
        >
          <Text style={styles.textoDate}>SELECCIONAR FECHA</Text>
        </TouchableHighlight>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={confirmarHora}
          onCancel={hideTimePicker}
          locale="es-ES"
          headerTextIOS="Elige una Hora"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
        />
        <Text>{hora}</Text>
      </View>
      <View>
        <Text style={styles.label}>Síntomas:</Text>
        <TextInput
          multiline
          style={styles.input}
          onChangeText={(texto) => setSintomas(texto)}
        />
      </View>
      <View>
        <TouchableHighlight onPress={crearNuevaCita} style={styles.btnSubmit}>
          <Text style={styles.textoSubmit}>Enviar &times;</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
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
  btnSubmit: {
    padding: 10,
    backgroundColor: "#7d024e",
    marginVertical: 10,
  },
  textoSubmit: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  textoDate:{
    color:'rgba(60, 124, 238, 0.8)',
    textAlign:'center',
  },
  buttonDate: {
    backgroundColor: "#fff",
  },
});
