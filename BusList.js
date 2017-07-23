'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Text, ListView, ScrollView} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

class BusList extends Component {

	constructor() {
    super();
    this.state = {
      dataSource: ds.cloneWithRows([]),
      getData: []
    };
   // this.loadJSONData();
  }

componentWillMount(){
 this.loadJSONData();
        
        }
	componentDidMount() {
	//this.loadJSONData();
  //       console.log('data #######', object)
//hi, why setstate is not working ? did you do something with the code? 
	}

	loadJSONData() {
	 fetch('http://35.164.238.231:3003/api/goibibo/buses?source=BOM&destination=DEL&dateofdeparture=20170305')
		  .then(function(response){
		   this.setState({getData: response.json()})	  
		})
		
// 		  	console.log('Inside the loadJSONData method',response)
// 		  	//response in lint and in console are not in same format
// 		  //	console.log('data is @@@@@@@@@@',JSON.parse(response));
// //can you print the json in the json format in some website :sure, the lint one are you asking for?yes: cool 
// 		  	// this.setState({getData: response})
// 		  	var dataOfList = JSON.stringify(response)
// 		  	this.setState({dataSource: ds.cloneWithRows(dataOfList.data.onwardflights.BPPrims.list)})
// 		   	return response.json()
// 		   })
// 		  // Is it because we are not setting up the source here in responseJSON?
// 		   .then((responseJSON) => {
// 				console.log(responseJSON)
// 		  //     return this.setState({dataSource: this.state.dataSource.cloneWithRows(responseJSON)});
// 		   })
// 		  .catch((error) => {
// 		    console.warn(error);
// 		  });
	}

	renderRow(rowData) {
		return (
			<View>
				<Text>{rowData.origin}</Text>
			</View>
		);
	}

	render() {
		console.log('data #######', this.state.getData)
		//console.log('data inside dataSource is ', this.state.dataSource)
    return (
    	<View>
    		<ListView
    			dataSource = {this.state.dataSource}
    			enableEmptySections = {true}
    			renderRow = {(rowData) => <Text>{rowData.BPLocation}</Text>}	
    		/>
    	</View>
    );
  }
}

module.exports = BusList;