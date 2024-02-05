import React from "react";
import { useForm } from "react-hook-form";
import { registroRequest } from "../../api/auth";
import { Link } from "react-router-dom";
export default function RegisterUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await registroRequest(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="m-10">Registro</h1>
      <form
        className="flex flex-col text-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="p-4"
          placeholder="usuario"
          type="text"
          {...register("usuario", { required: true })}
        />
        {errors.usuario && (
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

        <input
          className="p-4"
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">Este campo es requerido</span>
        )}

        <input
          className="p-10"
          placeholder="descripcion"
          type="text"
          {...register("descripcion")}
        />

        <button className="p-4 bg-blue-500 text-white">Registrarse</button>
      </form>
      <Link to={"/login"}>
        <button className="rounded-lg mt-10 bg-blue-500 opacity-50 hover:opacity-100 transition-all text-white">
          Iniciar Sesion
        </button>
      </Link>
    </div>
  );
}
