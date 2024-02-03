import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface props {
  onAccept?: () => void;
  onDecline?: () => void;
}

const CustomCallComponent = ({onAccept, onDecline}: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incoming Call</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onAccept} style={styles.acceptButton}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDecline} style={styles.declineButton}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  acceptButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  declineButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomCallComponent;
