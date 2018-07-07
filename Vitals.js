/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, ScrollView, Slider} from 'react-native';
import { Provider as PaperProvider, Text, HelperText, ListSection, ListItem, Divider, Title } from 'react-native-paper';
import Data from './data.json';
import WeightSelector from './WeightSelector';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};
type Developmental = {
  heartRate: string,
  respiratoryRate: string,
  systolicBloodPressure: string,
  age: string,
  length: string,
  etSize: string,
  etDepth: string,
  laryngoscopeBlade: string,
};
type State = {
  weight: number,
}

export default class Age extends Component<Props, State> {
  state: any = {
    weight: 2,
  };
  currentValue = (weight: number): Developmental => {
    return Data.broselow.find((dosingColor) => dosingColor.weight > weight)
  }

  render() {
    return (
      <PaperProvider>
        <ScrollView>
          <ListSection>
            <ListItem title={this.currentValue(this.state.weight).age} description='Age' icon={({ size, color }) => (<Icon name='timelapse' size={size} color={color} />)} />
            <ListItem title={this.currentValue(this.state.weight).length} description='Length' icon={({ size, color }) => (<Icon name='nature-people' size={size} color={color} />)} />
            <ListItem title={this.currentValue(this.state.weight).systolicBloodPressure} description='Systolic blood pressure' icon={({ size, color }) => (<Icon name='heart-box' size={size} color={color} />)} />
            <ListItem title={this.currentValue(this.state.weight).heartRate} description='Heart rate' icon={({ size, color }) => (<Icon name='heart-pulse' size={size} color={color} />)} />
            <ListItem title={this.currentValue(this.state.weight).respiratoryRate} description='Respiratory rate' icon={({ size, color }) => (<Icon name='weather-windy' size={size} color={color} />)} />
            <ListItem title={this.currentValue(this.state.weight).etSize} description='Endotracheal tube size' icon={({ size, color }) => (<Icon name='ruler' size={size} color={color} />)} />
            <ListItem title={this.currentValue(this.state.weight).etDepth} description='Endotracheal tube depth' icon={({ size, color }) => (<Icon name='download' size={size} color={color} />)} />
            <ListItem title={this.currentValue(this.state.weight).laryngoscopeBlade} description='Laryngoscope blade size' icon={({ size, color }) => (<Icon name='hospital' size={size} color={color} />)} />
          </ListSection>
        </ScrollView>
        <WeightSelector onValueChange={(value) => this.setState({weight: value})} />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    padding: 16,
  },
  bottomSelector: {
    padding: 16,
  },
  slider: {
    paddingTop: 16,
  },
});
