import React from "react";
import "../index.css";
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    const comp = this.props.location.state;
    if (location.state) {
      return (
        <div className="flex flex-col items-center">
          <div className="mt-12 w-2/3">
            <div className="flex flex-row">
              <img src={comp.poster} className=""></img>
              <div className="ml-10 mt-3">
                <div className="font-bold text-2xl">{comp.title}</div>
                <div className="mt-px font-semibold text-lg">{comp.year}</div>
                <div className="mt-px font-semibold text-lg">
                  Runtime: {comp.runtime}
                </div>
                <div className="mt-px font-semibold text-lg">
                  Rating: {comp.rating}
                </div>
                <div className="font-semibold text-lg">Genres:</div>
                <ul className="genres ml-5">
                  {comp.genres.map((genre, index) => (
                    <li key={index} className="genres__genre">
                      {genre}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 w-2/3">
            <div className="font-semibold text-xl">Synopsis</div>
            <div className="">{comp.summary}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
