import React, {Component} from 'react';

import {
    Text,
    ListView,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

class ListNews extends Component{

    constructor(){

        super();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        let collection = [];

        for(var i = 0; i < 50; i++) {
            collection.push(i);
        }

        this.state = {
            dataSource: ds.cloneWithRows(collection),
        };

    }

    render(){

        return(

                <ListView
                    automaticallyAdjustContentInsets={false}
                    flex={1}
                    initialListSize={9}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
        );

    }

}

export default ListNews;