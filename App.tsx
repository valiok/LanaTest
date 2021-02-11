/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TestIcon from './TestIcon';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

declare const global: {HermesInternal: null | {}};

const FeedStack = createStackNavigator();

function FeeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={FeedScreen} />
      <FeedStack.Screen name="Feed Info" component={FeedInfoScreen} />
    </FeedStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            if (focused) {
              return <TestIcon fill="#DB25AE"/>
            }
            return <TestIcon fill="gray"/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#DB25AE',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Feed" component={FeeedStackScreen} />
        <Tab.Screen name="Catalog" component={CatalogScreen} />
        <Tab.Screen name="Basket" component={Basket} />
        <Tab.Screen name="My orders" component={MyOrders} />
        <Tab.Screen name="Profile" component={Profile} />

      </Tab.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress= {() => navigation.navigate('Feed Info')}>
          <View style={{backgroundColor: "blue", height: 100, width: 200, alignItems: 'center', justifyContent:'center'}}>
            <Text style={{color: "white", fontWeight: "bold"}}>
            Feed!
            </Text>
          </View>
      </TouchableOpacity>
    </View>
  );
}

function CatalogScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Catalog!</Text>
    </View>
  );
}

const FeedInfoScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed info!</Text>
    </View>
    );
}

const Basket = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Basket!</Text>
    </View>
  );
}

const MyOrders = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My orders!</Text>
    </View>
  );
}

const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();


export default App;
