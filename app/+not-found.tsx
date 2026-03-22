import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center bg-white p-5">
        <Text className="text-3xl font-bold text-gray-900">
          Page Not Found
        </Text>
        <Text className="mt-3 text-base text-gray-500">
          The screen you're looking for doesn't exist.
        </Text>
        <Link href="/" className="mt-6">
          <Text className="text-base font-semibold text-blue-600">
            Go to Home
          </Text>
        </Link>
      </View>
    </>
  );
}
