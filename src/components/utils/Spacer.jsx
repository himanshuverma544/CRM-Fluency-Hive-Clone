export default function Spacer({ className = "", type = "vertical", space = 0 }) {

  return (
    <div
      className={`${className} px-5`}
      style={{ padding: `calc(${space} * 0.25rem) 0` }}
    >
    </div>
  );
}
