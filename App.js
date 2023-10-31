import "react-native-gesture-handler";

import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function Feed() {
  return <Text>Feed</Text>;
}

function Messages() {
  return <Text>Messages</Text>;
}

function Profile() {
  return <Text>Profile</Text>;
}

function Settings() {
  return <Text>Settings</Text>;
}

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// Important Notes
// Each navigator keeps its own navigation history
// Each navigator has its own options
// Each screen in a navigator has its own params
// Navigation actions are handled by current navigator and bubble up if couldn't be handled
// Navigator specific methods are available in the navigators nested inside
// Nested navigators don't receive parent's events
// Parent navigator's UI is rendered on top of child navigator

// Here, you might want to navigate to the Root screen from your Feed component:

// navigation.navigate('Root');

// navigation.navigate('Root', { screen: 'Profile' });

// Passing params to a screen in a nested navigator
// You can also pass params by specifying a params key:

// navigation.navigate('Root', {
//   screen: 'Profile',
//   params: { user: 'jane' },
// });

// You can follow similar approach for deeply nested screens. Note that the second argument to navigate here is just params, so you can do something like:

// navigation.navigate('Root', {
//   screen: 'Settings',
//   params: {
//     screen: 'Sound',
//     params: {
//       screen: 'Media',
//     },
//   },
// });

// If you need to render the initial route specified in the navigator, you can disable the behaviour of using the specified screen as the initial screen by setting initial: false:

// navigation.navigate('Root', {
//   screen: 'Settings',
//   initial: false,
// });
