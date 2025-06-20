import { Text, TouchableOpacity, View } from "react-native";

export default function ProductButton() {
  return (
    <TouchableOpacity className="border border-[#E9E5E1] rounded-3xl w-[44vw] h-[30vh] flex flex-col">
      <View className="h-3/5 p-2 bg-[#E9E5E1] rounded-2xl">
        <Text>Imagen</Text>
      </View>
      <View className="px-3 py-4 h-2/5 flex flex-col justify-between">
        <Text className="font-bold text-xl">Cuaderno profesional cuadro chico</Text>
        <Text className="font-extrabold text-3xl mt-2">$XX.XX</Text>
      </View>
    </TouchableOpacity>
  );
}