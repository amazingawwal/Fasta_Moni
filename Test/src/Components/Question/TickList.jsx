

function TickList({ items }) {
  return (
    <ul className="tick-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default TickList;
