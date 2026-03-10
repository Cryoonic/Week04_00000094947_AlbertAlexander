import { Link, Stack } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function App() {
  return (
    <>
      <Stack.Screen options={{ title: "Welcome" }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Link href="/home" asChild>
          <Pressable
            style={{
              padding: 20,
              backgroundColor: "#007AFF",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              GO TO NAVIGATION LIST
            </Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}
