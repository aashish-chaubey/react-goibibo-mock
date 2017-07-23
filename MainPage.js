import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
  Image,
  DrawerLayoutAndroid,
  TextInput,
  TouchableOpacity,
	Navigator,
  Alert
} from 'react-native';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

import Button from 'react-native-button';

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Where do you want to GO?'
    };
  }

  busButtonPress = () => {
    this.props.navigator.push({
      id: 'Bus',
    });
  };

  render() {
		return(
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
          <Image
            style = {{height: 84, width: 156}} 
            source = {require('./ic_splash.png')} />
          
          <Text>Bangalore</Text>
          
          <TextInput
            underlineColorAndroid = 'rgba(0,0,0,0)'
            style = {{margin: 30, padding: 10, width: 360, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText = {(text) => this.setState({text})}
            onFocus = {() => this.setState({text: ''})}
            value = {this.state.text} />

          <Text>Quick Book</Text>

          <View
            style = {{flexDirection: 'row', marginRight: 10}} >

            <TouchableOpacity
              style = {styles.button}
              onPress = {this.busButtonPress} >
              <Text>
                Bus Tickets
              </Text>
            </TouchableOpacity>

            <Button
              style = {styles.button}
              onPress = {() => {}} >
              Flight Tickets
            </Button>

            <Button
              style = {styles.button}
              onPress = {() => {}} >
              Hotels
            </Button>

          </View>          
          
          <View
            style = {{alignItems: 'center', marginTop: 20}}>

            <Text
              style = {{fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>Offers & Promotions</Text>

              <View
                style = {{flexDirection: 'row'}}>

                <Card
                  style = {styles.card} >
                  <CardTitle>
                    <Text 
                      style = {styles.cardTitle} >
                      Jet gets you
                    </Text>
                  </CardTitle>
                  <CardContent>
                    <Text
                     style = {styles.cardContent} >
                          Fly with Jet @ Int'l{"\n"}
                          Upto 30% discount! 
                    </Text>
                  </CardContent>
                  <CardAction>
                    <Button
                      style = {styles.cardButton}
                      onPress = {() => {}} >
                      Button
                    </Button>
                    <Button
                      style = {styles.cardButton}
                      onPress = {() => {}} >
                      Button
                    </Button>
                  </CardAction>
                </Card>

                <Card
                style = {styles.card} >
                <CardTitle
                  style = {styles.cardTitle} >
                  <Text
                    style = {styles.cardTitle} >
                    Fly with Qatar
                  </Text>
                </CardTitle>
                <CardContent>
                  <Text>Stand a chance to{"\n"}
                        win Free Tickets to{"\n"}
                        Europe
                  </Text>
                </CardContent>
                <CardAction>
                  <Button
                    style = {styles.cardButton}
                    onPress = {() => {}} >
                    Button
                  </Button>
                  <Button
                    style = {styles.cardButton}
                    onPress = {() => {}} >
                    Button
                  </Button>
                </CardAction>
              </Card>

            </View>

            <View
              style = {{flexDirection: 'row'}}>

              <Card
                style = {styles.card}>
                <CardTitle>
                  <Text
                  style = {styles.cardTitle} >
                    Jet gets you
                  </Text>
                  </CardTitle>
                  <CardContent>
                    <Text
                      style = {styles.cardContent} >
                        Fly with Jet @ Int'l{"\n"}
                        Upto 30% discount! 
                    </Text>
                  </CardContent>
                  <CardAction>
                    <Button
                      style = {styles.cardButton}
                      onPress = {() => {}} >
                      Button
                    </Button>
                    <Button
                      style = {styles.cardButton}
                      onPress = {() => {}} >
                      Button
                    </Button>
                  </CardAction>
                </Card>

                <Card
                style = {styles.card} >
                <CardTitle
                  style = {styles.cardTitle} >
                  <Text
                    style = {styles.cardTitle} >
                    Fly with Qatar
                  </Text>
                </CardTitle>
                <CardContent>
                  <Text>Stand a chance to{"\n"}
                        win Free Tickets to{"\n"}
                        Europe
                  </Text>
                </CardContent>
                <CardAction>
                  <Button
                    style = {styles.cardButton}
                    onPress = {() => {Alert.alert("Button pressed!")}} >
                    Button
                  </Button>
                  <Button
                    style = {styles.cardButton}
                    onPress = {() => {}} >
                    Button
                  </Button>
                </CardAction>
              </Card>
              </View>
            </View>

        </View>
		);
	}
}

var styles = StyleSheet.create({

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  card: {
    elevation: 3,
    padding: 10,
    borderWidth: 2,
    width: 280,
    height: 300
  },

  cardTitle: {
    height: 50,
    color: 'orange',
    fontSize: 16,
  },

  cardContent: {
    fontSize: 14,
  },

  cardButton: {
    marginRight: 10,
  },

  button: {
    marginTop: 20,
    marginBottom: 10,
    marginRight: 20
  },

});

module.exports = MainPage;