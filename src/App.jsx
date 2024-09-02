import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import { uid } from "uid";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState([]);
  const [condition, setCondition] = useState("");
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    async function loadWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const data = await response.json();
        if (!response.ok) {
          console.log("Bad response");
        } else {
          setWeather(data.isGoodWeather);
          setCondition(data.condition);
          setTemperature(data.temperature);
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadWeather();
  }, []);

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );

  function handleAddActivity(data) {
    setActivities([...activities, { id: uid(), ...data }]);
  }

  return (
    <>
      <h1>
        {condition} {temperature}°C
      </h1>
      <List activities={filteredActivities} weather={weather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
