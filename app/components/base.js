import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    DrawerLayoutAndroid,
    StyleSheet,
    Image,
    Button,
    StatusBar,
    Linking
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import ListNews from './list_news';
import _Header from './header';
import images from './../config/images';

const styles = StyleSheet.create({
    sidemenu_container: {
        flex: 1,
        backgroundColor: '#DDD'
    },
    sidemenu_container_branding: {
        backgroundColor: '#F1F0F0',
        paddingBottom: 20,
        paddingTop: 20
    },
    sidemenu_container_logo: {
        width: 120,
        height: 120,
        marginLeft: 40
    },
    sidemenu_container_letter: {
        width: 163,
        height: 24,
        marginLeft: 18.5,
        marginTop: 20
    },
    sidemenu_container_items: {
        padding: 20
    },
    sidemenu_container_buttons_container: {
        marginBottom: 10
    }
});

class Base extends Component {

    constructor() {

        super();

        this.state = {loading: true};

        setTimeout(() => {
            this.setState({loading: false});
        }, 3000);

    }

    open_url(url) {
        Linking.openURL(url);
    }

    render() {

        const renderNavigationView = (
            <View style={styles.sidemenu_container}>

                <View style={styles.sidemenu_container_branding}>
                    <Image
                        style={styles.sidemenu_container_logo}
                        source={images.logo}
                    />

                    <Image
                        style={styles.sidemenu_container_letter}
                        source={images.letter}
                    />
                </View>

                <View style={styles.sidemenu_container_items}>

                    <View style={styles.sidemenu_container_buttons_container}>
                        <Button
                            title='sobre'
                            color='#333'
                            onPress={()=>{
                                this.open_url('https://nfebot.com.br')
                            }}
                        />
                    </View>

                    <View style={styles.sidemenu_container_buttons_container}>
                        <Button
                            title='github'
                            color='#333'
                            onPress={()=>{
                                this.open_url('https://github.com/NF-eBOT')
                            }}
                        />
                    </View>

                </View>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                drawerWidth={200}
                ref={'DRAWER_REF'}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={()=>renderNavigationView}>

                <View style={{flex:1}}>
                    <Spinner visible={this.state.loading} overlayColor='rgba(0,0,0,0.9)'
                             textContent={"Atualizando, aguarde..."} textStyle={{color: '#FFF'}}/>
                    <_Header sidemenu={this.refs['DRAWER_REF']}/>
                    <ListNews/>
                </View>

            </DrawerLayoutAndroid>
        );

    }
}

export default Base;