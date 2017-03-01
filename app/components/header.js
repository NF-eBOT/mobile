import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

class Header extends Component{

    render(){

        return(

            <View style={{padding:10, backgroundColor: '#DDD'}}>
                <Text style={{textAlign:'center', fontSize: 16, color: '#333', fontWeight: 'bold'}}>
                    Últimas 17 atualizações
                </Text>
            </View>

        );

    }

}

export default Header;