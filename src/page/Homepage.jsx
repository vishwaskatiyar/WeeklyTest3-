import PropTypes from "prop-types";
import AllEmployees from "../component/AllEmployees";
import TeamMember from "../component/TeamMember";
import { useState } from "react";

const Homepage = ({ employees }) => {
  const [allEmployees, setAllEmployees] = useState(employees);
  const [teamMembers, setTeamMembers] = useState([]);

  const addToTeam = (employee) => {
    const updateEmployees = allEmployees.map((emp) => {
      if (emp.id === employee.id) {
        return { ...emp, added: true };
      }
      return emp;
    });
    setAllEmployees(updateEmployees);
    setTeamMembers([...teamMembers, employee]);
  };

  const removeFromTeam = (employee) => {
    const updateEmployees = allEmployees.map((emp) => {
      if (emp.id === employee.id) {
        return { ...emp, added: false };
      }
      return emp;
    });
    setAllEmployees(updateEmployees);
    setTeamMembers(teamMembers.filter((tm) => tm.id !== employee.id));
  };

  const calculateAverageAge = () => {
    if (teamMembers.length === 0) return 0;
    const totalAge = teamMembers.reduce((acc, cur) => acc + cur.age, 0);
    return (totalAge / teamMembers.length).toFixed(1);
  };

  const sortTeamMembers = () => {
    const sortedTeam = [...teamMembers].sort((a, b) => a.age - b.age);
    setTeamMembers(sortedTeam);
  };

  return (
    <div className="bg-gray-100 p-10 min-h-screen flex flex-col space-y-10">
      <div className="flex space-x-10">
        <AllEmployees employees={allEmployees} allTOTeam={addToTeam} />
        <TeamMember
          team={teamMembers}
          removeFromTeam={removeFromTeam}
          averageAge={calculateAverageAge()}
          sortTeamMembers={sortTeamMembers}
        />
      </div>
    </div>
  );
};

Homepage.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Homepage;
