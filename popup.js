document.addEventListener('DOMContentLoaded', function () {
  const toggleHighlightingCheckbox = document.getElementById('toggleHighlightingCheckbox');

  // Load the current highlighting state from storage and update the checkbox
  chrome.storage.local.get(['isHighlighting'], function (result) {
    const isHighlighting = result.isHighlighting || false;
    toggleHighlightingCheckbox.checked = isHighlighting;
  });

  // Handle checkbox change event
  toggleHighlightingCheckbox.addEventListener('change', function () {
    const isHighlighting = toggleHighlightingCheckbox.checked;
    chrome.runtime.sendMessage({ action: 'toggleHighlighting', isHighlighting });

    // Save the highlighting state in storage
    chrome.storage.local.set({ isHighlighting: isHighlighting });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Automatically capture the current URL when the extension popup is opened
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    var url = currentTab.url;
    document.getElementById('product_url').value = url;
  });

  document.getElementById('scrape_button').addEventListener('click', function () {
    var url = document.getElementById('product_url').value.trim();
    chrome.runtime.sendMessage({ action: "scrape", url: url }, function (response) {
      displayResult(response);
    });
  });
});

function displayResult(result) {
  console.log('Response received:', result);
  if (result && result.product_title && result.product_mrp && result.product_category && result.product_selling_price && result.percentage && result.msg) {
    console.log('Displaying result:', result);
    document.getElementById('result_section').style.display = 'block';
    document.getElementById('product_title').textContent = result.product_title;
    document.getElementById('product_mrp').textContent = result.product_mrp;
    document.getElementById('product_category').textContent = result.product_category;
    document.getElementById('product_selling_price').textContent = result.product_selling_price;
    document.getElementById('percentage').textContent = result.percentage;
    document.getElementById('msg').textContent = result.msg;
  } else {
    console.error('Invalid result received:', result);
    // Handle the error, e.g., display a message to the user
  }
}

