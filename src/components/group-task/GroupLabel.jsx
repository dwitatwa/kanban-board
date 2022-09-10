const setColor = (color) => {
  if (color === "primary") return "tasklabel tasklabel--primary";
  if (color === "secondary") return "tasklabel tasklabel--secondary";
  if (color === "danger") return "tasklabel tasklabel--danger";
  if (color === "success") return "tasklabel tasklabel--success";
};

function GroupLabel({ color, title }) {
  return <div className={setColor(color)}>{title}</div>;
}

export default GroupLabel;
