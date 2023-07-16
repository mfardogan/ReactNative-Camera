import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Cam = () => {
  const nav = useNavigation();

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async = () => {
      nav.setOptions({
        headerTransparent: true,
      });
    })();

    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status == "granted");
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#232323",
      }}
    >
      {image === null && (
        <Camera
          style={{ width: "100%", height: "100%", alignItems: "center" }}
          type={type}
          ref={(ref) => setCamera(ref)}
        >
          <View
            style={{
              borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              bottom: 10,
              width: "70%",
              height: 100,
              backgroundColor: "rgba(53, 97, 181, 0.25)",
            }}
          >
            <View
              style={{
                flex: 2,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={async () => {
                  if (camera) {
                    const data = await camera.takePictureAsync(null);
                    setImage(data.uri);
                    console.log(data.uri);
                  }
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    padding: 10,
                    borderWidth: 4,
                    borderColor: "white",
                    backgroundColor: "#1D4EFF",
                  }}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: "white",
                      borderRadius: 20,
                    }}
                  ></View>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 2,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
    <View style={{ width: "100%", height: "100%" }}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{ uri: image }}
      />

      <View
        style={{
          position: "absolute",
          right: 20,
          width: 50,
          height: 50,
          borderRadius: 25,
          bottom: 20,
          backgroundColor: "#F65F5F",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
