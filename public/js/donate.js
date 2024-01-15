const handleContinue = async () => {
  const donorName = document.getElementById("donorName").value;
  const phone = document.getElementById("phone").value;
  const donorEmail = document.getElementById("donorEmail").value;
  const amount = document.getElementById("amount").value;
  const donationType = document.getElementById("donationType").value;
  const message = document.getElementById("message").value;

  const data = {
    donorName,
    phone,
    donorEmail,
    amount,
    donationType,
    message,
  };

  try {
    const response = await fetch("/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const parsedData = await response.json();
    alert(parsedData.message);
  } catch (error) {
    alert(error);
  }
};
