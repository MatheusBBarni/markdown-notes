import { useNavigate } from "react-router-dom";
import { invoke } from '@tauri-apps/api/tauri'


export default function Home() {
  const navigate = useNavigate();

  const handleLogPerson = () => {
    try {
      invoke('log_person', { person: {
        name: 'Matheus',
        email: 'matheus@teste.com',
        age: 20
      } })
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div>
      <div>Home</div>
      <button onClick={() => navigate('/notes')}>Go to notes</button>
      <button onClick={handleLogPerson}>Log person</button>
    </div>
  );
}