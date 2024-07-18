import { useAuth } from "../../contexts/authContext";

const UserProfile = () => {
  const { logoutHandler } = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <img
            src={`https://avatars.dicebear.com/api/initials/${user.firstName}%20${user.lastName}.svg?b=%238553fa&r=50&size=80&fontSize=40`}
            alt={fullName}
          />
        </div>
        <div className="text-center my-3">
          <p className="font-bold">{fullName}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
      <button
        className="w-full border bg-primary text-white hover:bg-primary/90 text-sm px-2 py-1"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </>
  );
};

export { UserProfile };
