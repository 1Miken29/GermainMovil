import { Text, TouchableOpacity } from "react-native";

interface Escuela {
  nombre: string
}

export default function PlantelesButton( escuela: Escuela ) {
  return (
    <TouchableOpacity className="border border-[#E9E5E1] rounded-3xl w-[28vw] h-[28vw] flex flex-col justify-around items-center">
      <Text className="border w-[15vw] h-[15vw]">Imagen bonita</Text>
      <Text className="font-bold text-2xl">{escuela.nombre}</Text>
    </TouchableOpacity>
  );
}