import { House, Wallet, Ungroup, Users, CircleUserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-footer fixed bottom-0 w-full py-4 inset-x-0 text-center justify-around items-center flex flex-row">
      <House className="h-4 w-4 text-black hover:text-pink" onClick={() => navigate("/")}/>
      <Ungroup className="h-4 w-4 text-black hover:text-pink" onClick={() => navigate("/activity")} />
      <Wallet className="h-4 w-4 text-black hover:text-pink" onClick={() => navigate("/wallet")} />
      <Users className="h-4 w-4 text-black hover:text-pink" onClick={() => navigate("/groups")} />
      <CircleUserRound className="h-4 w-4 text-black hover:text-pink" onClick={() => navigate("/account")} />
    </div>
  )
}        

export default Footer