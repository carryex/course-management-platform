import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { ROUTES } from '../../constants/routes';
import Button from '../Button';

interface AuthButtonsProps {
  isLoggedIn: boolean;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ isLoggedIn }) => (
  <>
    {isLoggedIn ? (
      <Link href={ROUTES.PROFILE.path}>
        <FaUserCircle size={30} className="text-gray-600 hover:text-gray-900" />
      </Link>
    ) : (
      <div className="gap-2 flex flex-row">
        <Button
          href={ROUTES.LOGIN.path}
          link
          variant="outlined"
          color="secondary"
          size="sm"
        >
          Log in
        </Button>
        <Button
          href={ROUTES.SIGNUP.path}
          link
          variant="contained"
          color="primary"
          size="sm"
        >
          Sign up
        </Button>
      </div>
    )}
  </>
);

export default AuthButtons;
