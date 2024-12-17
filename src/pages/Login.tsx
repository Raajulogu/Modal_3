import { LoginForm } from '../components/Auth/LoginForm';
import { AnimatedBackground } from '../components/3D/Background';
import { Header } from '../components/Layout/Header';

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
       <div className='absolute top-0 w-full'>
      <Header/>
      </div>
      <AnimatedBackground />
      
      <LoginForm />
    </div>
  );
};