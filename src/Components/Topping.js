export default function Topping(props) {
  const { name } = props;
  return (
    <label>
      {name.charAt(0).toUpperCase() + name.slice(1)}:
      <input name={`${name}-input`} id={`${name}-input`} type="checkbox" />
    </label>
  );
}
