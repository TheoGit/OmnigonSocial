/**
 * Created by admin on 12/8/17.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Card = (props) => {
        return (
            <View style={styles.containerStyle}>
                {props.children}
            </View>
        );

}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 1,
    },
    textStyle: {
        fontSize: 10,
        backgroundColor: '#F8F8F8',
        textAlign: 'left',
    },
});

export default Card;