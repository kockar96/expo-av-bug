import { ResizeMode, Video } from "expo-av";
import { router } from "expo-router";
import { View, Text, Button, Platform } from "react-native";

const Second = () => {
  const handleGoToThird = () => {
    router.push("/screens/third");
  };
  const handleGoBack = () => {
    router.push("/screens/first");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Video
        style={{
          alignSelf: "center",
          width: "100%",
          height: 250,
        }}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode={Platform.select({
          android: ResizeMode.CONTAIN,
          ios: ResizeMode.COVER,
        })}
        isLooping
        shouldPlay
        // onFullscreenUpdate={onFullscreenUpdate}
      />
      <Text>Second</Text>
      <Button onPress={handleGoToThird} title="Go to third" />
      <Button onPress={handleGoBack} title="Go back" />
    </View>
  );
};

export default Second;
