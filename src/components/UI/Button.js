import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({onPress, children}) => {
    return (
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.buttonDefaultStyle}>
                <Text style={styles.textStyle}>
                    {children}
                </Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = {
    buttonContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',    
        width: '100%',
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        // alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        width: 30,
        height: 30,
    },
    buttonDefaultStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#007aff',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#959191', 
        paddingBottom: 3,
        height: 50,
        width: '100%',
        }
}

export default Button;