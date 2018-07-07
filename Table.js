/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

type Props = {
    headers: any,
    rows: any,
    columnStyle?: any
};

export default class Table extends Component<Props> {
  render() {
    return (
        <View>
            <View style={[styles.tableHeader, styles.tableRow]}>
                {this.props.headers.map((cell, i) =>
                <Text style={[styles.tableText, styles.tableHeaderText, (this.props.columnStyle && this.props.columnStyle.length === this.props.headers.length) ? this.props.columnStyle[i] : null]}>{cell}</Text>
                )}
            </View>
            {this.props.rows.map((row, i) =>
                <View style={[styles.tableRow, (i + 1 === this.props.rows.length) ? styles.tableRowLast : null]}>
                    {row.map((cell, j) =>
                    <Text style={[styles.tableText, (j === 0) ? styles.tableTextFirstColumn : null, (this.props.columnStyle && this.props.columnStyle.length === row.length) ?  this.props.columnStyle[j] : null]}>{cell}</Text>
                    )}
                </View>
            )}
        </View>
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
    borderRightColor: '#aaa'
  },
  tableRowLast: {
    borderBottomWidth: 0,
  },
  tableText: {
    padding: 6,
    flex: 1
  },
});
