const recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
const recaptchaSecretKey = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;

if (!recaptchaSiteKey || !recaptchaSecretKey) {
  console.error("Environment variables are not set correctly.");
}
const recaptchaConfig = {
  recaptchaSiteKey: recaptchaSiteKey,
  recaptchaSecretKey: recaptchaSecretKey,
};

export default recaptchaConfig;
