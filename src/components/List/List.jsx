import "./List.css";

export default function List({ weather, activities, onDeleteActivity }) {
  return (
    <div className="container_list">
      <h2 className="heading">
        {weather ? (
          <>
            The weather is awesome! <br /> Go outside and:
          </>
        ) : (
          <>
            Bad weather outside! <br /> Here's what you can do now:
          </>
        )}
      </h2>
      <ul className="activities-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-list-item">
            <h3 className="activity-name">{activity.name}</h3>

            <button
              onClick={() => onDeleteActivity(activity.id)}
              className="activity-button"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
