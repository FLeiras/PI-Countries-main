import { useDispatch } from "react-redux";
import { deleteActivity } from "../../redux/actions";
import "./ActivityCard.css";

const ActivityCard = ({ id, name, difficult, duration, season, countryId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteActivity(id, countryId));
    window.location.reload();
  };

  return (
    <div className="activity_container">
      <div className="activity_detail">
        <p>
          <b>Actividad : </b>
          {name}
        </p>
        <p>
          <b>Dificultad : </b>
          {difficult}
        </p>
        <p>
          <strong>Duration : </strong>
          {duration} Horas
        </p>
        <p>
          <strong>Temporada : </strong>
          {season}
        </p>
      </div>

      <div className="btnDel">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ActivityCard;
