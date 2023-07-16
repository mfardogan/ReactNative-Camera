import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#232323",
  },
  cam: { width: "100%", height: "100%", alignItems: "center" },
  tool: {
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    width: "70%",
    height: 80,
    backgroundColor: "rgba(53, 97, 181, 0.25)",
  },
  left: {
    flex: 2,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  take: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    padding: 10,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "#1D4EFF",
  },
  btn: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
  },
  right: {
    flex: 2,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  full: { width: "100%", height: "100%" },
  remove: {
    position: "absolute",
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    bottom: 20,
    backgroundColor: "#F65F5F",
    justifyContent: "center",
    alignItems: "center",
  },
});
