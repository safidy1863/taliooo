import logo from "./../../../../assets/logo/rohy.svg";
import { Input } from "./components";
import { useForm } from "react-hook-form";
import { LoginType } from "./types/login.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema/login.schema";

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

  return (
    <div className="bg-white2 h-screen grid grid-cols-2">
      <div className="bg-green"></div>
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
          <div className=" w-full">
            <button type="submit" className="bg-green">
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
