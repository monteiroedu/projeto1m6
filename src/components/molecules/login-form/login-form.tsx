import { FormEvent, useState } from "react";
import { StyledForm, StyledLoginForm } from "./styles";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { api } from "../../../utils/api/api";
import { useNavigate } from "react-router-dom";
import { Loading } from "../loading/loading";
import Logo from '../../../assets/images/logo.png';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const loginPayload = {
      Email: e.currentTarget.email.value,
      Password: e.currentTarget.password.value,
    };
    const userData = await api.login(loginPayload);
    setLoading(false);
    console.log(userData);
    if (!userData) {
      setError(true);
      return;
    }
    navigate("/home");
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StyledLoginForm>
          <img
            style={{
              display: 'flex',
              width: 250,
              height: 70,
              // objectFit: 'cover',
              // backgroundColor: 'pink'
            }}
            alt='Imagem'
            src={Logo}
          />
          <h2>Login</h2>
          <StyledForm onSubmit={handleSubmit} error={error}>
            <input
              placeholder="Seu email"
              name="email"
              required
              value={"marcus.silva@gmail.com"}
            />
            <div>
              <input
                placeholder="Sua senha"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={"Abcd@1234"}
              />
              <button onClick={handleShowPassword}>
                {showPassword ? (
                  <BsEyeSlashFill size={25} />
                ) : (
                  <BsEyeFill size={25} />
                )}
              </button>
                          </div>
            <button type="submit">Login</button>
            <button
            onClick={() => {
              navigate("/register");
            }}
          >
            Criar Conta
          </button>
          </StyledForm>
        </StyledLoginForm>
      )}
    </>
  );
}