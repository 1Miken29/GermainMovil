import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View>
      <StatusBar style="dark" />
      <Text className="font-bold text-2xl m-2">Profile</Text>
    </View>
  );
}