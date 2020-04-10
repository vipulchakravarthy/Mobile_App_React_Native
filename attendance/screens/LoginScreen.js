import React from 'react';
import * as Google from 'expo-google-app-auth';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';
// import { GoogleSignin } from '@react-native-community/google-signin';

class LoginScreen extends React.Component{

  googleLogin = async () => {
    try {
      const result = await Google.logInAsync({
        behavior:'web',
        androidClientId: '1033906857442-vpupv2npkrjnb9lg4a0tubduf86d2jon.apps.googleusercontent.com',
        // iosClientId: '1033906857442-di6stnoosfkpr6lfnbe90ucqdsj2u2q1.apps.googleusercontent.com'  ,
        scopes: [
        'https://www.googleapis.com/auth/calendar']
      })
      if (result.type === "success") {
        const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
           firebase.auth().signInAndRetrieveDataWithCredential(credential).then(function(result){
             console.log(result);
           });
   this.props.navigation.navigate('DashboardScreen');
 } else {
   console.log("cancelled")
 }
    } catch (e) {
      console.log("error", e)
    }
}

    signInWithGoogleAsync = async() => {
        try {
          const result = await Google.logInAsync({
           behavior:'web',
           androidClientId: '1033906857442-vpupv2npkrjnb9lg4a0tubduf86d2jon.apps.googleusercontent.com',
           // iosClientId: '1033906857442-di6stnoosfkpr6lfnbe90ucqdsj2u2q1.apps.googleusercontent.com'  ,
           scopes: [
           'https://www.googleapis.com/auth/calendar'],
           });
           if (result.type === 'success') {
            // create a new firebase credential with the token
            console.log("Result ------> " +  JSON.stringify(result));
            const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken)
            // // login with credential
            const currentUser = await firebase.auth().signInWithCredential(credential);
              
            console.log("login screen--------------------    " + JSON.stringify(currentUser.toJSON()));
            this.props.navigation.navigate('DashboardScreen');
           } else {
            return { cancelled: true };
           }
         } catch (e) {
           return { error: true };
         }
      }
      
      render(){
        return(
         <View style = {styles.container}>
           <Button title="Sign In" onPress = {() => this.signInWithGoogleAsync()} />
         </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default LoginScreen;