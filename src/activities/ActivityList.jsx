import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useState } from "react";

export default function ActivityList({ activities, syncActivities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  return (
    <li>
      <Link to={`/activities/${activity.id}`}>{activity.name}</Link>
    </li>
  );
}
