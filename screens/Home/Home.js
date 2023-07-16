import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Styles } from "./Styles";

export const Home = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("cam")}>
        <View style={Styles.button}>
          <Text style={Styles.text}>Camera</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
