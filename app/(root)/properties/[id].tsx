import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Product() {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <StatusBar style="dark" />
      <Text className="font-bold text-2xl m-2">Property {id}</Text>
    </View>
  );
}