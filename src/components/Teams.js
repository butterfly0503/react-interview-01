import axios from "axios";
import React, { useState, useEffect } from "react";
import Team from "./Team";

// We want this component to go get the teams from MLB's Stats API
// the request is a GET to `https://statsapi.mlb.com/api/v1/teams?season=2021&sportId=1`
// From there we want to display each team and the members of each team
// To get the members of each team we can call the stats API with the team ID
// GET to `http://statsapi.mlb.com/api/v1/teams/{teamId}/roster?rosterType=active`

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("https://statsapi.mlb.com/api/v1/teams?season=2021&sportId=1")
      .then(({ status, data }) => {
        const { teams } = data;
        setTeams(
          teams.map(
            ({
              id: teamId,
              name,
              venue: { name: venue },
              clubName,
              locationName,
              division: { name: division }
            }) => {
              return { teamId, name, venue, clubName, locationName, division };
            }
          )
        );
      });
  }, []);

  return (
    <div className="p-3">
      <h2>Teams</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Venue</th>
              <th scope="col">Club</th>
              <th scope="col">Location</th>
              <th scope="col">Division</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(
              (
                { teamId, name, venue, clubName, locationName, division },
                id
              ) => (
                <Team
                  key={teamId}
                  id={id}
                  teamId={teamId}
                  name={name}
                  venue={venue}
                  clubName={clubName}
                  locationName={locationName}
                  division={division}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
