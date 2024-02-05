import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function Timer({ Time }) {
    const [currentTime, setCurrentTime] = useState(Time);
  
    
        useEffect(() => {
            setCurrentTime(Time);
            
          }, [Time]);
  
     

    const formattedTime = `${Math.floor(currentTime / 60)
      .toString()
      .padStart(2, '0')}:${(currentTime % 60).toString().padStart(2, '0')}`;
  
    return (
      <View style={styles.container}>
        <Text style={styles.time}>{formattedTime}</Text>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius: 15,
    width: 300,
    height: 150,
    paddingStart: 15,

    },

    time: {
fontSize: 50,
textAlignVertical: "center",
textAlign: "center",
paddingTop: 20,
fontWeight: 'bold',


    }
  })