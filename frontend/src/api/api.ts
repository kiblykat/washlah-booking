import axios from "axios";

//configure base URL of mock API for use in project
const BASE_URL = "https://washlah-booking-api.vercel.app/";
// const BASE_URL = "http://localhost:4000/";
const bookingAPI = axios.create({ baseURL: BASE_URL });

export default bookingAPI;
