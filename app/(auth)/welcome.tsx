import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="font-bold text-5xl text-blue-600">Welcome</Text>
    </SafeAreaView>
  );
};

export default Onboarding;
