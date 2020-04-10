import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

class LoadingScreen extends React.Component{

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        // console.log(user);
        this.props.navigation.navigate('DashboardScreen', {user});
      }else{
        this.props.navigation.navigate('LoginScreen');
      }
    })
  }
    // componentDidMount() {
    // this.checkIfLoggedIn();
    // }

    // checkIfLoggedIn = () =>{
    // var user = firebase.auth().currentUser
    //     if(user) {
    //     
    //     } else{
    //    
    //     }
    // };
    render(){
    return(<View style={styles.container}>
        <ActivityIndicator size="large"/>
        </View>
        );
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});