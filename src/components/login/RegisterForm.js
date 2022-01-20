import { useContext } from "react";
import { UserContext } from "./AuthProvider";
import '../../index.css';
import { axiosInstance } from "../../config/axiosConfig";

const RegisterForm =  ({ setRegisterFormOpen }) => {
  const { setUser } = useContext(UserContext);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(`nickname :${event.target.nickname.value}`);

    const res = await axiosInstance.post("/users", {
      body: JSON.stringify({
        nickname: event.target.nickname.value,
      })
    });
    console.log(res);
    
    const user = await res.json();
    setRegisterFormOpen(false);
    setUser(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='nickname'>
             Enter your nickname
        </label>
        <input className='nickname' type="text" name="nickname" />
        <input className='signup' type="submit" value="Sign up" />
      </form>
    </div>
  );
}

export default RegisterForm;