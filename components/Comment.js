import React from 'react';
import {View, Text ,StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';



const Comment = ({src , text, name, like, reply}) => {

    let imgPath = src;
    let likes = like=="" ? 'no likes' : like+' likes';
    let replies = reply=="" ? 'no replies' : reply+' replies';
    let likeNReply = "";
    if(likes=='no likes' && replies=='no replies') {
        likeNReply = "";
    } else {
        likeNReply = likes + ' • ' + replies;
    }

    return (
        <View style={styles.commentWrapper}>

        <Image source={{uri : imgPath}} style={styles.comImg} />

            <View style={styles.commentText}>
                <Text style ={styles.personName}>{name}</Text>
                <Text style={styles.commentPerson}>{text}</Text>
                <Text style={styles.likesAndReplies}>{likeNReply}</Text>
            </View>
            <Ionicons
            testID="heart"
            name="heart-outline"
            color="rgba(255, 255, 255, 0.55)"
            size={30}
            style={{marginLeft: 80}}
            />




        </View>

    );


}

const styles = StyleSheet.create({

    commentWrapper: {
        height: 50,
        width: 300,
        flexDirection: 'row',
        marginTop: 40,

    },
    comImg: {
        height: 45,
        width: 45
    },
    commentText: {
        marginLeft: 30,
        width: 150,


    },
    personName: {
        color: '#aaa'
    },
    commentPerson: {
        color:  '#eee',
        marginTop: 6

    },
    likesAndReplies: {
        color: "#aaa",
        marginTop: 4
    }


})

export default Comment;