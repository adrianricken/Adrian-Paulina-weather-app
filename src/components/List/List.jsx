export default function List({ activities }) {
  // if (!Array.isArray(activities)) {
  //   return null; // or handle the case when activities is not an array
  // }
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
