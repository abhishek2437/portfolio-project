document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.querySelector("input[placeholder='Your Name']").value;
    const email = document.querySelector("input[placeholder='Your Email']").value;
    const message = document.querySelector("textarea").value;

    try {
        const response = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();
        alert(data.message);   // ✅ FIXED

    } catch (error) {
        alert("Error sending message");
        console.log(error);
    }
});

