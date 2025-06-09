import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export type TabConfig = {
  name: string;
  component: React.ComponentType<any>;
  iconName: string;
  focusedIconName: string;
  headerShown?: boolean;
};

type ReusableBottomTabsProps = {
  tabs: TabConfig[];
  initialRouteName?: string;
};

const ReusableBottomTabs: React.FC<ReusableBottomTabsProps> = ({ tabs, initialRouteName }) => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName || (tabs.length > 0 ? tabs[0].name : undefined)}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const currentTab = tabs.find(tab => tab.name === route.name);
          if (!currentTab) return null;

          const iconName = focused ? currentTab.focusedIconName : currentTab.iconName;
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: '#4a6da7',
        inactiveTintColor: 'gray',
      }}
    >
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{ headerShown: tab.headerShown !== undefined ? tab.headerShown : false }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default ReusableBottomTabs;