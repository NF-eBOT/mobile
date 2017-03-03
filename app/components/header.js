import React, {Component} from 'react';

import {
    Text,
    StatusBar
} from 'react-native';

import {
    Header,
    Button,
    Right,
    Body,
    Icon
} from 'native-base';

let sideMenu = null;

class _Header extends Component {

    openMenu() {
        sideMenu.openDrawer();
    };

    render() {

        sideMenu = this.props.sidemenu;

        return (


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
                    <Button onPress={this.openMenu} style={{paddingTop: 30}} transparent>
                        <Icon name='ios' style={{color: '#333'}}/>
                    </Button>
                </Right>

            </Header>


        );

    }

}

export default _Header;