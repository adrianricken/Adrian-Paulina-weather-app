export default function Form({ onAddActivity }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    const isForGoodWeather = formElements.isForGoodWeather.checked;
    const name = formElements.name.value;

    // create the newActivity object with the 'name' and 'isForGoodWeather' keys
    const data = {
      name: name,
      isForGoodWeather: isForGoodWeather,
    };

    // Call the onAddActivity prop with the data object
    onAddActivity(data);

    // reset the form fields after submission
    event.target.reset();

    // focus on first input field
    event.target.elements.name.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Activity</h2>

      <div>
        <label htmlFor="name">Activity Name:</label>
        <input type="text" name="name" id="name" required maxLength={100} />
      </div>

      <div>
        <label htmlFor="isForGoodWeather">Good Weather Activity:</label>
        <input type="checkbox" name="isForGoodWeather" id="isForGoodWeather" />
      </div>

      <button type="submit">Add Activity</button>
    </form>
  );
}
