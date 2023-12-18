/* eslint-disable react/prop-types */
import { publicUrl } from "../repository/supabase";
import "./CardRecomendation.scss";
import { Link } from "react-router-dom";

export default function Recomendation({ merchants }) {
  return (
    <>
      <div className="recomendation-list">
        {merchants?.map((merchants) => (
          <div className="item-wrapper" key={merchants?.id}>
            <Link to={`/merchants/${merchants.id}`}>
            <img
              src={`${publicUrl}/${merchants?.id}/${merchants?.picture}`}
              alt={merchants.name}
            />
            
            <div className="text-wrapper">
            <h4 className="title-text">{merchants.title}</h4>
              <p className="alamat-text">{merchants.address}</p>
              <p className="distance-text">1km</p>
              <p className="description-text">{merchants.description}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
