const privacyButton = document.querySelector("#privacyPolicySubmitButton");
const localStorageButton = document.querySelector("#localStorageSubmitButton");

// COOKIES
privacyButton.addEventListener("click", () => {
  const todayDate = new Date().toLocaleString();
  const AGREED_PRIVACY_POLICY_VERSION = "AGREED_PRIVACY_POLICY_VERSION";
  const versionString = `version: ${todayDate}`;

  document.cookie = `${AGREED_PRIVACY_POLICY_VERSION}=${versionString}`;
});

// Local Storage

localStorageButton.addEventListener("click", () => {
  const todayDate = new Date().toLocaleString();
  const AGREED_PRIVACY_POLICY_VERSION = "AGREED_PRIVACY_POLICY_VERSION";
  const versionString = `version: ${todayDate}`;

  localStorage.setItem(AGREED_PRIVACY_POLICY_VERSION, versionString);
});
