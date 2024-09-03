import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import { uid } from "uid";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import "./App.css";

function App() {
  // localStorage to keep activities after refreshing / restarting
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  // set default value of states of the keys inside data
  const [weather, setWeather] = useState([]);
  const [condition, setCondition] = useState("");
  const [temperature, setTemperature] = useState("");

  // function to add activities to the array 'activities'
  function handleAddActivity(data) {
    setActivities([...activities, { id: uid(), ...data }]);
  }

  // function to remove activities from the array 'activities'
  // parameter = id (of the activity that should be deleted)
  function handleDeleteActivity(id) {
    // update state of 'activities' with .filter() to include all activities EXCEPT (!==) the one that has been clicked
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  // function to fetch data from API
  async function loadWeather() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      // changes the received response from a string into a JS-object (with keys and values)
      const data = await response.json();

      // if error as response -> log error message
      if (!response.ok) {
        console.log("Bad response");

        // response ok -> update state with fetched data (values from object)
      } else {
        setWeather(data.isGoodWeather);
        setCondition(data.condition);
        setTemperature(data.temperature);
      }

      // if error occures -> log error
    } catch (error) {
      console.error(error);
    }
  }

  // why 'useEffect'
  // - for calling the function - without the function 'loadWeather' would be called every time the page is re-rendered
  // - asynchronous data
  useEffect(() => {
    loadWeather();
    // - handles asynchronous data by loading the weather info and setting it up to update every 5 seconds
    const intervalID = setInterval(loadWeather, 5000);
    return () => clearInterval(intervalID);
  }, []);

  // 'useEffect' changes the body's class based on the weather
  // -> adds class to body if dependency weather = true ("good-weather") / false ("bad-weather") is matched
  useEffect(() => {
    document.body.className = weather ? "good-weather" : "bad-weather";
  }, [weather]);

  // filters the activity list so that only activities that are relevant for the current weather are displayed
  // -> 'isForGoodWeather' and 'weather' have same value - true or false
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );

  // returning JSX elements (render)
  return (
    <div className="container">
      <h1 id="weather">
        {condition} {temperature}°C
      </h1>
      <hr className="divider"></hr>
      <List
        weather={weather}
        // activities = prop, {} = prop-value
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
