/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, ScrollView, Slider} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Data from './data.json';
import Table from './Table';
import WeightSelector from './WeightSelector';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {};
type DosingData = {
  backgroundColor: string,
  color: string,
  weight: number,
};
type State = {
  weight: number,
}

export default class Dosing extends Component<Props, State> {
  state: any = {
    weight: 2,
  };

  drugs = (weight: number) => {
    let drugs: any = Data.drugs.map(((drug) => {
      let dose: number = Math.round(weight * drug.schedule * 100) / 100;
      if (drug.max && dose > drug.max) dose = drug.max;
      return [drug.name, dose + ' mg', drug.remarks]
    }))
    return drugs
  };

  render() {
    return (
      <PaperProvider>
        <ScrollView>
          <View style={{padding: 16}}>
            <Table headers={['Drug', 'Dose', 'Notes']} rows={this.drugs(this.state.weight)} columnStyle={[{flex: 1}, {flex: 1}, {flex: 2}]} />
          </View>
        </ScrollView>
        <WeightSelector onValueChange={(value) => this.setState({weight: value})} />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
});
