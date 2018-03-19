import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        paddingTop: 3,
        padding: 1,
        justifyContent: 'flex-start', //push items to the left
        flexDirection: 'row',  //left to right
        borderColor: '#ddd',
        position: 'relative',
        width: '100%',
        height: 95,
    }
});

export default CardSection;