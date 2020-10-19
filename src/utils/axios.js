import axios from "axios";
import { endpointUrl } from "./variables";

const instance = axios.create({
  // here we can add the base url but the endpoint gives the next value with the url
  baseURL: endpointUrl,
});

export default instance;
