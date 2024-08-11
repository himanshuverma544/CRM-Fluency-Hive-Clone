export default function Divider({ className = "" }) {

  return (
    <div className={`divider-cont ${className}`}>
      <hr className="divider"/>
    </div>
  );
}
