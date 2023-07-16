import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Home = () => {
  const nav = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#232323",
      }}
    >
      <TouchableOpacity onPress={() => nav.navigate("cam")}>
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 15,
            backgroundColor: "#1D4EFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Camera</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
