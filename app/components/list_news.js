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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#111',
        paddingTop: 5
    },
    item: {
        marginBottom: 10,
        padding: 15,
        backgroundColor: '#222'
    },
    date: {
        color: '#CCC',
        fontSize: 13,
        fontWeight: 'bold'
    },
    title: {
        color: '#CCC',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    }
});

class ListNews extends Component {

    constructor() {

        super();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        let collection = [];

        collection.push({
            title: 'Arquivo de registros da ECF - Leiaute 3',
            date: '28/02/2017',
            url: 'http://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=tW+YMyk/50s=',
            scraper: 'nfe.fazenda.gov.br'
        });

        for(var i = 0; i < 17; i++) {
            collection.push({
                title: 'EFD ICMS IPI - Contribuintes do IPI - Distrito Federal',
                date: '28/02/2017',
                url: 'http://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=tW+YMyk/50s=',
                scraper: 'nfe.fazenda.gov.br'
            });
        }

        this.state = {
            isRefreshing: false,
            dataSource: ds.cloneWithRows(collection)
        };

    }

    open_url(url) {
        Linking.openURL(url);
    }

    render() {

        return (

            <View style={styles.container}>

                <ListView
                    refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
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

                            return(
                                <View style={styles.item}>

                                    <Text style={styles.date}>{data.date}</Text>
                                    <Text style={styles.title}>{data.title}</Text>

                                    <Button
                                        onPress={()=>{
                                            this.open_url(data.url)
                                        }}
                                        title={data.scraper}
                                        color='#333'
                                    />

                                </View>
                            )

                        }}
                />

            </View>
        );

    }

    button_link(){

        //ToastAndroid.show('any', ToastAndroid.SHORT);

    }

    _onRefresh = () => {

        Vibration.vibrate([0, 100]);

        this.setState({isRefreshing: true});
        ToastAndroid.show('Atualizando, aguarde...', ToastAndroid.SHORT);

        setTimeout(()=>{
            this.setState({isRefreshing: false});
            ToastAndroid.show('Atualização finalizada.', ToastAndroid.SHORT);
            Vibration.vibrate([0, 100, 0, 400]);
        }, 3000);

    }

}

export default ListNews;