import { useState } from "react";

export default function Form({ onAddActivity }) {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // create the newActivity object with the 'name' and 'isForGoodWeather' keys
    const newActivity = {
      name,
      isForGoodWeather,
    };

    // Call the onAddActivity prop with the data object
    onAddActivity(newActivity);

    setName("");
    setIsForGoodWeather(false);

    // reset the form fields after submission
    // event.target.reset();
    // focus on first input field
    event.target.elements.activityName.focus();

    console.log(newActivity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Activity</h2>

      <div>
        <label htmlFor="activityName">Activity Name:</label>
        <input
          type="text"
          id="activityName"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="isGoodWeather">Good Weather Activity:</label>
        <input
          type="checkbox"
          id="isGoodWeather"
          checked={isForGoodWeather}
          onChange={(event) => setIsForGoodWeather(event.target.checked)}
        />
      </div>

      <button type="submit">Add Activity</button>
    </form>
  );
}
