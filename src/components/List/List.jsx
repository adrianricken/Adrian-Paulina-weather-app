export default function List({ activities }) {
  console.log(activities);

  return (
    <>
      <ul className="activities-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-list__item">
            <h3>{activity.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
