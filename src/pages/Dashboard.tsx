import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Layout/Header';
import { AnimatedBackground } from '../components/3D/Background';
import { BarChart, Settings } from 'lucide-react';
import { ButtonBase } from '../components/UI/ButtonBase';
import { Card } from '../components/UI/Card';

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigate=()=>{
    window.open("http://localhost:5000/local-page")
  }

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card>
            <ButtonBase
              onClick={handleNavigate}
              variant="glass"
              size="lg"
              className="w-full flex-col"
            >
              <BarChart size={48} className="text-blue-400 mb-3" />
              <span>S&OP Sites</span>
            </ButtonBase>
          </Card>

          <Card>
            <ButtonBase
              onClick={() => navigate('/automation')}
              variant="glass"
              size="lg"
              className="w-full flex-col"
            >
              <Settings size={48} className="text-purple-400 mb-3" />
              <span>Automation</span>
            </ButtonBase>
          </Card>
        </div>
      </main>
    </div>
  );
};