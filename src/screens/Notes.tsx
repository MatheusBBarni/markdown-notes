import { useNavigate } from "react-router-dom";

export default function Notes() {
  const navigate = useNavigate();

  return (
    <div>
      <div>Notes</div>
      <button onClick={() => navigate('/')}>Go to home</button>
    </div>
  );
}