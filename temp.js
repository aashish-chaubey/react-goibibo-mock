'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Text, ListView, ScrollView} from 'react-native';

class BusList extends Component {

	constructor(props) {
		super(props);
		var	ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged});
		this.state = {
			dataSource: ds.cloneWithRows([])
		};
	};
	
  MainView = React.createClass ({
		getInitialState() {
			return {
	    		dataSource: ds.cloneWithRows(['row 1', 'row 2']),
			}
		},

		componentDidMount() {
			this.loadJsonData();
		},

		loadJsonData() {
			fetch('http://35.164.238.231:3003/api/goibibo/buses?source=BOM&destination=DEL&dateofdeparture=20170305', {
		   		method: 'get',
	     		dataType: 'json',
	      		headers: {
	        		'Accept': 'application/json',
	        		'Content-Type': 'application/json'
	      		}
	   	})
		  .then((response) => {
		   	response.json()
		  })
		  .then((responseJSON) => {
		   	for(var i = 0; i < responseJSON.length; i++) {
		      this.setState({dataSource: this.state.dataSource.cloneWithRows(responseJSON)});
		    }
		  })
		  .catch((error) => {
		    console.warn(error);
		  });
		},

		render() {
			return(
				<View>
					<ListView 
						dataSource = {this.state.dataSource}
						renderRow = {(rowData) => <Text>{rowData}</Text>} />
				</View>
			);
		}
	});

	render(rowData) {
		return(
			<ScrollView>
				<View name="buses">
					<Text>{rowData.data.onwardsflights.fare.totalfare}</Text>
					<Text>{rowData.data.onwardsflights.duration}</Text>
				</View>
			</ScrollView>
		);
	}
}

module.exports = BusList;



