import "./Form.css";

export default function Form({ onAddActivity }) {
  // event handler function to declare what happens when clicking submit
  const handleSubmit = (event) => {
    // prevent the form from submitting to server and causing a page reload
    event.preventDefault();

    // shortcut to prevent writing event.target.elements
    const formElements = event.target.elements;
    // store value of isForGoodWeather (true / false)
    const isForGoodWeather = formElements.isForGoodWeather.checked;
    // store activity entered in "name" input field
    const name = formElements.name.value;

    // declare the data object (new activity) with the 'name' and 'isForGoodWeather' keys
    const data = {
      name: name,
      isForGoodWeather: isForGoodWeather,
    };

    // call the onAddActivity function with the data object
    onAddActivity(data);

    // reset the form fields after submission
    event.target.reset();

    // focus on first input field after submitting
    event.target.elements.name.focus();
  };

  // returning JSX elements (render)
  return (
    <form onSubmit={handleSubmit} className="form">
      <hr className="form-divider"></hr>
      <h2 className="form-heading">Add a new activity</h2>

      <div className="input-name-container">
        <label htmlFor="name"></label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          className="input-name"
          required
          maxLength={50}
          placeholder="- enter activity name -"
        />
      </div>

      <div>
        <label htmlFor="isForGoodWeather" className="checkbox-container">
          Good weather activity?
          <input
            type="checkbox"
            name="isForGoodWeather"
            id="isForGoodWeather"
            className="checkbox-input"
          />
          <span className="checkbox-emoji">☀️</span>
        </label>
      </div>

      <button type="submit" className="submit-button">
        Add activity
      </button>
    </form>
  );
}
