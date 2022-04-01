import { ImOffice } from "react-icons/im";

const Register = () => {
  return (
    <div className=" flex justify-center">
      <div className="mt-24 h-[650px] w-[400px] rounded-xl bg-gradient-to-b from-rose-400 via-orange-100 to-orange-100 shadow-xl">
        <div className="float-left p-8 text-white">
          <ImOffice size="120" />
          <h1 className="text-2xl">Company Name</h1>
        </div>
        <div className="pt-[230px]">
          <h1 className="px-8 text-4xl font-semibold text-white ">Sign in</h1>
          <form action="POST" className="flex mt-2 p-8  justify-center items-center">
            <div>
              <input
                id="email"
                name="email"
                type="text"
                className="h-10  w-[300px] border-0 border-b-2 border-slate-300 bg-inherit focus:border-rose-400 focus:outline-none focus:ring-0"
                placeholder="Email Address"
              />
              <div className="pt-10">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="h-10 w-[300px] border-0 border-b-2 border-slate-300 bg-inherit focus:border-rose-400 focus:outline-none focus:ring-0"
                  placeholder="Password"
                />
                <input type="submit" value="Sign in" className="mt-14 px-32 h-10  rounded-xl bg-rose-400 font-semibold text-white hover:bg-rose-500" />
              </div>
            </div>
          </form>
          <div className="box-border mx-32 text-center">
          <a href="#" className="text-rose-400 hover:text-rose-500 hover:underline">Forgot Password</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
