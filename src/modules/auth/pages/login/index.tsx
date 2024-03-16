import logo from "./../../../../assets/logo/rohy.svg";
import { Input } from "./components";
import { SemiCircle } from "./components/";
import { Mode } from "./components/";
import { useForm } from "react-hook-form";
import { LoginType } from "./types/login.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema/login.schema";
import { useState } from "react";

export const Login = () => {
  const form = useForm<LoginType>({
    mode: "all",
    resolver: yupResolver(loginSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleClickSubmit = (values: LoginType) => {
    console.log(values);
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-white2 h-screen grid grid-cols-2">
      <div className="bg-green relative h-full flex flex-col justify-center items-center text-white">
        
         <h1 className="text-4xl font-bold">RohyMalagasy</h1>
         <p className="text-center">Explore a wealth of information for your success</p>
         <button className="bg-white text-black px-4 py-2 mt-4 rounded-full">Read More</button>
        <SemiCircle />
     </div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit(handleClickSubmit)}
          className=" flex flex-col gap-y-10 items-center"
        >
          <div className="">
            <img src={logo} alt="rohy" />
            <h1 className="mt-3 text-center">Welcome to ROHY application</h1>
          </div>

          <div className="w-full flex flex-col gap-y-8">
            <Input
              id="email"
              type="email"
              label="Your e-mail"
              register={register("email")}
              error={errors.email?.message}
            />
            <Input
              id="password"
              type="password"
              label="Password"
              register={register("password")}
              error={errors.password?.message}
            />
          </div>
        <div className="w-full flex flex-col gap-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptConditions"
              />
              <label htmlFor="acceptConditions" className="ml-2">
                I accept the <span className="text-green">Terms an conditions</span>
              </label>
            </div>
            
          <button type="submit" className="bg-green text-white px-4 py-2 rounded-full">
              GET STARTED
            </button>
          </div>   
        </form>
      </div>
      <Mode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};
