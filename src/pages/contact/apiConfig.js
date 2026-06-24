const endpoint = import.meta.env.VITE_API_ENDPOINT;
const apikey = import.meta.env.VITE_ACCESS_KEY;

if (!endpoint || !apikey) {
  console.error("Environment variables are not set correctly.");
}
const apiConfig = {
  endpoint: endpoint,
  apiKey: apikey,
};

export default apiConfig;
