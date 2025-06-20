import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, usePathname } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function Layout() {
  const pathname = usePathname()
  const CustomTabBarButton = ({children, onPress}: any) => {
    return(
    <TouchableOpacity
      onPress={onPress}
      className="justify-center items-center"
    >
        <View className="w-[75px] h-[75px] rounded-full bottom-10 bg-[#4A1F43] justify-center items-center">
            {children}
        </View>
    </TouchableOpacity>
    )
  }

  return (
    <>    
    <Header currentPath={pathname} />
    <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            borderColor: "#000000",
            height: 92,
            paddingTop: 15,
            borderBottomWidth: 15,
        }
    }}>
        <Tabs.Screen 
          name="index" 
          options={{
              title: 'Inicio',
              tabBarIcon: ({ focused }) => (
                <Ionicons 
                  size={32}
                  name={focused ? "home" : "home-outline"}
                />
              )
          }}
        />
        <Tabs.Screen 
          name="explore" 
          options={{
              title: 'Explorar',
              tabBarIcon: ({ focused }) => (
                <Ionicons 
                  size={32}
                  name={focused ? "search" : "search-outline"}
                />
              )
          }}
        />
        <Tabs.Screen 
          name="add"
          options={{
              title: "Agregar", 
              tabBarButton: (props) => (
                <CustomTabBarButton {...props}>
                  <Ionicons 
                    size={32}
                    name="add"
                    color="white"
                  />
                </CustomTabBarButton>
              )
          }}
        />
        <Tabs.Screen 
          name="favorite" 
          options={{
              title: 'Favoritos',
              tabBarIcon: ({ focused }) => (
                <Ionicons 
                  size={32}
                  name={focused ? "heart" : "heart-outline"}
                />
              )
          }}
        />
        <Tabs.Screen 
          name="profile" 
          options={{
              title: 'Perfil',
              tabBarIcon: ({ focused }) => (
                <Ionicons 
                  size={32}
                  name={focused ? "person" : "person-outline"}
                />
              )
          }}
        />
        <Tabs.Screen 
          name="cart"
          options={{
            href: null,
            tabBarStyle: {
              display: "none"
            }
          }}
        />
    </Tabs>
    </>
  );
}