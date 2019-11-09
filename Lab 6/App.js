import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Card } from 'react-native-elements';

class App extends React.Component {
  render(){
    return (

      <View style={styles.container}>


        <Text style={styles.text1}>My favorite TV show is Stranger Things</Text>
        <Text style={styles.text2}>Stranger Things is full of mystery, suspense,
        and evokes nostalgia for 80's movies and tv shows. Its synthwave soundtrack reinforces all of
        the above.</Text>

        <Image
          style={{width:300, height:200}}
          source={require("./assets/strangerthings.jpg")} />

      </View>

    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1437a8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
  },
  text2: {
    color: 'white'
  }
});
