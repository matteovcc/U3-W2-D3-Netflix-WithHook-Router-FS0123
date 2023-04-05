import { Component } from "react";
// import { Button, Card, Badge } from "react-bootstrap";
import "../assets/images.css";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

class SingleMovie extends Component {
  state = {
    movies: [],
    isLoading: true,
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=bbacec44&s=harry%20potter"
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({ movies: data.Search, isLoading: false });
      } else {
        console.log("errore nel recupero dei dati");
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <img
          src={this.props.img}
          alt={this.props.title}
          className="img-fluid rounded film-card"
          style={{
            objectFit: "cover",
            height: "250px",
            width: "250px",
            objectPosition: "top",
          }}
        />
        {/* <div>
            <Link to= {"/FilmDetails/" + film.imbdID}>
          <Button variant="danger" className="mt-3">Vedi Dettagli</Button>
            </Link>
          </div> */}
      </>
    );
  }
}

export default SingleMovie;
