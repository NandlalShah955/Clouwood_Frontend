import { io } from "socket.io-client";
import { Backend_Url } from "../helper";

const socket = io(Backend_Url);

export default socket;
