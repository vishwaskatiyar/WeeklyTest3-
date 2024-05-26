import PropTypes from "prop-types";

const AllEmployees = ({ employees, allTOTeam }) => {
  return (
    <div className="bg-white w-1/2 p-5 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">All Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li
            key={employee.id}
            className="flex justify-between items-center mb-2"
          >
            <span>
              {employee.first_name} {employee.last_name}, {employee.age} years
              old
            </span>
            {!employee.added && (
              <button
                onClick={() => allTOTeam(employee)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Add
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

AllEmployees.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      added: PropTypes.bool,
    })
  ).isRequired,
  allTOTeam: PropTypes.func.isRequired,
};

export default AllEmployees;
