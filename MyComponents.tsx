import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';

const MyComponents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      callApi();
    }, 10000);
  }, []);

  const callApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const myData = await response.json();
    setData(myData);
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Text>{item.title}</Text>}
      keyExtractor={item => item.id}
    />
  );
};

export default MyComponents;
