document.getElementById("subscription-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Send email using Brevo API
  sendEmail(name, email);
});

function sendEmail(name, email) {
  // Call Brevo API to send email
  // You need to replace 'YOUR_API_KEY' and 'YOUR_SENDER_EMAIL' with actual values
  fetch("https://api.brevo.io/v1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "YOUR_API_KEY",
    },
    body: JSON.stringify({
      to: email,
      from: "YOUR_SENDER_EMAIL",
      subject: "Thanks for Subscribing",
      html: "<p>Thanks for subscribing, " + name + "!</p>",
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email. Please try again later.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while sending the email. Please try again later.");
    });
}
