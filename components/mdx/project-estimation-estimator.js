import { useState } from "react";

function FormInput({
  label,
  id,
  type = "text",
  onChange = (updatedValue) => {},
  Component = "input",
  labelProps,
  containerProps,
  ...props
}) {
  return (
    <div className="form-group" {...containerProps}>
      {label && (
        <label className="form-label" {...labelProps}>
          {label}
        </label>
      )}
      <Component
        className="form-control"
        id={id}
        name={id}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </div>
  );
}

export default function ProjectEstimationEstimator() {
  const [pricePerHour, setPricePerHour] = useState(50);
  const [workDaysInMonth, setWorkDaysInMonth] = useState(22);
  const [numberOfPeople, setNumberOfPeople] = useState(4);
  const [effortRate, setEffortRate] = useState(2);
  const [personExpense, setPersonExpense] = useState(2000);

  const [newTask, setNewTask] = useState("");
  const [newEffort, setNewEffort] = useState(16);

  const [tasks, setTasks] = useState([]);

  const totalTimeRequired = Math.ceil(
    tasks.reduce((accumulator, current) => {
      return accumulator + current.effort;
    }, 0) * effortRate
  );

  const projectDeadline = Math.ceil(totalTimeRequired / (workDaysInMonth * 6));
  const projectDevelopmentCost =
    Number(totalTimeRequired) * Number(pricePerHour);

  const projectOnboardingCost = Number(personExpense) * Number(numberOfPeople);

  const projectTotalCost = projectDevelopmentCost + projectOnboardingCost;

  const projectAdvanceCost = projectTotalCost * 0.2;
  const projectPerMonthPayout =
    (projectTotalCost * 0.8) /
    (Number(projectDeadline) < 1 ? 1 : Number(projectDeadline));

  const projectPerMonthPerPersonPayout =
    projectPerMonthPayout / Number(numberOfPeople);

  const onClickAddTask = () => {
    if (newTask.trim() == "") {
      alert("Please enter a task description!");
      setNewTask("");
      return;
    }
    setTasks([
      ...tasks,
      {
        name: newTask,
        effort: newEffort,
      },
    ]);
    setNewTask("");
    setNewEffort(16);
  };

  return (
    <div className="article-project-estimation">
      <FormInput
        id="pricePerHour"
        label="What is your hourly rate?"
        type="number"
        value={pricePerHour}
        onChange={setPricePerHour}
      />
      <FormInput
        id="workDaysInMonth"
        label="How many days do you work in month?"
        type="number"
        value={workDaysInMonth}
        onChange={setWorkDaysInMonth}
      />
      <FormInput
        id="numberOfPeople"
        label="How many people are in your team?"
        type="number"
        value={numberOfPeople}
        onChange={setNumberOfPeople}
      />
      <FormInput
        id="effortRate"
        label="How long is 1 effort worth of work?"
        type="number"
        value={effortRate}
        onChange={setEffortRate}
      />
      <FormInput
        id="personExpense"
        label="Person Onboarding Expense (Laptop, Internet)"
        type="number"
        value={personExpense}
        onChange={setPersonExpense}
      />

      <label className="form-label" style={{ marginBottom: "30px" }}>
        Define Your Tasks
      </label>
      <table className="table">
        <thead>
          <tr>
            <td width="10">No.</td>
            <td>Task</td>
            <td>Effort</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td width="10">{index + 1}</td>
              <td>{task.name}</td>
              <td>{task.effort}</td>
              <td className="center">
                <div>
                  <button
                    className="btn-delete"
                    onClick={() => {
                      tasks.splice(index, 1);
                      setTasks([...tasks]);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td className="center">
              <div>
                <FormInput
                  id="numberOfPeople"
                  value={newTask}
                  onChange={setNewTask}
                  className="form-control sm"
                  containerProps={{
                    style: { marginTop: "10px", marginBottom: "10px" },
                  }}
                />
              </div>
            </td>
            <td className="center">
              <div>
                <FormInput
                  id="numberOfPeople"
                  value={newEffort}
                  onChange={setNewEffort}
                  type="number"
                  className="form-control sm"
                  containerProps={{
                    style: { marginTop: "10px", marginBottom: "10px" },
                  }}
                />
              </div>
            </td>
            <td className="center">
              <div>
                <button className="btn-primary" onClick={onClickAddTask}>
                  Add Task
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      <h3>Total Time Required : {totalTimeRequired} hours</h3>
      <h3>Project Deadline : {projectDeadline} months</h3>
      <h3>Development Cost : ${projectDevelopmentCost}</h3>
      <h3>Onboarding Cost : ${projectOnboardingCost}</h3>
      <h3>Total Cost : ${projectTotalCost}</h3>
      <h3>Advance : ${projectAdvanceCost}</h3>
      <h3>Per Month Payout : ${projectPerMonthPayout}</h3>
      <h3>Per Month Per Person Payout : ${projectPerMonthPerPersonPayout}</h3>
    </div>
  );
}
