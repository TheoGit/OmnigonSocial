
import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View
} from 'react-native';

import Card from '../components/UI/Card';
import CardSection from  '../components/UI/CardSection';
import * as utils from '../utils';

const PostDetail = ({post}) => {
        return (
            <Card>
                <CardSection>
                    <View>
                        <Text>Date: {utils.getDateTime(post.created_at)}</Text>
                        <Text style={{marginBottom: 3}}>User: <Text style={styles.nameStyle}>{post.user.name}</Text></Text>
                        <ScrollView>
                            <Text>{post.text}</Text>
                        </ScrollView>
                    </View>
                </CardSection>    
            </Card>
        );
}

export default PostDetail;

const styles = StyleSheet.create({
    nameStyle : {
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
});