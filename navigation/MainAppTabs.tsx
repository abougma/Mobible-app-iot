import React from 'react';
import ReusableBottomTabs, { TabConfig } from '../components/ReusableBottomTabs';
import { DashboardScreenContent } from '../screens/DashboardScreen';
import { DetailsScreenContent } from '../screens/DetailsScreen'; 
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const MainAppTabs = () => {
  const mainTabs: TabConfig[] = [
    { name: 'Dashboard', component: DashboardScreenContent, iconName: 'home-outline', focusedIconName: 'home' },
    { name: 'Map', component: DetailsScreenContent, iconName: 'map-outline', focusedIconName: 'map' },
    { name: 'Settings', component: SettingsScreen, iconName: 'settings-outline', focusedIconName: 'settings' },
    { name: 'Profile', component: ProfileScreen, iconName: 'person-outline', focusedIconName: 'person' },
  ];


  return (
    <ReusableBottomTabs tabs={mainTabs} initialRouteName="Dashboard" />
  );
};

export default MainAppTabs;