import React from "react";
import { useAuth } from "../../api/context/AuthContext";
export default function Index() {
  const { user ,logout , } = useAuth();
const onSubmit = () => {
    logout();
  }
  console.log(user);
  return <div>

<h1 className="m-10">Index, bienvenida {user.rol}</h1>


<button className="bg-red-500" onClick={onSubmit}>
    <h1>Cerra Session</h1>
</button>

  </div>
}
