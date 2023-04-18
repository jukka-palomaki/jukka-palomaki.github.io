console.log('Hello from script.js!');

/* Only register a service worker if it's supported */
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}
  