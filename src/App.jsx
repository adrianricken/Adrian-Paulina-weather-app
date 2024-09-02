import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form/Form";
import List from "./components/List/List";

export default function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(data) {
    setActivities([
      ...activities,
      {
        id: uid(),
        name: data.name,
        isForGoodWeather: data.isForGoodWeather,
      },
    ]);
  }
  console.log(activities);

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}
