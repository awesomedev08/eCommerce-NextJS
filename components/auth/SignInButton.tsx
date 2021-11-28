import { useAuth } from './hooks/useAuth';

export const SignInButton = () => {
  const { signIn } = useAuth();
  const handleSignIn = () => signIn('github');

  return (
    <button
      onClick={handleSignIn}
      className="mt-6 group outline-none relative w-28 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
    >
      Zaloguj się
    </button>
  );
};
