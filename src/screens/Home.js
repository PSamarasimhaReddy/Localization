import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {strings} from '../components/Data';

export default class Home extends React.Component {
  state = {
    lan: 'en',
  };
  onUpdate = language => {
    this.setState({lan: language});
    strings.setLanguage(language);
  };
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text>languages</Text>
        <Button title="Hindi" onPress={() => this.onUpdate('hin')} />
        <Button title="English" onPress={() => this.onUpdate('en')} />
        <Button title="Italian" onPress={() => this.onUpdate('it')} />

        {/* text to be changes according to languages */}

        <Text>My language is: {strings.how}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
