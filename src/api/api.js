import axios from "axios";

export const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4D"

export const api = axios.create({
  baseURL: baseURL,
});

