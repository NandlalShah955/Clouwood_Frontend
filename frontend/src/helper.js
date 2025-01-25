// Created this page so that i don't have to change Backend URL again and again 
const Backend_Url =
  window.location.hostname === "localhost"
    ? "http://localhost:8000/"
    : "https://clouwood-backend-g3o4.onrender.com/";
    
export { Backend_Url};