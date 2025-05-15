import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({ children, style }) {
  let estilo = estilos.texto;

  if (style?.fontWeight === 'normal') {
    estilo = estilos.textoNegrito;
  }

  return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'Arial',
    fontWeight: 'normal',
  },
  textoNegrito: {
    fontFamily: 'Arial',
    fontWeight: 'normal',
  },
});