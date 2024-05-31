import { StyleSheet, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  welcomeOptionBtn: {
    width: screenWidth * 0.32,
    height: screenHeight * 0.07,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 2,
    marginHorizontal: 5,
    marginBottom: 12,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
    height: screenHeight,
    width: screenWidth,
  },
  welcomeInput: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.09,
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 20,
    paddingLeft: 25,
    marginTop: 12,
  },
  logoImage: {
    flex: 1,
    width: screenWidth * 0.8,
    resizeMode: "contain",
    marginVertical: screenHeight * 0.05,
    alignSelf: "center",
  },
  welcomeBtnsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  loginSignupBtn: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.09,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 2,
  },
  loginSignupBtnSmall: {
    width: screenWidth * 0.5,
    height: screenHeight * 0.08,
  },
  resultContainer: {
    padding: 10,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
  },
  defaultBtn: {
    borderRadius: 12,
    width: screenWidth * 0.65,
    height: screenHeight * 0.07,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    marginBottom: 12,
  },
  hospitalContainer: {
    borderRadius: 12,
    borderWidth: 2,
    height: screenHeight * 0.615,
    width: screenWidth * 0.9,
    padding: 10,
  },
  defaultInput: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.07,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 2,
    fontSize: 18,
    color: "black",
    paddingLeft: screenHeight * 0.03,
    padding: 10,
  },
  symptomContainer: {
    width: screenWidth * 0.83,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 12,
  },
  symptomInputContainer: {
    flexDirection: "row",
    width: screenWidth * 0.9,
    marginTop: 12,
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 12,
  },
  symptomsContainer: {
    borderRadius: 12,
    borderWidth: 2,
    height: screenHeight * 0.343,
    width: screenWidth * 0.9,
    paddingTop: 10,
  },
  appointmentContainer: {
    padding: 10,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
  },
  appointmentsContainer: {
    borderRadius: 12,
    borderWidth: 2,
    height: screenHeight * 0.535,
    width: screenWidth * 0.9,
    padding: 10,
  },
});

export default styles;
