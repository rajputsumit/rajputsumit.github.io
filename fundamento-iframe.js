// embed-iframe.js
console.log("fundamento iframe embed script attached!");
// Create a <style> element
var styleTag = document.createElement("style");

// Define your CSS rules as text content
var cssRules = `
    .iframe-icon {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: #007bff;
        border-radius: 50%;
        cursor: pointer;
    }

    #floating-iframe {
        display: none;
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 400px;
        height: 300px;
        border: none;
    }
`;

// Set the CSS rules as the text content of the <style> tag
styleTag.textContent = cssRules;

// Append the <style> tag to the <head> of the document
document.head.appendChild(styleTag);

// Create the icon element
var icon = document.createElement("div");
icon.classList.add("iframe-icon");
icon.innerHTML(
  "<img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' width='40px' />"
);
document.body.appendChild(icon);

// Create the iframe element
var iframe = document.createElement("iframe");
iframe.id = "floating-iframe";
iframe.width = "420px";
iframe.height = "650px";
iframe.src = "https://bot.fundamento.ai";
iframe.style.display = "none"; // Initially hide the iframe
document.body.appendChild(iframe);

// Toggle iframe visibility on icon click
icon.addEventListener("click", function () {
  if (iframe.style.display === "none") {
    iframe.style.display = "block";
  } else {
    iframe.style.display = "none";
  }
});
