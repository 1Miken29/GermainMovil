import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Cart() {
  return (
    <>
      <Stack.Screen options={{ title: "Carrito" }} />
      <View>
        <Text>Este es tu carrito</Text>
      </View>
    </>
  );
}
