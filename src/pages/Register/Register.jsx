import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function Register() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </HelmetProvider>
    </div>
  );
}
