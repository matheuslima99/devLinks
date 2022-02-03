import axios from "axios";

export const key = "0b81d5a5546c14069a627701722cb28d961d8ba9";

export const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});
