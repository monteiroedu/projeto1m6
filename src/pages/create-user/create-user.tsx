import { useState } from "react";
import { Form, InputProps, InvalidData } from "../../components/form/form";
import { api } from "../../utils/api/api";
import { UserPayload } from "../../utils/types/requests";
import { useNavigate } from "react-router-dom";
import { HandleError } from "../../utils/errors/handle-error-modal";

import {
  ContainerHome,
  ContainerHomeTop,
  ContainerHomeTopLeft,
  ContainerHomeTopRight,
  ButtonBack,
  Container,
  ContainerGenre,
  ContainerGame,
} from "./styles";

//import Logo from "../../../assets/images/logo.png";
import Logo from "../../assets/images/logo.png";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export function CreateUser() {
  const navigate = useNavigate();

  const inputOptions: InputProps[] = [
    {
      name: "Name",
      type: "text",
      placeholder: "name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "email",
    },
    {
      name: "password",
      type: "text",
      placeholder: "password",
    },
    {
      name: "cpf",
      type: "text",
      placeholder: "cpf",
    },
  ];

  function validateData(data: UserPayload) {
    let dataIsValid = true;
    const error = {
      fields: [] as string[],
    };
    if (data.password.length < 8) {
      error.fields.push("password");
      dataIsValid = false;
    }

    if (!data.email.includes(".com")) {
      error.fields.push("email");
      dataIsValid = false;
    }

    if (!dataIsValid) {
      console.log(error);
      HandleError({ message: "Erro no(s) campo: " + error.fields.join(", ") });
    }

    return dataIsValid;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      name: e.currentTarget.Name.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
      cpf: e.currentTarget.cpf.value,
    };

    const isValid = validateData(data);

    console.log(data);

    if (isValid) {
      await api.createUser(data);
      navigate("/");
    }
  }

  return (
    // <div>
    //   <Form title={"Register"} inputs={inputOptions} onSubmit={handleSubmit} />
      
    // </div>
    <ContainerHome>
      <ContainerHomeTop>
        {/* <ContainerHomeTopLeft>
          <ButtonBack
            onClick={() => {
              navigate("/");
            }}
          >
            <BsFillArrowLeftCircleFill size={25} />
          </ButtonBack>
        </ContainerHomeTopLeft> */}
        {/* <ContainerHomeTopRight>
          <img
            style={{
              display: "flex",
              width: 250,
              height: 70,
              // objectFit: 'cover',
              // backgroundColor: 'pink'
            }}
            alt="Imagem"
            src={Logo}
          />
        </ContainerHomeTopRight> */}
        <img
            style={{
              display: "flex",
              width: 250,
              height: 70,
              // objectFit: 'cover',
              // backgroundColor: 'pink'
            }}
            alt="Imagem"
            src={Logo}
          />
      </ContainerHomeTop>
      <Container>
        <Form title={"Register"} inputs={inputOptions} onSubmit={handleSubmit} />
      </Container>
    </ContainerHome>
  );
}