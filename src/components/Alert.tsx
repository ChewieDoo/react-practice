interface Props {
  children: string;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-light">
      <button className="btn-close" onClick={() => onClose()}></button>
      {children}
    </div>
  );
};

export default Alert;
