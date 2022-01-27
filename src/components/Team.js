const Team = ({
  id,
  teamId,
  name,
  venue,
  clubName,
  locationName,
  division
}) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={`https://www.mlbstatic.com/team-logos/${teamId}.svg`}
            width={20}
            height={20}
            alt={`Team ${name}`}
          />
          <span className="ms-2">{name}</span>
        </div>
      </td>
      <td>{venue}</td>
      <td>{clubName}</td>
      <td>{locationName}</td>
      <td>{division}</td>
    </tr>
  );
};

export default Team;
