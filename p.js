document.querySelector("#submit").addEventListener("click", async () => {
    const rollNo = document.querySelector("#roll_no").value;

    if (rollNo.trim() === "") {
        document.querySelector("#result").innerText = "Please enter a roll number!";
        return;
    }

    try {
        const response = await fetch("/get_prn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ roll_no: rollNo })
        });

        const data = await response.json();

        if (response.ok) {
            document.querySelector("#result").innerText = `PRN: ${data.prn}`;
        } else {
            document.querySelector("#result").innerText = data.error;
        }
    } catch (error) {
        console.error("Error:", error);
        document.querySelector("#result").innerText = "Something went wrong. Please try again.";
    }
});
