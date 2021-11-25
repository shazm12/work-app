import { StatusBar } from 'expo-status-bar';
import React,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image,KeyboardAvoidingView,TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Comment from './components/Comment';
import { LinearGradient } from "expo-linear-gradient";
import axios from 'axios';
import {app,db,docs,addDoc,collection} from './firebase';




export default function App() {


  const [comment,setComment] = useState("");
  const [allcomments,setAllComments] = useState([]);

  const addComment = async() => {

    try {
      const docRef = await addDoc(collection(db, "comments"), {
        name: "Shamik Bera",
        comment: comment 
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }





  useEffect(() => {
    
    console.log(docs);

    return null;
  }, [])



  return (
    <View style={styles.container}>

      {/* Top header with img */}
      <LinearGradient
      colors={["#FFA9F6", "#ECBEFE","#D39AFF","#be92ed"]}
      style={styles.headWrapper}
      >
        {/* Top Nav Bar */}
        <View style={styles.topNavWrapper}>
          <Ionicons
          testID="backBtn"
          name="arrow-back"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{backgroundColor: 'transparent'}}
          />
          <Image source={require('./assets/topimg1.png')} style={styles.topImg} />
          <Ionicons
          testID="optBtn"
          name="list"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{backgroundColor: 'transparent'}}
          />
        </View>

        <Image source={require('./assets/himg.png')} style={styles.headerImg} />
        
        {/* Likes, Comment and Archive */}
        <View style={styles.postBarWrapper}>
          <Ionicons
          testID="heart"
          name="heart-outline"
          color="rgba(61, 1, 121, 0.35)"
          size={30}
          style={{}}
          />
          <Text style={styles.postText}>2,203</Text>
          <Ionicons
          testID="comment"
          name="chatbubbles-outline"
          color="rgba(61, 1, 121, 0.35)"
          size={30}
          style={{marginLeft: 30}}
          />
          <Text style={styles.postText}>15</Text>
          <Ionicons
          testID="archive"
          name="archive-outline"
          color="rgba(61, 1, 121, 0.35)"
          size={28}
          style={{marginLeft: 130}}
          />

        </View>
      </LinearGradient>

      {/* Comment Section */}
      <View style={styles.commentSecWrapper}>

        <Comment src={"https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_640.png"} text={"Awsome!"} name={"Janet Martin"} like={""} reply={""} />
        <Comment src={"https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"} text={"Great!"} name={"Zarela Reed"} like={"3"} reply={""} />
      </View>

      {/* Commment Text Field */}
      <KeyboardAvoidingView
      behaviour={Platform.OS == "ios" ? "padding" : " height"}
      style = {styles.writetextWrapper}
      >
      <Image source={require('./assets/compic.png')} style={styles.comPic} />
      <TextInput autoFocus={true} style={styles.input} onChangeText={(comment) => setComment(comment)} placeholder={"Write a Comment..."}></TextInput>
      <Ionicons
      testID="send"
      name="send"
      color="rgba(0, 0, 0, 0.75)"
      size={28}
      style={{marginLeft: 76 , marginTop: 10}}
      onPress={addComment}
      />


    </KeyboardAvoidingView>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headWrapper: {
    height: 530,
    width: 400,
    backgroundColor: '#FFA9F6',
    borderRadius: 32,
    elevation: 10,
    
  },
  headerImg : {
    height: 300,
    width: 350,
    marginTop: 60,
    marginLeft: 20,
    borderRadius: 25,
    shadowColor: '#aaa',
    shadowRadius: 40,
    shadowOpacity: 0.8

  },
  topNavWrapper: {

    marginTop: 65,
    marginLeft: 20,
    height : 20,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  backIcon: {
    color: '#fff',
  },
  topImg: {
    height: 35,
    width: 35,
  },
  postBarWrapper: {
    height: 30,
    width: 350,
    marginLeft: 30,
    marginTop: 25,
    flexDirection: 'row'
  },
  postText: {
    color: '#fff',
    marginTop: 5,
    marginLeft: 11,
    fontSize: 15,
    fontWeight: 'bold',
    
  },
  commentSecWrapper: {

    marginLeft: 30
  },
  writetextWrapper: {
    height: 50,
    width: 350,
    backgroundColor: '#fff',
    marginTop: 60,
    marginLeft: 25,
    flexDirection: 'row',
    borderRadius: 25,
    elevation: 5


  },
  comPic: {
    height: 38,
    width: 38,
    marginLeft: 10,
    marginTop: 6,

  },
  input: {
    marginLeft: 44,
    color: '#bbb',
    fontWeight: 'bold',
    fontSize: 12,
    width: 140
  }

});
