const endpoint = process.env.REACT_APP_API_ENDPOINT;
const apikey = process.env.REACT_APP_ACCESS_KEY;

if (!endpoint || !apikey) {
  console.error("Environment variables are not set correctly.");
}
const apiConfig = {
  endpoint: endpoint,
  apiKey: apikey,
};

export default apiConfig;
