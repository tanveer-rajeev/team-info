
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import male from '../Photo/male.png'
import female from '../Photo/female.png'
import banner from '../Photo/home-banner-image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TeamDetails.css';
import { faFacebook,  faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const TeamDetails = () => {

    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const { strGender, strTeamBadge, strTeam, strCountry,
        strTeamBanner, strDescriptionEN, strFacebook, strInstagram,
        strTwitter, strYoutube } = details;
    let teamImage,teamBanner;

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const { teams } = data;
                const team = teams[0];
                setDetails(team);
            })
    },[id])
  

    if (strGender === 'Male') {
        teamImage = <img className="teamImage" src={male}alt=""></img>
    } else {
        teamImage =  <img className="teamImage" src={female}alt=""></img>
    }
    if (strTeamBanner!=null || strTeamBanner===" ") {
               teamBanner =  <img className="home-banner" src={strTeamBanner} alt=""/>             
    } else {
            teamBanner = <img className="home-banner" src={banner} alt=""/>
                  
    }
   

    return (
        <div className="container  justify-content-center">
            <div className="image-container  mt-5">
                {teamBanner}
                <div className="centered"><img className="logo" src={strTeamBadge} alt="" /></div>
            </div>
            <div className=" container-div d-flex mt-2 teamDetails">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h5><FontAwesomeIcon icon={faBroadcastTower} /> {strTeam}</h5>
                            <h5><FontAwesomeIcon icon={faCheckCircle} /> Founded: </h5>
                            <h5><FontAwesomeIcon icon={faFlag} /> Country: { strCountry}</h5>
                            <h5><FontAwesomeIcon icon={faFutbol} /> Sports Type: Football</h5>
                            <h5><FontAwesomeIcon icon={faUser} /> Gender : { strGender}</h5>
                        </div>
                        <div className="col-md-4 ">
                            {teamImage}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4 mb-5">
                <p>
                    {strDescriptionEN}
                </p>
            </div>
            <div className="footer-section text-center justify-content-center mt-5 ">
                <a className = "m-2"target="_blank" href={`https://${strFacebook}`} rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x"/>
                </a>
                <a className = "m-2"target="_blank" href={`https://${strYoutube}`} rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="2x"/> 
                </a>
               
                <a className = "m-2"target="_blank" href={`https://${strInstagram}`} rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
                <a className = "m-2"target="_blank" href={`https://${strTwitter}`} rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x"/>
                </a>
            </div>
        </div>
    );
};

export default TeamDetails;