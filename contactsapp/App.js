import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

constructor(props) {
  super(props);

  this.state={"name": "", "number": "", "count": ""};
  this.state={contacts: []};
  this.state={profile: ""};
}

//
postData() {
  fetch("https://apiexample.website/contacts/add", {
      "method": "POST",
      "headers": {
        "api": "walker",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": this.state.name,
        "number": this.state.number
      })
    })
    .then(response => response.json() )
    .then((data) => console.log(data) )
    .catch(err => {
      console.log(err);
    });

  }

getProfile(){
  fetch("https://apiexample.website/profile", {
    method: 'GET',
    headers: {
      "API": "walker"
    }
  })
  .then((response) => response.json())
  .then((responseJson) => {
    alert(JSON.stringify(responseJson));

    console.log(responseJson);
  })
  .catch((error) => {
    alert(JSON.stringify(error));
    console.log(error);
  });
}



renderItem = ({ item }) => {
  return (


  <View>
  <Text style={styles.contacts}>
    {item.name}
    {item.number}
  </Text>
  <Button title="remove" onPress={() => this.remove()} />
  </View>
)
}



remove(){
  fetch("https://apiexample.website/contacts/remove", {
    method: 'POST',
    "headers": {
      "API": "walker",
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  })
  .then(response => response.json() )
  .then((data) => console.log(data) )
  .catch(err => {
    console.log(err);
  });

}



componentDidMount() {

  fetch("https://apiexample.website/contacts",
  {
    "method": "GET",
    "headers": {"API": "walker"}})
  .then((response) => response.json())
  .then((data) => {
    this.setState({
      contacts: data.contacts
    })
  })
  .catch((error) => {
    console.log(error)
  })
}




render() {
  return (
    <View style={styles.container}>


    <TouchableOpacity onPress={this.getProfile}>
    <Text
    style={styles.profile}>
    Profile
    </Text>
    </TouchableOpacity>

    <Text>
    Add a new contact:
    </Text>
      <TextInput
      style={{ height: 40, width:150, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white' }}
      onChangeText={(text) => this.setState({"name": text})}
    />

    <TextInput
    style={{ height: 40, width:150, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white' }}
    onChangeText={(text) => this.setState({"number": text})}
  />

  <Button
  title="SUBMIT"
  onPress={() => this.postData()}
  />

  <FlatList
    data={this.state.contacts}
    renderItem={this.renderItem}
    keyExtractor={(item, index) => index}
  />


    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9999ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  contacts: {
    color: 'blue',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profile: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
