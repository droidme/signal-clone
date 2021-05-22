import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

const AddChatScreen = ({ navigation }) => {
  const [chat, setChat] = useState("");

  const createChat = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        leftIcon={<AntDesign name="wechat" size={24} color="black" />}
        value={chat}
        onChangeText={(text) => setChat(text)}
        onSubmitEditing={createChat}
      />
      <Button title="Create new Chat" onPress={createChat} />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
