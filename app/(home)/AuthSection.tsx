import AuthForm from '@/components/AuthForm';

const AuthSection = () => {
  return (
    <div className="w-full lg:w-1/2 p-2 py-4 sm:py-6 justify-center md:py-8 lg:py-0 flex items-center lg:bg-transparent lg:ml-12 lg:justify-start">
      <AuthForm mode="signup" />
    </div>
  );
};

export default AuthSection;
