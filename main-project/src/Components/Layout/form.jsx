import React, { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit email to Google Apps Script Web App
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwW41Sy-haPy0bGyvK_9rm05Gg3nNEp-G9XmvUaJEYYNzFaGvGNE3oO245EmYZBilZQfA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email: email,
        }),
      }
    );

    if (response.ok) {
      console.log("Email submitted successfully!");
      // Clear input field
      setEmail("");
    } else {
      console.error("Failed to submit email:", response.statusText);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen bg-slate-500 flex flex-col items-center justify-center"
    >
      <label>
        Email:
        <input type="email" value={email} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailForm;
