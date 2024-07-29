import userBanner from '../../../assets/userBanner.jpg';
import profile from '../../../assets/profile-png';

const user = {
  firstName: "RAHUL",
  lastName: "SAJEEVAN",
  preferredUsername: "Paigo",
  email: "test2@gmail.com",
  password: "$2b$10$rGF4sLX9hxlbXgY8EzHX1uStDUP4IM8liAGRY52JJuiDw7e8psdBm",
  phoneNumber: "8606149231",
  profileBanner: userBanner,
  profilePicture: profile,
  bio: "This is the user's bio",
};

const Profile = () => {
  return (
    <div className='text-black'>
      <div className="flex flex-col w-full px-[1vw] max-lg:px-5 2xl:px-[15vw] relative text-blackBg">
        <img
          width={175}
          height={175}
          loading={"lazy"}
          src={user.profileBanner}
          alt={"Profile background"}
          className="w-[1000px] border border-solid aspect-[5] border-stone-50 max-md:max-w-full"
        />
        <div className="flex z-10 flex-col pr-0.5 pl-3.5 w-[94%] lg:w-[84%] mt-4 2xl:w-[calc(84%-15vw)] absolute top-[80%]">
          <div className="flex gap-5 justify-between items-center w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col self-stretch">
              <div className="flex flex-auto gap-2 items-center">
                <img
                  loading={"lazy"}
                  width={130}
                  height={130}
                  src={user.profilePicture}
                  alt={"Profile picture"}
                  className="self-start max-w-full border-solid aspect-square border-[5px] rounded-button&card border-stone-50"
                />
                <div className="flex flex-col">
                  <div className="mt-9 text-3xl flex gap-3">
                    <h1>{user.firstName}</h1>
                    <h1>{user.lastName}</h1>
                  </div>
                  <div className="mt-3 text-2xl">@{user.preferredUsername}</div>
                  <div className="mt-1 text-xl">{user.email}</div>
                  <div className="mt-1 text-xl">{user.phoneNumber}</div>
                </div>
              </div>
              <p className="mt-2.5 text-base italic">{user.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
