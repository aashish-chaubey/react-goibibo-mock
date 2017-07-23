'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';
import RadioButton from 'radio-button-react-native';
import {Calendar} from 'react-native-day-picker';

const styles = StyleSheet.create({

	container: {
		flex: 1,
		paddingTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5F5F5'
	},

	radioButton: {
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'center',
		borderWidth: 0.25,
		height: 65,
		alignItems: 'center'
	},

	radioText: {
		fontSize: 20,
		justifyContent: 'center',
		fontWeight: 'bold',
	},

	travelPoints: {
		paddingLeft: 10,
		paddingTop: 3,
		fontSize: 16,
	},

	button: {
		width: 10,
		alignItems: 'center',
		paddingTop: 10,
		height: 30
	},

});

class Bus extends Component {

	constructor (props){
	    super(props);
      	this.state = {
      		from_text: '',
      		to_text: '',
            value: 0
        }
    }

	handleOnPress(value){
    	this.setState({value:value})
	}

	busSearch = () => {
		this.props.navigator.push({
			id: 'BusList'
		});
	};

    render() {
        return(
        	<View>
            	
            	<View style={styles.radioButton} >
                	<RadioButton currentValue={this.state.value} value={0} onPress={this.handleOnPress.bind(this)}>
                		<Text style={styles.radioText} >  One Way       </Text>
                	</RadioButton>
                	<RadioButton currentValue={this.state.value} value={1} onPress={this.handleOnPress.bind(this)}>
                		<Text style={styles.radioText} >  Round Trip</Text>
                	</RadioButton>
            	</View>
            	
            	<View style={{borderWidth: 0.25, paddingBottom: 5}}>
            		<Text style = {styles.travelPoints}>From</Text>
            		<TextInput 
            			style = {
            				{
            					fontSize: 30, 
            					fontWeight: 'bold', 
            					paddingLeft: 10
            				}
            			} 
            			onFocus = {() => this.setState({text: ''})}
            			onChangeText = {(text) => this.setState({from_text})}
            			value = {this.state.from_text} >
            			Bangalore
            		</TextInput>
            	</View>
            	
            	<View style={{borderWidth: 0.25, paddingBottom: 5}}>
            		<Text style = {styles.travelPoints}>To</Text>
            		<TextInput
            			style = {
            				{
            					fontSize: 30, 
            					fontWeight: 'bold', 
            					paddingLeft: 10
            				}
            			} 
            			onFocus = {() => this.setState({text: ''})}
            			onChangeText = {(text) => this.setState({to_text})}
            			value = {this.state.to_text} >
            			Mumbai
            		</TextInput>
            	</View>
            	
            	<View style={{borderWidth: 0.25, paddingBottom: 15}}>
            		<Text style = {styles.travelPoints}>OnWards</Text>
            		<Text style = {{fontSize: 20, fontWeight: 'bold', paddingLeft: 10}}>04 Feb' 17</Text>
            		<Text style = {{fontSize: 18, fontWeight: 'bold', paddingLeft: 10}}>(today)</Text>
            	</View>
            	
            	<Button style={styles.button} title="Search" onPress = {this.busSearch} />
            
            </View>
        );
    }
}

class DayPicker extends Component {
	render(props) {
		const from = new Date();
		from.setDate(from.getDate() - 16);
		const to = new Date();
		let startDate = new Date();
		startDate.setMonth(startDate.getMonth() + 1);
		return(
			<View style={styles.container}>
      			<Calendar
        			monthsCount={24}
        			startFormMonday={true}
        			startDate={startDate}
        			selectFrom={from}
        			selectTo={to}
        			width={350}
        			onSelectionChange={
        				(current, previous) => {
        					console.log(current, previous)
        				}
        			}
      			/>
    		</View>
		);
	}
}

module.exports = Bus;