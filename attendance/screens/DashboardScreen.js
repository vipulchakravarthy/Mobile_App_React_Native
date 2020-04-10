import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';


class DashboardScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {user : this.props.navigation.state.params.user};
    }

    componentDidMount(){
        // const us = this.props.navigation.state.params.user;
        // console.log(this.props.navigation.state.params.user);
        // const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3NjM1YWI2NDZlMDdmZDE5OWY3NGIwMTZhOTU0MzkyMmEwY2ZmOWEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU2FpIFZpcHVsIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21CZkI4NUJ1UUZheGNxXzIzMVgyOFM2bjRKM042aGtoSEJQZVREbkxBPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2F0dGVuZGFuY2UtYzNlZDUiLCJhdWQiOiJhdHRlbmRhbmNlLWMzZWQ1IiwiYXV0aF90aW1lIjoxNTc2ODQ3MTQ1LCJ1c2VyX2lkIjoiaEJuWlg5elM1VE5sRDhCVm53akJSOXpoZEh3MSIsInN1YiI6ImhCblpYOXpTNVRObEQ4QlZud2pCUjl6aGRIdzEiLCJpYXQiOjE1NzY4NjYzOTQsImV4cCI6MTU3Njg2OTk5NCwiZW1haWwiOiJzYWl2aXB1bDE1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTA4NjU1NTE1MDAxNTQ2NjkzMjA0Il0sImVtYWlsIjpbInNhaXZpcHVsMTVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.qsfKbsnFGKc2sKkr0MYjtL6MS9vkpsTG81AyAgdbVI3wdm4w_fmiJh1wRxj_WI3poRfzSNLHQUNKROZ2TglEo8ENsImry9KVwBgPwZCFTNbeBllOeV2ihE7PtcO7c0zDNMwSeZe6ckbTnxwndzkMVA4rI4PxeqMzjzOPR0K3AR11jGOB9BxszCQYqky8WIzn8YQCCkSNr-Laj0_o0R27dfOosOedjk9cZIHufrvFnamg-9Qnq7xkEgjE6oLHOpI_liWIGEP5nR7MzpwNh7OKhEB15yjCkNmRNLxVzE-3YjY-5zGWzpzPnNiKLnCt04G6yRJF0qRi_AaSoE5pgRVn-w';
        // this.getUsersCalendarList(this.props.navigation.state.params.user.accessToken);
        this.getEvents();
    }

    // getUsersCalendarList = async (accessToken) => {
    //     let calendarsList = await fetch('https://www.googleapis.com/calenda/v3/users/me/calendarList', {
    //     headers: { Authorization: `Bearer ${accessToken}`},
    //     });
    //     console.log("calendar *** ");
    //     // console.log(accessToken);
    //     console.log(calendarsList.json());
    //     return calendarsList.json();
    // }

    getEvents(){
        const CALENDAR_ID = JSON.stringify(this.props.navigation.state.params.user.email);
        const API_KEY = JSON.stringify(this.props.navigation.state.params.user.apiKey);
        const CALENDAR_ID = "saivipul15@gmail.com";
        const API_KEY = "AIzaSyAvHPRr_v1kCvOc0CoDcyAyk_0bcuFx0pw";
        // const beginDate = moment();
        // let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;
        let url = "https://www.googleapis.com/calendar/v3/users/me/calendarList/${CALENDAR_ID}"

        this.setState({ loading: true });
        // console.log("Heyy broh in events    ", CALENDAR_ID)
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data) )
            .catch(error => console.log(error));
    }
      
    render () {
        return(
            <View style= {styles.container}>
    <Text>Logged In</Text>
            </View>
        )
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
export default DashboardScreen;