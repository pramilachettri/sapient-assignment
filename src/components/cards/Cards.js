import React from 'react';
import './Cards.css';
import defaultImage from '../../assets/images/default_image.png';

const Cards = (props) =>  {
  const { mission_name, flight_number, mission_id, launch_year, launch_success, rocket, links } = props;
    return (
      <div className="card">
        <img src={links ? links : defaultImage} alt="SpacEx Images" className="card-image"/>
        <div className="container">
          <h5 className="card-flight-number">{mission_name} #{flight_number}</h5>
          <h5>Mission Ids: {mission_id && mission_id.length > 0 ? 
            mission_id.map(m => (
              <li className="mission-list" key={m}>{m}</li>
            )) : <li className="mission-list">No ID's found</li>
            }
        </h5>
          <h5>Launch Year: <span className="cmn-data">{launch_year}</span></h5>
          <h5 className="succ_launch">Successfull Launch: &nbsp;<span className="cmn-data">{launch_success}</span></h5>
          <h5>Successfull Landing: <span className="cmn-data">{rocket}</span></h5>
        </div>
      </div>
    )
}

export default Cards;         