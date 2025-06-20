import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface HeaderProps {
    currentPath: string
}

export default function Header({ currentPath }:HeaderProps) {
  const router = useRouter()
  const getTitle = () => {
    if (currentPath.includes("explore")) return<TextInput className="border border-white rounded-full px-4 bg-white w-10/12 h-10" />;
    if (currentPath.includes("add")) return <Text className="text-3xl font-bold text-white">Agregar</Text>;
    if (currentPath.includes("favorite")) return <Text className="text-3xl font-bold text-white">Favoritos</Text>;
    if (currentPath.includes("profile")) return <Text className="text-3xl font-bold text-white">Perfil</Text>;
    if (currentPath.includes("cart")) return(
    <View className="border flex flex-row justify-between items-center w-1/2">
    <TouchableOpacity onPress={() => router.push("/")}>
        <Ionicons size={32} name="arrow-back" color="white" />
    </TouchableOpacity>
    <Text className="text-3xl font-bold text-white">Carrito</Text>
    </View>
    );
    return (
        <>
        <TextInput className="border border-white rounded-full px-4 bg-white w-10/12 h-10" />
        <TouchableOpacity onPress={() => router.push("/cart")}>
            <Ionicons size={32} name="cart-outline" color={"white"}/>
        </TouchableOpacity>
        </>
    );
  };
  return (
    <View className="bg-[#4A1F43] p-4 pt-10 h-[112px] flex-row items-center justify-around">
      {getTitle()}
    </View>
  );
}