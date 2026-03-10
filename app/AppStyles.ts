import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  card: {
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  textName: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#000000",
  },
  textEmail: {
    fontSize: 14,
    color: "#555555",
  },
});

export default styles;
