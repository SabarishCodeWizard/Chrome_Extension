let isHighlighting = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleHighlighting') {
    isHighlighting = !isHighlighting; // Toggle highlighting
  }

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];
    
    // Send a single message to the content script to toggle highlighting
    chrome.tabs.sendMessage(activeTab.id, { action: 'toggleHighlighting', isHighlighting });

    // Save the highlighting state in storage
    chrome.storage.local.set({ isHighlighting: isHighlighting });
  });
});

// Retrieve the highlighting state from storage on extension startup
chrome.storage.local.get(['isHighlighting'], function(result) {
  isHighlighting = result.isHighlighting || false;
});


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "scrape") {
        console.log("URL to scrape:", message.url); // Log the URL
        fetch("http://localhost:5000/scrape", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: message.url })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Response from server:", data); // Log the response
            sendResponse(data);
        })
        .catch(error => console.error('Error fetching data:', error));
        return true; // This line tells Chrome to wait for sendResponse
    }
});
