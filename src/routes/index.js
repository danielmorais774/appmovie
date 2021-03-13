import React from 'react';

// component navigations
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//screens 
import HomeScreen from '../views/Home';
import SearchScreen from '../views/Search';
import MovieInfo from '../views/MovieInfo';

//libs
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

//hooks
const Stack = createStackNavigator();
const StackNative = createStackNavigator();
const Tab = createBottomTabNavigator();

// personalizaçoes da bar
const configTabMain = (label, icon) => {
    return {
        tabBarIcon: ({ color, size, route }) => (
            <FontAwesome5Icon name={icon} size={23} color={color} />
        )
    }
};


const MainBottomBarRouter = () => (
    <Tab.Navigator tabBarOptions={{activeTintColor: "#FD4848", inactiveTintColor: "#343434", showLabel: false}}>
        <Tab.Screen name="Home" component={HomeScreen} options={configTabMain('Inicial', 'home')} />
        <Tab.Screen name="Search" component={SearchScreen} options={configTabMain('Pesquisa', 'search')} />
    </Tab.Navigator>
)

const MainAppRouter = () => (
    <Stack.Navigator
        headerMode={"none"}
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
        <Stack.Screen name="Home" component={MainBottomBarRouter} />
        <Stack.Screen name="MovieInfo" component={MovieInfo} />
    </Stack.Navigator>
);

const routes = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <MainAppRouter />
            </NavigationContainer>
        </SafeAreaProvider>
    )
};

export default routes;