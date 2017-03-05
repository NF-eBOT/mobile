import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    DrawerLayoutAndroid,
    StyleSheet,
    Image,
    StatusBar,
    Button,
    Linking
} from 'react-native';

import {
    Header,
    Right,
    Button as _Button,
    Body,
    Icon
} from 'native-base';

import ListNews from './list_news';
import images from './../config/images';

import styles from './../styles/base.styles';

class Base extends Component {

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
                                Linking.openURL('https://nfebot.com.br');
                            }}
                        />
                    </View>

                    <View style={styles.sidemenu_container_buttons_container}>
                        <Button
                            title='github'
                            color='#333'
                            onPress={()=>{
                                Linking.openURL('https://github.com/NF-eBOT');
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

                    <Header style={{padding:10, backgroundColor: '#DDD', height: 50}}>

                        <StatusBar
                            backgroundColor="#333"
                            barStyle="light-content"
                        />

                        <Body>
                        <Text style={{color: '#333', fontSize: 15, fontWeight: 'bold' }}>
                            Últimas 17 atualizações
                        </Text>
                        </Body>

                        <Right>
                            <_Button onPress={()=>{ this.refs['DRAWER_REF'].openDrawer(); }} style={{paddingTop: 30}} transparent>
                                <Icon name='md-menu' style={{color: '#333', marginTop: 5}}/>
                            </_Button>
                        </Right>

                    </Header>

                    <ListNews/>

                </View>

            </DrawerLayoutAndroid>
        );
    }
}

export default Base;