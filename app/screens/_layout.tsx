import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="first"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="second"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="third"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
