const setColor = (color) => {
  if (color === "primary") return "tasklabel tasklabel--primary";
  if (color === "secondary") return "tasklabel tasklabel--secondary";
  if (color === "danger") return "tasklabel tasklabel--danger";
  if (color === "success") return "tasklabel tasklabel--success";
};

function GroupLabel({ color }) {
  return <div className={setColor(color)}>Group Task 1</div>;
}

export default GroupLabel;
