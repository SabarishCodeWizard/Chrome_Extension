Chrome Extension


**Overview**

This Chrome extension allows users to scrape product information from e-commerce websites directly from their browser. It utilizes a popup interface for entering the product URL and provides real-time scraping functionality.


**Features**


1)Scrapes product information from popular e-commerce platforms such as Flipkart, Amazon, and Meesho.
2)Offers a simple and intuitive user interface with a popup for entering the product URL.
3)Utilizes background scripts for handling scraping requests and communicating with the Flask server.
4)Provides real-time feedback on the product title and MRP through the extension popup.


**Installation**


Clone or download the repository to your local machine.
Open Google Chrome and navigate to chrome://extensions/.
Enable Developer mode by toggling the switch in the top right corner.
Click on "Load unpacked" and select the directory containing the extension files.


**Usage**


Once installed, click on the extension icon in the Chrome toolbar to open the popup.
Enter the URL of the product you want to scrape in the input field.
Click the "Scrape" button to initiate the scraping process.
The extension will display the product title and MRP retrieved from the provided URL in real-time.


**Running Procedure in Chrome**


1)Open Google Chrome and navigate to chrome://extensions/.
2)Enable Developer mode by toggling the switch in the top right corner.
3)Click on "Load unpacked" and select the directory containing the extension files.
4)The extension will be loaded and accessible from the Chrome toolbar.


**Troubleshooting**


If the extension does not work as expected, ensure that the Flask server is running and accessible at the specified endpoint (http://localhost:5000/scrape).
Check the browser console for any error messages or logs that may indicate issues with the extension.


**Contributing**


Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.


License
This project is licensed under the MIT License - see the LICENSE file for details.
