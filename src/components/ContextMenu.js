import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ContextMenu = ({isVisible, onRequestClose, onOptionSelect, options}) => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const handlePressIn = index => {
    setHighlightedIndex(index);
  };

  const handlePressOut = () => {
    setHighlightedIndex(null);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onRequestClose}>
      <TouchableOpacity style={styles.modalOverlay} onPress={onRequestClose}>
        <View style={styles.modalContent}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPressIn={() => handlePressIn(index)}
              onPressOut={handlePressOut}
              onPress={() => onOptionSelect(option)}
              style={[
                styles.optionContainer,
                highlightedIndex === index ? styles.highlightedOption : null
              ]}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  modalContent: {
    backgroundColor: '#DB652F',
    borderRadius: 25,
    padding: 10,
    borderColor: '#DB652F',
    borderWidth: 1.6
  },
  optionContainer: {
    padding: 10,
    backgroundColor: '#DB652F'
  },
  optionText: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white'
  },
  highlightedOption: {
    backgroundColor: 'black',
    borderRadius: 225
  }
});

export default ContextMenu;
