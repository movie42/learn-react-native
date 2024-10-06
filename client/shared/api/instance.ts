import axios from "axios";
import Constants from "expo-constants";

export const http = axios.create({
  baseURL: `${Constants.expoConfig?.extra?.API_URL}/api`,
  headers: {
    "Content-Type": "application/json"
  }
});
