import { ImageRequireSource } from "react-native";

const DELETE = require('@/assets/images/delete.png') as ImageRequireSource;

const AVATAR = {
  MALE: require('@/assets/images/avatar-male.png') as ImageRequireSource,
  FEMALE: require('@/assets/images/avatar-female.png') as ImageRequireSource,
};

const GENDER = {
  MALE: require('@/assets/images/gender-male.png') as ImageRequireSource,
  FEMALE: require('@/assets/images/gender-female.png') as ImageRequireSource,
};

const DIRECTION = {
  RIGHT:require('@/assets/images/direction/direction-right.png') as ImageRequireSource,
  DOWN: require('@/assets/images/direction/direction-down.png') as ImageRequireSource,
  LEFT: require('@/assets/images/direction/direction-left.png') as ImageRequireSource,
  UP: require('@/assets/images/direction/direction-up.png') as ImageRequireSource,
};

export default {
  DELETE,
  AVATAR,
  GENDER,
  DIRECTION,
};