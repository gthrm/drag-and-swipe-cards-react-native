import React from 'react';
import DraggableFlatList, { RenderItemInfo, OnMoveEndInfo } from 'react-native-draggable-flatlist';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import ListItem from './Components/ListItem';
const statusBarHeight = Constants.statusBarHeight;

export type Language = {
  id: number,
  name: string,
  favorite: boolean,
}

interface AppProps { }

interface AppState {
  data: Array<Language>
}

export default class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props)

    this.state = {
      data: [
        {
          "id": 0,
          "name": "JavaScript",
          "favorite": false
        },
        {
          "id": 1,
          "name": "TypeScript",
          "favorite": false
        },
        {
          "id": 2,
          "name": "Java",
          "favorite": false
        },
        {
          "id": 3,
          "name": "C#",
          "favorite": false
        },
        {
          "id": 4,
          "name": "C++",
          "favorite": false
        },
        {
          "id": 5,
          "name": "Python",
          "favorite": false
        },
        {
          "id": 6,
          "name": "Swift",
          "favorite": false
        },
        {
          "id": 7,
          "name": "Dart",
          "favorite": false
        },
        {
          "id": 8,
          "name": "Ruby",
          "favorite": false
        }
      ],
    }
  }

  onMoveEnd = ({ data }: OnMoveEndInfo<Language>) => {
    this.setState({ data: data ? [...data] : [] })
  }

  toggleFavorite = (value: Language) => {
    const data = this.state.data.map(item => (
      item.id !== value.id ? item : { ...item, favorite: !item.favorite }
    ))
    this.setState({ data })
  }

  render() {
    return (
      <View style={styles.container}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          scrollPercent={5}
          onMoveEnd={this.onMoveEnd}
        />
      </View>
    );
  }

  renderItem = ({ item, move, moveEnd, isActive }: RenderItemInfo<Language>) => {
    return (
      <ListItem
        item={item}
        move={move}
        moveEnd={moveEnd}
        isActive={isActive}
        onHeartPress={() => this.toggleFavorite(item)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    flex: 1
  },
});
