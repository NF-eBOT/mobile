import React, {Component} from 'react';

import {
    Text,
    ListView,
    ScrollView,
    StyleSheet,
    View,
    Button,
    ToastAndroid,
    RefreshControl,
    Vibration,
    Linking
} from 'react-native';

import { Icon } from 'native-base';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from './../styles/list_news.styles';

class ListNews extends Component {

    constructor() {

        super();

        this.state = {
            isRefreshing: false,
            loading: true,
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        };

        this.getNews();

    }

    render() {

        return (

            <View style={styles.container}>

                <Spinner visible={this.state.loading} overlayColor='rgba(0,0,0,0.9)'
                         textContent={"Atualizando, aguarde..."} textStyle={{color: '#FFF'}}/>

                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh}
                            tintColor="#FFF"
                            title="Loading..."
                            titleColor="#333"
                            colors={['#333', '#555', '#777']}
                            progressBackgroundColor="#fff"
                        />
                    }
                    automaticallyAdjustContentInsets={false}
                    flex={1}
                    initialListSize={9}
                    dataSource={this.state.dataSource}
                    renderRow={(data) => {

                            // TODO: Refactor this !!!!
                            // data.created_at = 28/02/2017, can`t display, this date is migrate date
                            // all news before 29/02 is same date and can' display
                            if(moment(data.created_at).format('DD/MM/YYYY') == '28/02/2017')
                            {

                                return(
                                <View style={styles.item}>

                                    <Text style={styles.title}>{data.title}</Text>

                                    <Button
                                        onPress={()=>{
                                            Linking.openURL(data.scraper.page_url);
                                        }}
                                        title={data.scraper.name}
                                        color='#333'
                                    />

                                </View>
                                )

                            }

                            return(
                                <View style={styles.item}>

                                    <Text style={styles.date}>
                                        <Icon name='md-calendar' style={{color: '#CCC', fontSize: 22}}/>
                                        &nbsp;&nbsp;
                                        {moment(data.created_at).format('DD/MM/YYYY')}
                                    </Text>

                                    <Text style={styles.title}>{data.title}</Text>

                                    <Button
                                        onPress={()=>{
                                            Linking.openURL(data.scraper.page_url);
                                        }}
                                        title={data.scraper.name}
                                        color='#333'
                                    />

                                </View>
                            )

                        }}
                />

            </View>
        );

    }

    getNews() {

        return fetch('https://api.nfebot.com.br:8443/news/app/list')
            .then((response) => response.json())
            .then((responseJson) => {

                let data = JSON.parse(responseJson);

                console.log(data);

                let collection = [];

                data.map((key)=>collection.push(key));

                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    dataSource: ds.cloneWithRows(collection),
                    loading: false
                });

                return true;

            })
            .catch((error) => {
                console.error(error);
            });

    }

    onRefresh = () => {

        Vibration.vibrate([0, 100]);

        this.setState({isRefreshing: true});
        ToastAndroid.show('Atualizando, aguarde...', ToastAndroid.SHORT);

        this.getNews().then(()=>{
            this.setState({isRefreshing: false});
            ToastAndroid.show('Atualização finalizada.', ToastAndroid.SHORT);
            Vibration.vibrate([0, 100, 0, 400]);
        });

    }
}

export default ListNews;