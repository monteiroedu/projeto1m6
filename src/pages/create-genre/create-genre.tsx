import { FormEvent, useState } from "react";
import { Form, InputProps, InvalidData } from "../../components/form/form";
import { api } from "../../utils/api/api";
import { GenrePayload } from "../../utils/types/requests";
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
import Logo from "../../assets/images/lsogo.png";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export function CreateGenre() {

  const navigate = useNavigate()
  const userId: string | null = localStorage.getItem('userId')

  // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   // setLoading(true);

  //   const GenrePayload = {
  //     Name: e.currentTarget.nome.value,
  //   };

  //   const userData = await api.createGenre(GenrePayload);
  //   // setLoading(false);
  //   // console.log(userData);
  //   // if (!userData) {
  //   //   // setError(true);
  //   //   return;
  //   // }
  //   navigate("/home");
  // }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // setLoading(true);

    const nome = {
      Name: e.currentTarget.nome,
    };
    // alert('TELA' + nome);

    const userData = await api.createGenre(nome);
    // // setLoading(false);
    // console.log(userData);
    // if (!userData) {
    //   // setError(true);
    //   return;
    // }
    navigate("/creategenre");
  }
  // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //     e.preventDefault();

  //     const createPayload = {
  //         Nome: e.currentTarget.Nome.value
  //         // CoverImageUrl: e.currentTarget.CoverImageUrl.value,
  //         // Description: e.currentTarget.Description.value,
  //         // Year: e.currentTarget.Year.value,
  //         // ImdbScore: e.currentTarget.ImdbScore.value,
  //         // TrailerYouTubeUrl: e.currentTarget.TrailerYouTubeUrl.value,
  //         // GameplayYouTubeUrl: e.currentTarget.GameplayYouTubeUrl.value,
  //         // genres: e.currentTarget.genres.value
  //     };

  //     // const userData = await api.createGenre(createPayload)

  //     // navigate('/homepage/' + userId)
  // }
  // const inputOptions: InputProps[] = [
  //   {
  //     name: "Name",
  //     type: "text",
  //     placeholder: "name",
  //   },
  //   {
  //     name: "email",
  //     type: "email",
  //     placeholder: "email",
  //   },
  //   {
  //     name: "password",
  //     type: "text",
  //     placeholder: "password",
  //   },
  //   {
  //     name: "cpf",
  //     type: "text",
  //     placeholder: "cpf",
  //   },
  // ];

  // function validateData(data: UserPayload) {
  //   let dataIsValid = true;
  //   const error = {
  //     fields: [] as string[],
  //   };
  //   if (data.password.length < 8) {
  //     error.fields.push("password");
  //     dataIsValid = false;
  //   }

  //   if (!data.email.includes(".com")) {
  //     error.fields.push("email");
  //     dataIsValid = false;
  //   }

  //   if (!dataIsValid) {
  //     console.log(error);
  //     HandleError({ message: "Erro no(s) campo: " + error.fields.join(", ") });
  //   }

  //   return dataIsValid;
  // }

  // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   const data = {
  //     name: e.currentTarget.Name.value,
  //     email: e.currentTarget.email.value,
  //     password: e.currentTarget.password.value,
  //     cpf: e.currentTarget.cpf.value,
  //   };

  //   const isValid = validateData(data);

  //   console.log(data);

  //   if (isValid) {
  //     await api.createUser(data);
  //     navigate("/");
  //   }
  // }

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
        {/* <Form title={"Register"} inputs={inputOptions} onSubmit={handleSubmit} /> */}

        <form className="form-game" 
          onSubmit={handleSubmit}
        >
          <h2>Adicionar Genero</h2>
            <input placeholder="Nome do Genero" name='nome' />
          <button type="submit">Adicionar Genero</button>
        </form>
      </Container>
    </ContainerHome>
  );
}
