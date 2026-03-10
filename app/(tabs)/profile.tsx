import { Link, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function Profile() {
  const { userName, userEmail, userPhoto } = useLocalSearchParams<{
    userName?: string;
    userEmail?: string;
    userPhoto?: string;
  }>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
      }}
    >
      <Avatar.Image
        size={120}
        source={{ uri: userPhoto }}
        style={{ marginBottom: 20 }}
      />

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#000",
          marginBottom: 5,
        }}
      >
        {userName ? `${userName}'s Profile` : "User Profile"}
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: "#555",
          marginBottom: 25,
        }}
      >
        {userEmail}
      </Text>

      <Link href="/home" push asChild>
        <Button title="Go to Home Screen" />
      </Link>
    </View>
  );
}
