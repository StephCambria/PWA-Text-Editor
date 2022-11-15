const butInstall = document.getElementById("buttonInstall");

// https://web.dev/codelab-make-installable/
// ^^^^ Reference for beforeinstallprompt and window.deferredPrompt ^^^^

//=================================
//=================================
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
//=================================
//=================================
// "When the browser fires the beforeinstallprompt event, that's the indication that the Progressive Web App can be installed,"
// "and an install button can be shown to the user."
// "The beforeinstallprompt event is fired when the PWA meets the installability criteria."
// https://web.dev/install-criteria/
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  // Storing the events
  window.deferredPrompt = event;
  // Use class lists to show and hide the install button
  butInstall.classList.toggle("hidden", false);
});

//=================================
//=================================
// TODO: Implement a click event handler on the `butInstall` element
//=================================
//=================================
butInstall.addEventListener("click", async () => {
  // "To show the install prompt, call prompt() on the saved beforeinstallprompt event."
  // "Calling prompt() is done in the install button click handler because prompt() must be called from a user gesture."
  const promptEvent = window.deferredPrompt;
  // End the function if the deferred prompt is unavailable
  if (!promptEvent) {
    return;
  }
  // Show prompt
  promptEvent.prompt();
  // Resets the deferred prompt variable
  window.deferredPrompt = null;
  // Use class lists again to show and hide the install button
  butInstall.classList.toggle("hidden", true);
});

//=================================
//=================================
// TODO: Add an handler for the `appinstalled` event
//=================================
//=================================
// "Installing a Progressive Web App through an install button is only one way users can install a PWA."
// "You can track all ways of installation by listening for the appinstalled event."
window.addEventListener("appinstalled", (event) => {
  console.log("appinstalled", event);
  // Clear the prompt
  window.deferredPrompt = null;
});
