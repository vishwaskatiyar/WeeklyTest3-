import PropTypes from "prop-types";

const TeamMember = ({ team, removeFromTeam, averageAge, sortTeamMembers }) => {
  return (
    <div className="bg-white p-5 w-1/2 rounded shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl  font-bold">TEAM</h2>
        <button
          onClick={sortTeamMembers}
          className="bg-pink-500 text-white px-3 py-1 rounded"
        >
          SORT BY AGE
        </button>
      </div>
      <ul>
        {team.map((member) => (
          <li
            key={member.id}
            className="flex justify-between items-center mb-2"
          >
            <span>{`${member.first_name} ${member.last_name}`}</span>
            <span className="mr-3">{`${member.age} years old`}</span>
            <button
              onClick={() => removeFromTeam(member)}
              className="bg-blue-500 text-white px-3 py-1 mr-3 rounded"
            >
              REMOVE
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 bg-gray-200 p-2 rounded text-center">
        <span className="font-bold m-2">Average Age</span>
        <span className="text-2xl">{averageAge}</span>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromTeam: PropTypes.func.isRequired,
  averageAge: PropTypes.number.isRequired,
  sortTeamMembers: PropTypes.func.isRequired,
};

export default TeamMember;
