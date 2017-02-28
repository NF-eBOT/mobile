import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    Image
} from 'react-native';

import images from './app/config/images';

export default class NF_eBOT extends Component {

    render() {
        return (
            <View style={styles.container}>

                <Image
                    style={{width: 50, height: 50}}
                    source={images.logo}
                />

                <Text style={styles.welcome}>
                    Welcome to NF-eBOT APP
                </Text>

            </View>
        );
    }

}

ToastAndroid.show('Boa noite !', ToastAndroid.LONG);

console.log(Date.now());

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

AppRegistry.registerComponent('NF_eBOT', () => NF_eBOT);
