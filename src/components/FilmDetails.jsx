import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

const FilmDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieComments, setMovieComments] = useState([]);
  const params = useParams();
  const location = useLocation();
  console.log(useParams());

  // params è un oggetto che raccoglie al suo interno tutte le coppie
  // chiave-valore delle sezioni parametriche della vostra rotta
  console.log(location);

  useEffect(() => {
    fetchDetails();
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const movieId = params.imdbId;
  console.log(movieId);

  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=bbacec44&i=` + params.movieId
      );
      if (response.ok) {
        const data = await response.json();
        setMovieDetails(data);
        console.log(data);
      } else {
        console.log("errore nel recupero  dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/` + params.movieID,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYmYyMjE1ZjQzMjAwMTRhNzg2Y2EiLCJpYXQiOjE2ODA1MjMwNDMsImV4cCI6MTY4MTczMjY0M30.xwW-DuuSEs04i-3m7edBFIhcf8wnJJ1zrt6Pdr-w1p8",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setMovieComments(data);
      } else {
        console.log("errore nel recupero dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="text-white">
      <Row>
        <Col md={6}>
          <img src={movieDetails.Poster} alt="" className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <h2 className="text-white">{movieDetails.Title}</h2>
          <p>Anno: {movieDetails.Year}</p>
          <p>Attori: {movieDetails.Actors}</p>
          <p>Genere: {movieDetails.Genre}</p>
          <p>Regista: {movieDetails.Director}</p>
          <p>Scrittrice: {movieDetails.Writer}</p>
          <p className="text-center">
            Trama: <p className="fst-italic">{movieDetails.Plot}</p>
          </p>
          {movieComments.map((comment) => (
            <div className="text-white" key={comment._id}>
              <p>{comment.comment}</p>
              <p>{comment.rate}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FilmDetails;
