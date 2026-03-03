import { Stack } from "expo-router";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  Card,
  Text,
  Avatar,
  Button,
  Appbar,
  Divider,
} from "react-native-paper";
import styles from "../AppStyles";
import userData from "../../data.json";

export default function App() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <Appbar.Header>
        <Appbar.Content title="User" />
      </Appbar.Header>

      <ScrollView style={styles.container}>
        {userData.map((user, index) => (
          <Card key={index} style={styles.card} mode="elevated">
            <Card.Content style={styles.cardContent}>
              <Avatar.Image
                size={70}
                source={{ uri: user.photo_url }}
              />

              <View style={styles.textContainer}>
                <Text variant="titleMedium">{user.name}</Text>
                <Text variant="bodyMedium">{user.email}</Text>

                <Button
                  mode="contained"
                  style={styles.button}
                  onPress={() => alert(`Email: ${user.email}`)}
                >
                  View Detail
                </Button>
              </View>
            </Card.Content>

            <Divider />
          </Card>
        ))}
      </ScrollView>
    </>
  );
}