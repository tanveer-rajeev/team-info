import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import banner from '../Photo/banner-2.jpg';
import './Home.css';
const Home = () => {

    const [ teams, setTeams ] = useState([]);

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain";
        fetch(url)
            .then(response => response.json())
            .then(data => {                
                const { teams } = data;
             setTeams(teams);
            })
            .catch(error => console.log(error))
    },[])


    return (
        <div className="container">
            <div className="image-container mt-5">
                <img className="home-banner" src={banner} alt=""/>
                <div className="centered"><span id="projectName" >SPORTS-MANIA</span></div>
            </div>
            <div className="row">
            {
                teams.map(team=><Team name={team} key={team.idTeam}></Team>)
            }
            </div>
        </div>
    );
};

export default Home;