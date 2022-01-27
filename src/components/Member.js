const Member = ({ id, name, height, weight, birthDate, bt }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/642758/headshot/silo/current"
            width={20}
            height={20}
            alt={`Team ${name}`}
          />
          <span className="ms-2">{name}</span>
        </div>
      </td>
      <td>{height}</td>
      <td>{weight}</td>
      <td>{birthDate}</td>
      <td>{bt}</td>
    </tr>
  );
};

export default Member;
