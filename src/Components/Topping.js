export default function Topping(props) {
  const { name, onChange, orderForm } = props;
  return (
    <label>
      {name.charAt(0).toUpperCase() + name.slice(1)}:
      <input
        onChange={onChange}
        checked={orderForm[`${name}`]}
        name={`${name}`}
        id={`${name}-input`}
        type="checkbox"
      />
    </label>
  );
}
