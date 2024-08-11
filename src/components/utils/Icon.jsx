const Icon = ({ className = "", icon: TheIcon, style = {} }) => (
 
  <TheIcon 
    className={`icon ${className}`} 
    style={style}
  />
);

export default Icon;