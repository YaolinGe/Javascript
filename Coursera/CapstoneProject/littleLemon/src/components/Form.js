import "./../styles/Form.css";
import { useState } from "react";
import { validateEmail, validatePhone} from "./utils";
import Button from "./Button";

export default function Form() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberofguests, setNumberOfGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      alert("Table reserved!");
      setStep(1);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setNumberOfGuests("");
      setOccasion("");
      setFirstNameError(false);
      setLastNameError(false);
      setEmailError(false);
      setPhoneError(false);
    }

    if (firstName === "") {
      setFirstNameError(true);
    }

    if (lastName === "") {
        setLastNameError(true);
    }

    if (email === "" || !validateEmail(email)) {
        setEmailError(true);
    }

    if (phone === "" || !validatePhone(phone)) {
        setPhoneError(true);
    }

    console.log(firstName);
  };

  const occasionOptions = [
    "Birthday",
    "Anniversary",
    "School",
    "Work",
    "Other",
  ];

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reserve a table</h2>
      {step === 1 ? (
        <fieldset>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            name="date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Select a time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
          <label htmlFor="numberofguests">Number of guests:</label>
          <select
            id="numberofguests"
            name="numberofguests"
            value={numberofguests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
          >
            <option value="">Select number of guests</option>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            {occasionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </fieldset>
      ) : (
        <fieldset>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder="Required"
            onChange={(e) => {
                setFirstName(e.target.value);
                setFirstNameError(e.target.value === "" && e.target.blur()); 
            }}
            style={firstNameError ? {border: "1px solid red"} : {}}
            required
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            value={lastName}
            placeholder="Required"
            onChange={(e) => {
                setLastName(e.target.value)
                setLastNameError(e.target.value === "" && e.target.blur());
            }}
            style={lastNameError ? {border: "1px solid red"} : {}}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={email}
            placeholder="Required"
            onChange={(e) => {
                setEmail(e.target.value)
                setEmailError(!validateEmail(e.target.value));
            }}
            style={emailError ? {border: "1px solid red"} : {}}
            required
          />
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            value={phone}
            placeholder="Required"
            onChange={(e) => {
                setPhone(e.target.value)
                setPhoneError(!validatePhone(e.target.value));
                console.log("phone", phone, "phoneError", phoneError);
            }}
            style={phoneError ? {border: "1px solid red"} : {}}
            required
          />
        </fieldset>
      )}

    {step===2 && firstNameError && <div className="error-message">Please enter your first name</div>}
    {step===2 && lastNameError && <div className="error-message">Please enter your last name</div>}
    {step===2 && emailError && <div className="error-message">Please enter a valid email address</div>}
    {step===2 && phoneError && <div className="error-message">Please enter a valid phone number (e.g. +4712345678)</div>}
      {step === 1 ? (
        <Button onClick={() => setStep(2)}>Next</Button>
      ) : (
        <div className="step2button">
          <button className="button" onClick={() => setStep(1)}>
            Previous
          </button>
          <Button>Submit</Button>
        </div>
      )}
    </form>
  );
}
