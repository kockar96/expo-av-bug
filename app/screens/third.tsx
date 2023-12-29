import { router } from "expo-router";
import { View, Text, Button } from "react-native";

const First = () => {
  const handleGoBack = () => {
    router.back()
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Third</Text>
      <Button onPress={handleGoBack} title="Go back" />
    </View>
  );
};

export default First;
