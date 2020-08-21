import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    ); //fetch와 비슷 npm install axios로 설치해야함.
    this.setState({ movies: movies.data.data.movies, isLoading: false });
  }; // axios는 때때로 느리기 때문에 async와 await으로 완료될 때까지 대기

  componentDidMount() {
    this.getMovies();
  } // jsx이기 때문에 html의 class tag를 헷갈려하므로 className을 쓴다. 실제 HTML 상에서는 class라고 보임.
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="flex justify-center">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  bg_poster={movie.background_image}
                  runtime={movie.runtime}
                  rating={movie.rating}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;

// 함수의 argument를 가져오는 방법에는 arg.propery 또는 { property } 두 가지가 있다.

// class App extends React.Component {
//   state = { // state는 수정 불가능이고 object
//     count: 0
//   };

//   add = () => {
//     this.setState({ count: this.state.count + 1 }); // state를 수정하면 render를 새로고침해야되는데 setState가 이를 해결해준다. 그리고 setState는 새로운 state를 받아야 한다. setState는 render를 다시 해준다. state가 바뀌었기 때문
//   };
//   minus = () => {
//     this.setState(current => ({ count: current.count - 1 })); // state를 set 할 때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법. 위의 방법은 추천하지 않음.
//   };

//   render() {
//     return (<div>
//       <h1>The number is {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//     </div>);
//   }
// } // class component이기 때문에 return 대신 render 메소드 사용
// // 중괄호 {} 안은 javascript를 의미
// export default App;
