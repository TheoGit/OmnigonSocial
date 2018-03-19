import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

const ConfigSection = (props) => {
    return (
        <View style={styles.inputContainer}>
            {props.children}
        </View>
    );

}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        paddingTop: 25,
        marginLeft: 15,
      },
    });

export default ConfigSection;