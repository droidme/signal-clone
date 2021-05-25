import React, { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

import CustomListItem from "../components/CustomListItem.js";
import { auth } from "../firebase.js";

const HomeScreen = ({ navigation }) => {
  const signOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
      headerTintStyle: styles.headerTintStyle,
      headerLeft: () => (
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity activeOpacity={0.5} onPress={signOut}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AddChat")}>
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#fff",
  },
  headerTitleStyle: {
    color: "black",
  },
  headerTintStyle: {
    color: "black",
  },
  headerLeftContainer: {
    marginLeft: 20,
  },
  headerRightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    marginRight: 20,
  },
});
