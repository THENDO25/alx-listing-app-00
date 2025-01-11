import { FilterProps } from '../interfaces';

const Pill = ({ label, active }: FilterProps) => {
  return (
    <button
      className={`pill ${active ? 'active' : ''}`}
    >
      {label}
    </button>
  );
};

export default Pill;