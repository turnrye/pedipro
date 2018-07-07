/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, View, ScrollView, ImageBackground} from 'react-native';
import { Provider as PaperProvider, Text, Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction, Title, FABGroup, Card, CardContent, Paragraph } from 'react-native-paper';
import data from './data.json';
import Table from './Table';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};
type Developmental = {
  backgroundColor: string,
  color: string,
  key: string,
  weight: string,
  bp: string,
  pr: string,
  resp: string,
  etSize: string,
  etLength: string,
  laryngoscope: string,
};
type State = {
  open: boolean
}

export default class Home extends Component<Props, State> {
  state: any = {
    open: false,
  };

  render() {
    return (
      <PaperProvider>
        <ScrollView>
          <ImageBackground style={{width: '100%'}} source={require('./img/emergency.jpg')}>
            <Title style={{color: '#fff', paddingVertical: 24, paddingHorizontal: 12, textAlign: 'center'}}>Pedi Pro</Title>
            <Text style={{color: '#fff', paddingHorizontal: 12, paddingBottom: 24, textAlign: 'center'}}>Press the action button below to get started with details by age or weight.</Text>
          </ImageBackground>
          <Card>
            <CardContent>
              <Title>APGAR Score</Title>
              <Table headers={data.apgar.headers} rows={data.apgar.rows} />
            </CardContent>
          </Card>
        </ScrollView>
        <FABGroup
          open={this.state.open}
          icon={'search'}
          actions={[
          { icon: ({ size, color }) => (<Icon name='needle' size={size} color={color} />), label: 'Dosing', onPress: () => {this.props.navigation.navigate('Dosing'); this.setState({open: false})} },
            { icon: ({ size, color }) => (<Icon name='clipboard-pulse' size={size} color={color} />), label: 'Vitals', onPress: () => {this.props.navigation.navigate('Vitals'); this.setState({open: false})} },
          ]}
          onStateChange={({ open }) => this.setState({ open: open })}
        />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  tableHeader: {
  },
  tableHeaderText: {
    color: '#999',
    fontWeight: '600'
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#aaa',
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  tableTextFirstColumn: {
    borderRightWidth: 0.5,
    borderRightColor: '#aaa',
  },
  tableRowLast: {
    borderBottomWidth: 0,
    marginBottom: -16,
  },
  tableText: {
    flex: 1,
    padding: 6,
  },
});
