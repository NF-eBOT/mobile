import React, {Component} from 'react';
import {
    AppRegistry,
    //ToastAndroid
} from 'react-native';

import ListNews from './app/components/list_news';

export default class NF_eBOT extends Component {

    render() {
        return (
            <ListNews/>
        );
    }

}

//ToastAndroid.show('Boa noite !', ToastAndroid.LONG);

AppRegistry.registerComponent('NF_eBOT', () => NF_eBOT);
