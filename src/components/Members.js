import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Member from "./Member";

const Members = () => {
  const { teamId } = useParams();

  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://statsapi.mlb.com/api/v1/teams/${teamId}/roster?rosterType=active`
      )
      .then(async ({ status, data }) => {
        console.log(data);
        const { roster } = data;
        setMembers(
          await Promise.all(
            roster.map(
              async ({ person: { id: memberId, fullName: name, link } }) => {
                const {
                  data: {
                    people: [
                      {
                        height,
                        weight,
                        birthDate,
                        batSide: { code: batSideCode },
                        pitchHand: { code: pitchHandCode }
                      }
                    ]
                  }
                } = await axios.get(`https://statsapi.mlb.com${link}`);
                return {
                  memberId,
                  name,
                  height,
                  weight,
                  birthDate,
                  bt: `${batSideCode}/${pitchHandCode}`
                };
              }
            )
          )
        );
      })
      .catch((err) => console.log(err));
  }, [teamId]);

  return (
    <div className="App container">
      <div className="p-3">
        <Link to="/">
          <button className="btn btn-primary">Back</button>
        </Link>
        <h2 className="mt-4">Members</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">B/T</th>
                <th scope="col">Ht</th>
                <th scope="col">Wt</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              {members.map(
                ({ memberId, name, height, weight, birthDate, bt }, id) => (
                  <Member
                    key={memberId}
                    id={id}
                    teamId={memberId}
                    name={name}
                    height={height}
                    weight={weight}
                    birthDate={birthDate}
                    bt={bt}
                  />
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Members;
