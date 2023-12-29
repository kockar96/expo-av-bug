import { router } from "expo-router";
import { View, Text, Button } from "react-native";

const First = () => {
    const handleGoToSecond = () => {
        console.log('Go to second');
        router.push('/screens/second');
    }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>First</Text>
      <Button onPress={handleGoToSecond} title="Go to second"/>
    </View>
  );
};

export default First;
