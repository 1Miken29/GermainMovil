import PlantelesButton from "@/components/PlantelesButton";
import ProductButton from "@/components/ProductButton";
import { ScrollView, Text, View } from "react-native";

export default function Index() {

  const escuelas: string[] = ["CECyT 1", "CECyT 2" , "CECyT 3", "CET 1", "CECyT 5"]

  return (
    <>
    <View className="bg-white h-full">
      <ScrollView className="p-4">
        <Text className="text-4xl font-bold">Planteles</Text>
        <View className="my-4 flex flex-row flex-wrap gap-5">
          {escuelas.map((escuela, index) => (
            <PlantelesButton key={index} nombre={escuela} />
          ))}
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-4xl font-bold">Más Vendidos</Text>
          <Text className="text-2xl font-semibold text-[#743669]">Ver Todos</Text>
        </View>
        <View className="my-4 flex flex-row flex-wrap gap-5">
          <ProductButton />
          <ProductButton />
          <ProductButton />
          <ProductButton />
          <ProductButton />
        </View>
      </ScrollView>
    </View>
    </>
  );
}
