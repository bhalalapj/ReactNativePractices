import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, Image, TextInput, StyleSheet, ToastAndroid, Button } from 'react-native';
import { Card, CardItem } from 'native-base';

const style = StyleSheet.create({
    txtBox: {
        shadowColor: '#CCC',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        width: 180,
        borderColor: 'blue',
        borderWidth: 1,
        height: 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    }
});

;
class MyNavScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };

    constructor(props) {
        super(props)

        this.state = {
            name: "Hello ! World"
        }
    }
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    <Image style={{ width: 100, height: 100, alignContent: 'center' }} source={require('../resources/img/icons-avatar-user-login.png')} />
                    <Card >
                        <CardItem>
                            <TextInput style={style.txtBox}
                                value={this.state.name}
                                onChangeText={(text) => this.setState({ name: text })}></TextInput>
                        </CardItem>
                        <CardItem>
                            <Text>{this.state.name}</Text>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Text>This is a sample Card layout</Text>
                        </CardItem>
                    </Card>
                    <View>
                        <Button onPress={() => { ToastAndroid.show(this.state.name, ToastAndroid.SHORT) }} title="Press Me" />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default MyNavScreen;