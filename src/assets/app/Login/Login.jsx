import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../api/context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const { inicioDeSession, isAutehnticated, error: errorLogin } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await inicioDeSession(data);
      navigate;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAutehnticated) {
      navigate("/index");
    }
  }, [isAutehnticated]);

  return (
    <div className="flex flex-col justify-center">
      <h1 className="m-10">Login</h1>

      <form
        className="flex flex-col text-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errorLogin &&
          errorLogin.map((error, index) => (
            <span key={index} className="text-white bg-red-500 rounded">
              {error}
            </span>
          ))}

        <input
          className="p-4"
          type="text"
          placeholder="usuario"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">Este campo es requerido</span>
        )}
        <input
          className="p-4"
          type="password"
          placeholder="contraseña"
          {...register("contrasena", { required: true })}
        />
        {errors.contrasena && (
          <span className="text-red-500">Este campo es requerido</span>
        )}

        <button type="submit" className="p-4 bg-blue-500 text-white">
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
}
