import React, {Component} from 'react';
import {
    AppRegistry,
    View
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import ListNews from './app/components/list_news';
import Header from './app/components/header';

export default class NF_eBOT extends Component {

    constructor(){

        super();

        this.state = {
            loading: true
        };

        setTimeout(()=>{
            this.setState({
                loading: false
            });
        }, 3000);

    }

    render() {
        return (
            <View style={{flex:1}}>
                <Spinner visible={this.state.loading} overlayColor='rgba(0,0,0,0.9)' textContent={"Atualizando, aguarde..."} textStyle={{color: '#FFF'}} />
                <Header/>
                <ListNews/>
            </View>
        );
    }
}

AppRegistry.registerComponent('NF_eBOT', () => NF_eBOT);
