import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {List, Caption} from 'react-native-paper';
import {useSelector} from 'react-redux';
import RenderListComponent from './RenderListComponent';

const displayComponent = () => {

  const allTask = useSelector(state => state.task);
  const renderTask = () => {
    if (allTask.length !== 0) {
      return allTask.map((task, index) => {
        return <RenderListComponent task={task} key={index} />;
      });
    } else {
      return <Caption style={styles.caption}>No Task Added yet</Caption>;
    }
  };
  return (
     <View style={styles.displayContainer}>
          <List.AccordionGroup>
          {renderTask()}
        </List.AccordionGroup>
     </View>
  );
};

const styles = StyleSheet.create({
  displayContainer: {
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  caption: {
    marginTop:10,
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
  },
});
export default displayComponent;
