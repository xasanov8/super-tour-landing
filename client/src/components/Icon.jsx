export default function Icon({ id, className = "ic" }) {
  return (
    <svg className={className}>
      <use href={`#${id}`} />
    </svg>
  );
}
