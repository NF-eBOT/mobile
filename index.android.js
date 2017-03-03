import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';

import Base from './app/components/base';

export default class NF_eBOT extends Component {

    render() {
        return (
            <Base/>
        );
    }
}

AppRegistry.registerComponent('NF_eBOT', () => NF_eBOT);
