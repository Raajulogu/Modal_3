import { LoginForm } from '../components/Auth/LoginForm';
import { AnimatedBackground } from '../components/3D/Background';

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatedBackground />
      <LoginForm />
    </div>
  );
};