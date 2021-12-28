import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import * as Keychain from "react-native-keychain";
import { useDispatch, useSelector } from "react-redux";
import { userBooleanAction, UserInfoAction } from "../redux/action";

export default function Login({ navigation }) {
  const userBoolean = useSelector((state) => state.USER_BOOLEAN);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(false);
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    setUser(true);
    dispatch(
      UserInfoAction({
        userName: username,
        userStatus: user,
        passWord: password,
      })
    );
    dispatch(userBooleanAction({ userStatus: true }));
    console.log(userBoolean.userStatus);
  };
  console.log(userBoolean);
  return (
    <>
      {!userBoolean.userStatus ? (
        <View style={styles.container} backgroundColor="#382a38">
          <Image
            style={styles.logo}
            source={{
              // uri: "https://reactnative.dev/img/tiny_logo.png",
              uri:
                "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
            }}
          />

          <View>
            <Text style={styles.text}> Welcome To Book Store App </Text>
            <Text style={styles.textMiddle}> Please Login </Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
              <FontAwesomeIcon icon={faUser} />
            </View>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter Your Name"
              placeholderTextColor="#003f5c"
              onChangeText={(value) => setUsername(value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
              <FontAwesomeIcon icon={faLock} />
            </View>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => onSubmit()}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>Forgot Password?</Text>
          </TouchableOpacity>

          <Button
            style={styles.googleBtn}
            title="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />

          <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>
              Don't have an acount? Create here
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {/* {alert("Working")} */}
          {navigation.navigate("MainScreen")}
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: "10%",
    height: "10%",
    padding: 40,
  },
  text: {
    fontFamily: "Kufam-SemiBoldItalic",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    paddingTop: 10,
  },
  textMiddle: {
    fontFamily: "Kufam-SemiBoldItalic",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 90,
    padding: 10,
    color: "white",
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: "80%",

    borderColor: "#ccc",
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconStyle: {
    padding: 10,

    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    width: 50,
  },
  buttonContainer: {
    marginTop: 10,
    width: "50%",
    backgroundColor: "#2e64e5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    fontFamily: "Lato-Regular",
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
});
