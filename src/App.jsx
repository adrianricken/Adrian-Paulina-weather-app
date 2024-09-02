import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import { uid } from "uid";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const isGoodWeather = true;

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  function handleAddActivity(data) {
    setActivities([...activities, { id: uid(), ...data }]);
  }

  return (
    <>
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
