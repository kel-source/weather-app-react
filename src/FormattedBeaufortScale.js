import React from "react";

export default function FormattedBeaufortScale(props) {
  if (props.windSpeed <= 2) {
    return <font color={"#D2D3C9"}>Calm</font>;
  } else if (props.windSpeed <= 5) {
    return <font color={"#41AEA9"}>Light air</font>;
  } else if (props.windSpeed <= 11) {
    return <font color={"#41AEA9"}>Light breeze</font>;
  } else if (props.windSpeed <= 19) {
    return <font color={"#41AEA9"}>Gentle breeze</font>;
  } else if (props.windSpeed <= 28) {
    return <font color={"#41AEA9"}>Moderate breeze</font>;
  } else if (props.windSpeed <= 38) {
    return <font color={"#41AEA9"}>Fresh breeze</font>;
  } else if (props.windSpeed <= 49) {
    return <font color={"#F6830F"}>Strong breeze</font>;
  } else if (props.windSpeed <= 61) {
    return <font color={"#F6830F"}>High wind</font>;
  } else if (props.windSpeed <= 74) {
    return <font color={"#F6830F"}>Gale</font>;
  } else if (props.windSpeed <= 88) {
    return <font color={"#F6830F"}>Strong gale</font>;
  } else if (props.windSpeed <= 102) {
    return <font color={"#A20A0A"}>Storm</font>;
  } else if (props.windSpeed <= 117) {
    return <font color={"#A20A0A"}>Violent storm</font>;
  } else if (props.windSpeed >= 118) {
    return <font color={"#A20A0A"}>Hurricane force</font>;
  }
}
