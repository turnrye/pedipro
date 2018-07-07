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
import Table from './Table';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
    onValueChange: any,
};
type DosingData = {
  backgroundColor: string,
  color: string,
  weight: number,
};
type State = {
  weight: number,
}

export default class WeightSelector extends Component<Props, State> {
  state: any = {
    weight: 2,
  };
  currentBroselowColor = (weight: number): DosingData => {
    return Data.broselow.find((dosingColor) => dosingColor.weight > weight)
  }
  newWeight = (weight: number) => {
    this.setState({weight: weight});
    this.props.onValueChange(weight);
  }

  render() {
    return (
        <View>
            <Title style={[styles.title, {backgroundColor: this.currentBroselowColor(this.state.weight).backgroundColor, color: this.currentBroselowColor(this.state.weight).color}]}>{this.state.weight} kg Patient</Title>
            <View style={styles.bottomSelector}>
                <Slider maximumValue={36} minimumValue={2} step={1} value={this.state.weight} onValueChange={this.newWeight} style={styles.slider} />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomSelector: {
    padding: 16,
  },
  slider: {
    paddingTop: 16,
  },
  title: {
    padding: 16,
  }
});
