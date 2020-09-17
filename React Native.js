import {
  Alert,
  Dimensions,
  Keyboard,
  Linking,
  StyleSheet,
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {Entypo, Ionicons} from '@expo/vector-icons';

const alert = () => Alert.alert('Sorry', 'Something went wrong.');

const {height, width} = Dimensions.get('window');

const keyboardDidShowListener = Keyboard.addListener(
  'keyboardDidShow',
  (event) => setKeyboardHeight(height - event.endCoordinates.screenY)
);
keyboardDidShowListener.remove();

Linking.openURL('https://google.com').catch(alert);

const styles = StyleSheet.create({
  itemSeperator: {
    borderBottomColor: 'black',
    borderBottomWidth,
    width: width * 0.2
  },
  listFooter: {
    paddingBottom: insets.bottom
  }
});
const borderBottomWidth = StyleSheet.hairlineWidth;

<ActivityIndicator color='black' size='large' />;

<Button onPress={alert} title='Alert' />;

<FlatList
  data={[1, 2, 3, 4, 5]}
  keyExtractor={(item) => item.toString()}
  renderItem={({item}) => <Text>{item}</Text>}
  ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
  ListFooterComponent={() => <View style={styles.listFooter} />}
/>;

<Image resizeMode='contain' source={require('./assets/images/logo.png')} />;

<SafeAreaView />;

<ScrollView scrollEnabled={false} />;

<StatusBar backgroundColor='black' barStyle='light-content' />;
app.json = {
  expo: {
    ...app.json.expo,
    androidStatusBar: {
      translucent: false
    }
  }
};

<Text />;

<TextInput
  editable={false}
  keyboardType='numeric'
  onChangeText={setText}
  value={text}
/>;

<TouchableOpacity onPress={handlePress} />;

<View />;

<Entypo color='black' name='chevron-right' size={20} />;

import {
  useSafeAreaInsets,
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const insets = useSafeAreaInsets();

<SafeAreaProvider />;

<SafeAreaView />;

<NavigationContainer />;

const Stack = createStackNavigator();
const stackOptions = {
  animationEnabled: false,
  cardOverlayEnabled: true,
  cardStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  cardStyleInterpolator: ({current: {progess}}) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [0, 0.25, 0.5, 0.75, 1]
      })
    },
    overlayStyle: {
      opacity: progress.interpolate({
        extrapolate: 'clamp',
        inputRange: [0, 1],
        outputRange: [0, 0.5]
      })
    }
  }),
  headerShow: false,
  headerStyle: {
    backgroundColor: 'black'
  },
  headerTitle: 'Home'
};
<Stack.Navigator
  headerMode='none'
  initialRouteName='Home'
  mode='Modal'
  screenOptions={stackOptions}
/>;
<Stack.Screen
  component={Home}
  name='Home'
  options={stackOptions}
  options={({navigation, route}) => ({
    ...stackOptions,
    headerLeft: null,
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Entypo color='black' name='cross' size={20} />
      </TouchableOpacity>
    ),
    title: route.params.title
  })}
/>;

const BottomTabs = createBottomTabNavigator();
const bottomTabsOptions = {
  tabBarIcon: (props) => (
    <Ionicons color={props.color} name='ios-contacts' size={props.size} />
  ),
  tabBarLabel: 'Contacts'
};
<BottomTabs.Navigator
  screenOptions={bottomTabsOptions}
  tabBarOptions={{
    activeBackgroundColor: 'black',
    activeTintColor: 'white'
  }}
/>;
<BottomTabs.Screen
  listeners={({navigation}) => ({
    tabPress: (event) => {
      event.preventDefault();
      navigation.navigate('Settings');
    }
  })}
  options={bottomTabsOptions}
/>;

const Drawer = createDrawerNavigator();
const drawerOptions = {
  drawerLabel: 'Home',
  gestureEnabled: false
};
<Drawer.Navigator
  drawerPosition='right'
  drawerType='slide'
  screenOptions={drawerOptions}
/>;
<Drawer.Screen options={drawerOptions} />;

navigation.closeDrawer();
navigation.navigate('Home', {
  params: {title: 'Dashboard'},
  screen: 'Dashboard'
});
navigation.openDrawer();
navigation.pop();
navigation.push('Home', {title: 'Dashboard'});
navigation.toggleDrawer();

route.params;
