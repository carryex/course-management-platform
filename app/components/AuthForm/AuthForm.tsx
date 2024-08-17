import React from 'react';
import {
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaApple,
} from 'react-icons/fa';
import Button from '../Button';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const isLogin = mode === 'login';

  return (
    <div className="p-6 rounded-lg bg-white max-w-md">
      <h2 className="text-2xl font-bold mb-6">
        {isLogin
          ? 'Log in to Platform'
          : 'Join the millions learning to code with Platform for free'}
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email or username*
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder={isLogin ? 'Email or username' : 'Email'}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password*</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {isLogin && (
          <div className="mb-4">
            <a href="#" className="text-blue-600 hover:underline">
              I forgot my password
            </a>
          </div>
        )}
        <Button color="primary" variant="contained" size="sm" fullWidth>
          {isLogin ? 'Log in' : 'Sign Up'}
        </Button>
      </form>
      <div className="mt-4 text-left">
        <p className="text-sm">
          By signing up, you agree to the Platform Terms of Service and This
          site is protected by reCAPTCHA and the Google Privacy Privacy Privacy
          Policy and Terms of Service apply.
        </p>
      </div>
      <div className="mt-6 text-left">
        <p className="text-md mb-4 font-semibold">
          Or {isLogin ? 'log in' : 'sign up'} using:
        </p>
        <div className="flex justify-start space-x-4">
          <FaGoogle className="text-2xl cursor-pointer" />
          <FaFacebook className="text-2xl cursor-pointer" />
          <FaLinkedin className="text-2xl cursor-pointer" />
          <FaGithub className="text-2xl cursor-pointer" />
          <FaTwitter className="text-2xl cursor-pointer" />
          <FaApple className="text-2xl cursor-pointer" />
        </div>
      </div>

      <div className="mt-6 text-center">
        {isLogin ? (
          <>
            <p className="text-sm">
              Not a member yet?{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up for free
              </a>
            </p>
          </>
        ) : (
          <>
            <p className="text-sm">
              Already have an account?{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
