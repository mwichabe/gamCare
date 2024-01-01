import React, { useLayoutEffect, useEffect } from "react";
import * as Updates from 'expo-updates';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Alert
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabBar from "./components/BottomTabBar";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const screenWidth = Dimensions.get("window").width;
//const screenHeight = Dimensions.get("window").height;
async function onFetchUpdateAsync() {
  try {
    const update = await Updates.checkForUpdateAsync();

    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  } catch (error) {
    // You can also add an alert() to see the error message in case of an error when fetching updates.
    alert(`Error fetching latest Expo update: ${error}`);
  }
}

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    onFetchUpdateAsync();
  }, []); 
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Today",
      headerLeft: () => (
        <TouchableOpacity
          style={styles.circularContainer}
          onPress={() => {
            //back arrow press
            navigation.goBack();
          }}
        >
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", marginRight: 16 }}>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => {
              Alert.alert('This will be implemented soon');
            }}
          >
            <Icon name="ios-share" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('This will also be implemented soon');
            }}
          >
            <Icon name="bookmark-border" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/dailyReading.png")}
        style={styles.image}
      />
      <View style={styles.body}>
        <Text style={styles.heading1}>Daily Inspirational Reading</Text>
        <Text style={styles.lowerText}>August 30, 2023</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Text style={styles.bodyText}>
            Lori lived her life through the lens of a camera. She never realized
            this until this very moment as she scrolled through thousands of
            images on your computer. She could remember the exact moment each
            photo was taken. She could remember where she had been, what she was
            thinking as she tried to get the shot, the smells of the surrounding
            area, and even the emotions that she felt taking the photo, yet she
            had trouble remembering what she had for breakfast. Lori lived her
            life through the lens of a camera. She never realized this until
            this very moment as she scrolled through thousands of images on your
            computer. She could remember the exact moment each photo was taken.
            She could remember where she had been, what she was thinking as she
            tried to get the shot, the smells of the surrounding area, and even
            the emotions that she felt taking the photo, yet she had trouble
            remembering what she had for breakfast. Lori lived her life through
            the lens of a camera. She never realized this until this very moment
            as she scrolled through thousands of images on your computer. She
            could remember the exact moment each photo was taken. She could
            remember where she had been, what she was thinking as she tried to
            get the shot, the smells of the surrounding area, and even the
            emotions that she felt taking the photo, yet she had trouble
            remembering what she had for breakfast. Lori lived her life through
            the lens of a camera. She never realized this until this very moment
            as she scrolled through thousands of images on your computer. She
            could remember the exact moment each photo was taken. She could
            remember where she had been, what she was thinking as she tried to
            get the shot, the smells of the surrounding area, and even the
            emotions that she felt taking the photo, yet she had trouble
            remembering what she had for breakfast. Lori lived her life through
            the lens of a camera. She never realized this until this very moment
            as she scrolled through thousands of images on your computer. She
            could remember the exact moment each photo was taken. She could
            remember where she had been, what she was thinking as she tried to
            get the shot, the smells of the surrounding area, and even the
            emotions that she felt taking the photo, yet she had trouble
            remembering what she had for breakfast. Lori lived her life through
            the lens of a camera. She never realized this until this very moment
            as she scrolled through thousands of images on your computer. She
            could remember the exact moment each photo was taken. She could
            remember where she had been, what she was thinking as she tried to
            get the shot, the smells of the surrounding area, and even the
            emotions that she felt taking the photo, yet she had trouble
            remembering what she had for breakfast.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const ProfileScreen = () => (
  <View style={styles.allProfile}>
     <View style={styles.profileContainer}>
     <Icon name="add-a-photo" size={40} color="grey"style={styles.addPhotoIcon} />
    <Text>Profile Picture</Text>
  </View>
  <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder="Full Name" />
        <TextInput style={styles.textInput} placeholder="User name" />
        <TextInput style={styles.textInput} placeholder="Description" />
      </View>
      <TouchableOpacity style={styles.doneButtonContainer}>
        <View style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
        </View>
      </TouchableOpacity>

  </View>
 
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <BottomTabBar {...props} />}
        screenOptions={{
          headerTitle: "Daily Reading",
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="Today"
          component={HomeScreen}
          options={{ tabBarIcon: "done" }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: "person",
            title: "Profile",
            headerTitle: "Community Profile",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  circularContainer: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#3498db",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  image: {
    width: screenWidth / 1.25,
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
    overflow: "hidden",
    //resizeMode: 'contain',
  },
  heading1: {
    fontWeight: "bold",
    fontSize: 24,
    paddingTop: 10,
  },
  lowerText: {
    color: "grey",
    fontSize: 12,
    padding: 10,
  },
  body: {
    padding: 20,
  },
  bodyText: {
    fontSize: 14
  },
  profileContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  allProfile: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingBottom: 20,
    position: 'relative', 
  },
  addPhotoIcon: {
    position: 'absolute',
    bottom: 20,
    left: 110,
  },
  textInputContainer: {
    marginTop: 20,
    width: '80%',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  doneButtonContainer: {
    position: 'absolute',
    bottom: 20, 
    alignSelf: 'center',
  },
  doneButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 350
  },
  doneButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
