import { Link } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import styles from "../AppStyles";
import userData from "../../data.json";

export default function UserList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userData.map((users, index) => (
        <Card key={index} style={styles.card}>
          <Link
            href={{
              pathname: "/profile",
              params: {
                userName: users.name,
                userEmail: users.email,
                userPhoto: users.photo_url,
              },
            }}
            push
            asChild
          >
            <TouchableOpacity>
              <Card.Content style={styles.cardContent}>
                <Avatar.Image size={70} source={{ uri: users.photo_url }} />

                <View style={styles.textContainer}>
                  <Text style={styles.textName}>{users.name}</Text>
                  <Text style={styles.textEmail}>{users.email}</Text>
                </View>
              </Card.Content>
            </TouchableOpacity>
          </Link>
        </Card>
      ))}
    </ScrollView>
  );
}
