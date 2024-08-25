import { FaUserCircle } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { ROUTES } from '../../app/constants/routes';
import Button from '../Button';

interface AuthButtonsProps {}

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  const { data: session } = useSession();
  const isLoggedIn = !!session;
  return (
    <>
      {isLoggedIn ? (
        <div className="w-7 h-7 relative">
          {session.user?.image ? (
            <Image
              src={session.user?.image as string}
              fill
              alt=""
              className="object-cover rounded-full"
            />
          ) : (
            <FaUserCircle
              size={30}
              className="text-gray-600 hover:text-gray-900"
            />
          )}
        </div>
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
};

export default AuthButtons;
