import { Link } from "expo-router";
import { ScrollView, TouchableOpacity, View, Animated } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import { useEffect, useRef } from "react";
import styles from "../AppStyles";
import userData from "../../data.json";

export default function UserList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userData.map((users, index) => {
        const fadeAnim = useRef(new Animated.Value(0)).current;
        const translateY = useRef(new Animated.Value(20)).current;

        useEffect(() => {
          Animated.parallel([
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 500,
              delay: index * 200, // ⬅️ beda waktu tiap item
              useNativeDriver: true,
            }),
            Animated.timing(translateY, {
              toValue: 0,
              duration: 500,
              delay: index * 200,
              useNativeDriver: true,
            }),
          ]).start();
        }, []);

        return (
          <Animated.View
            key={index}
            style={{
              opacity: fadeAnim,
              transform: [{ translateY }],
              width: "100%",
            }}
          >
            <Card style={styles.card}>
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
          </Animated.View>
        );
      })}
    </ScrollView>
  );
}
