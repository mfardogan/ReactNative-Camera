import { Entypo, Ionicons } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Styles } from "./Styles";

export const Cam = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async = () => {
      navigation.setOptions({
        headerTransparent: true,
      });
    })();

    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status == "granted");
    })();
  }, []);

  return (
    <View style={Styles.container}>
      {image === null && (
        <Camera style={Styles.cam} type={type} ref={(ref) => setCamera(ref)}>
          <View style={Styles.tool}>
            <View style={Styles.left}>
              <TouchableOpacity
                onPress={() => {
                  setType((pre) =>
                    pre == CameraType.back ? CameraType.front : CameraType.back
                  );
                }}
              >
                <Ionicons name="md-camera-reverse" size={35} color="white" />
              </TouchableOpacity>
            </View>
            <View style={Styles.middle}>
              <TouchableOpacity
                onPress={async () => {
                  if (camera) {
                    const data = await camera.takePictureAsync(null);
                    setImage(data.uri);
                    console.log(data.uri);
                  }
                }}
              >
                <View style={Styles.take}>
                  <View style={Styles.btn}></View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.right}>
              <Entypo name="images" size={30} color="white" />
            </View>
          </View>
        </Camera>
      )}

      {image && <Captured image={image} remove={() => setImage(null)} />}
    </View>
  );
};

const Captured = ({ image, remove }) => {
  return (
    <View style={Styles.full}>
      <Image style={Styles.full} source={{ uri: image }} />

      <View style={Styles.remove}>
        <TouchableOpacity
          onPress={() => {
            remove(null);
          }}
        >
          <Entypo name="trash" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
