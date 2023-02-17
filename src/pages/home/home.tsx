import { useEffect, useState } from "react";
import axios from "axios";
import {
  ContainerHome,
  ContainerHomeTop,
  ContainerHomeTopLeft,
  ContainerHomeTopRight,
  ButtonBack,
  ContainerTitle,
  Container,
  ContainerGenre,
  CardGenre,
  ContainerGame,
  CardGame,
  CardGameText,
  CardGameImage,
  ContainerBotao,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Logo from "../../assets/images/logo.png";
import { api } from "../../utils/api/api";
import { UserPayload } from "../../utils/types/requests";
import { Genre, Game } from "../../utils/types/requests";

export function Home() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [games, setGames] = useState<Game[]>([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  async function findGenres() {
    const data = await api.getGenres();
    setGenres(data);
  }

  async function findGames() {
    const data = await api.getGames();
    setGames(data);
  }

 // async function createGenre() {
   // const data = await api.createGenre();
    // setGames(data);
  //s}

  useEffect(() => {
    findGenres();
    findGames();
  }, []);

  // fetch(`${"https://xbox-live-api.onrender.com/genre"}`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`, // Not always needed with a GET request
  //   },
  // })
  //   .then((response) => Promise.all([response, response.json()]))

  //   .then(([response, json]) => {
  //     // console.log('response', response);
  //     if (!response.ok) {
  //       // We should get a 200 (OK) status code if everything is fine/working
  //       throw Error(
  //         `Respsonse status ${response.status} (${response.statusText}): ${json.message}`
  //       );
  //     }
  //     console.log(json);
  //     // setGenres(json);
  //     // Whatever you want to do next after fetching - maybe dispatch something?
  //   })
  //   .catch((exception) => {
  //     console.log(
  //       new Map([
  //         [TypeError, "There was a problem fetching the response."],
  //         [SyntaxError, "There was a problem parsing the response."],
  //         [Error, exception.message],
  //       ]).get(exception.constructor())
  //     );
  //   });

  // fetch(`${"https://xbox-live-api.onrender.com/game"}`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`, // Not always needed with a GET request
  //   },
  // })
  //   .then((response) => Promise.all([response, response.json()]))
  //   .then(([response, json]) => {
  //     // console.log('response', response);
  //     // setGenres(json);
  //     if (!response.ok) {
  //       // We should get a 200 (OK) status code if everything is fine/working
  //       throw Error(
  //         `Respsonse status ${response.status} (${response.statusText}): ${json.message}`
  //       );
  //     }
  //     // console.log('JJJ',json);
  //     // setGenres(json);
  //     // Whatever you want to do next after fetching - maybe dispatch something?
  //   })
  //   .catch((exception) => {
  //     console.log(
  //       new Map([
  //         [TypeError, "There was a problem fetching the response."],
  //         [SyntaxError, "There was a problem parsing the response."],
  //         [Error, exception.message],
  //       ]).get(exception.constructor())
  //     );
  //   });

  // console.log('genreee', genres)

  //   const [data, setData] = useState({ hits: [] });

  //   useEffect(() => {
  //     const url = "https://api.adviceslip.com/genre";

  //     const fetchData = async () => {
  //         try {
  //             const response = await fetch(url);
  //             const json = await response.json();
  //             console.log(json.slip.advice);
  //             setGenres(json.slip.advice);
  //         } catch (error) {
  //             console.log("error", error);
  //         }
  //     };

  //     fetchData();
  // }, []);

  // useEffect(async () => {
  //   const result = await axios(
  //     'https://hn.algolia.com/api/v1/search?query=redux',
  //   );

  //   setData(result.data);
  // });

  //   useEffect(() => {
  //     // api.getGenre();
  // }, [setGenres(result)]);

  return (
    <ContainerHome>
      <ContainerHomeTop>
        <ContainerHomeTopLeft>
          <ButtonBack
            onClick={() => {
              navigate("/");
            }}
          >
            <BsFillArrowLeftCircleFill size={25} />
          </ButtonBack>
        </ContainerHomeTopLeft>
        <ContainerHomeTopRight>
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
        </ContainerHomeTopRight>
      </ContainerHomeTop>
      <Container>
        <ContainerTitle>GENERO</ContainerTitle>
        <ContainerBotao
          onClick={() => {
            navigate("/creategenre");
            // api.createGenre();
          }}
        >
          Criar Genero
        </ContainerBotao>
        <ContainerGenre>
          {genres.map((genre) => {
            return (
              <CardGenre key={genre.id}>
                <span>{genre.Name}</span>
              </CardGenre>
            );
          })}
        </ContainerGenre>
        <ContainerTitle>GAMES</ContainerTitle>
        <ContainerGame>
          {games.map((game) => {
            return (
              <CardGame key={game.id}>
                <CardGameImage>
                  <img src={game.CoverImageUrl} width={300} height={220} />
                </CardGameImage>
                <CardGameText>
                  <span>{game.Title}</span>
                </CardGameText>
              </CardGame>
            );
          })}
        </ContainerGame>
      </Container>
    </ContainerHome>
  );
}
