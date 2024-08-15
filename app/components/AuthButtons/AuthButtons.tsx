import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { ROUTES } from '../../constants/routes';

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
      <>
        <Link
          href={ROUTES.LOGIN.path}
          className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded border mr-2"
        >
          Log in
        </Link>
        <Link
          href={ROUTES.SIGNUP.path}
          className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-200"
        >
          Sign up
        </Link>
      </>
    )}
  </>
);

export default AuthButtons;
