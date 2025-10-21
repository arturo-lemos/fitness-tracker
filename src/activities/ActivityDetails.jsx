import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getActivityById, deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export default function ActivityDetails() {
  const { activityId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const data = await getActivityById(activityId);
        setActivity(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchActivity();
  }, [activityId]);

  const tryDelete = async () => {
    try {
      await deleteActivity(token, activityId);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  if (error) return <p role="alert">{error}</p>;
  if (!activity) return <p>Loading...</p>;

  return (
    <>
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
      <p>
        <strong>Creator:</strong> {activity.creator?.username || "Unknown"}
      </p>

      {token && <button onClick={tryDelete}>Delete</button>}
    </>
  );
}
