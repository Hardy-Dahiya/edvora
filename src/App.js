import React from "react";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
class App extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://assessment-edvora.herokuapp.com/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data, loading: false });
  }
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      direction: null,
      // nextIcon: <span className="glyphicon glyphicon-glass"></span>,
      prevIcon: <span className="glyphicon glyphicon-glass"></span>
    };
  }
  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e?.direction
    });
  };

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }
    const { prevIcon } = this.state;
    return (
      <div className="App">
        <div className="dropDownFilter">
          <div>
            {" "}
            <h1 className="filterHeading">Filters</h1>{" "}
            <div className="vector"></div>
          </div>
        </div>

        <div className="filterRectangel">
          <div class="dropdown">
            <div class="dropbtn">
              {" "}
              <h1 className="filterRectangelContent">
                Products <i class="polygone fas fa-caret-down"></i>
              </h1>
            </div>
            <div class="dropdown-content">
              {this.state.person.map((item) => (
                <ol>
                  <a style={{ width: "100%" }} href="">
                    {item.product_name}
                  </a>
                </ol>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "50px" }} className="filterRectangel">
          <div class="dropdown">
            <div class="dropbtn">
              {" "}
              <h1 className="filterRectangelContent">
                State <i class="polygone1 fas fa-caret-down"></i>
              </h1>
            </div>
            <div class="dropdown-content">
              {this.state.person.map((item) => (
                <ol>
                  <a style={{ width: "100%" }} href="">
                    {item.address.state}
                  </a>
                </ol>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "105px" }} className="filterRectangel">
          <div class="dropdown">
            <div class="dropbtn">
              {" "}
              <h1 className="filterRectangelContent">
                City <i class="polygone2 fas fa-caret-down"></i>
              </h1>
            </div>
            <div class="dropdown-content">
              {this.state.person.map((item) => (
                <ol>
                  <a style={{ width: "100%" }} href="">
                    {item.address.city}
                  </a>
                </ol>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h1 className="heading">Edvora</h1>
          <p className="p1">Products</p>
        </div>
        <div>
          <div className="sliderNext">
            <i class="far fa-3x fa-chevron-right"></i>
          </div>
          <div>
            <p className="product_name">Products Name</p>
            <div className="border_line"></div>
          </div>
          <div className="product_container">
            {/* <div className="product_card"></div> */}
            <Carousel
              indicators={false}
              // nextIcon={nextIcon}
              prevIcon={prevIcon}
              controls={true}
              index={this.state.index}
              direction={this.state.direction}
              onSelect={this.handleSelect}
            >
              <Carousel.Item>
                <main className="grid">
                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[0].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[0].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[0].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[0].price}</p>
                    <p className="location">
                      {this.state.person[0].address.state}
                    </p>
                    <p className="date">{this.state.person[0].date}</p>
                    <p className="decerption">
                      {this.state.person[0].discription}
                    </p>
                  </div>

                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[1].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[1].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[1].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[1].price}</p>
                    <p className="location">
                      {this.state.person[1].address.state}
                    </p>
                    <p className="date">{this.state.person[1].date}</p>
                    <p className="decerption">
                      {this.state.person[1].discription}
                    </p>
                  </div>

                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[2].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[2].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[2].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[2].price}</p>
                    <p className="location">
                      {this.state.person[2].address.state}
                    </p>
                    <p className="date">{this.state.person[2].date}</p>
                    <p className="decerption">
                      {this.state.person[2].discription}
                    </p>
                  </div>

                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[3].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[3].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[3].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[3].price}</p>
                    <p className="location">
                      {this.state.person[3].address.state}
                    </p>
                    <p className="date">{this.state.person[3].date}</p>
                    <p className="decerption">
                      {this.state.person[3].discription}
                    </p>
                  </div>
                </main>
              </Carousel.Item>
              <Carousel.Item>
                <main className="grid">
                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[8].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[8].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[8].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[0].price}</p>
                    <p className="location">
                      {this.state.person[8].address.state}
                    </p>
                    <p className="date">{this.state.person[0].date}</p>
                    <p className="decerption">
                      {this.state.person[8].discription}
                    </p>
                  </div>

                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[9].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[9].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[9].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[1].price}</p>
                    <p className="location">
                      {this.state.person[9].address.state}
                    </p>
                    <p className="date">{this.state.person[1].date}</p>
                    <p className="decerption">
                      {this.state.person[9].discription}
                    </p>
                  </div>

                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[10].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[10].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[10].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[2].price}</p>
                    <p className="location">
                      {this.state.person[10].address.state}
                    </p>
                    <p className="date">{this.state.person[2].date}</p>
                    <p className="decerption">
                      {this.state.person[10].discription}
                    </p>
                  </div>

                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[11].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[11].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[11].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[3].price}</p>
                    <p className="location">
                      {this.state.person[11].address.state}
                    </p>
                    <p className="date">{this.state.person[3].date}</p>
                    <p className="decerption">
                      {this.state.person[11].discription}
                    </p>
                  </div>
                </main>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="product_card2">
          <div className="sliderNext">
            <i class="far fa-3x fa-chevron-right"></i>
          </div>
          <div>
            <p className="product_name">Products Name</p>
            <div className="border_line"></div>
          </div>
          <div className="product_container">
            {/* <div className="product_card"></div> */}
            <Carousel
              indicators={false}
              // nextIcon={nextIcon}
              prevIcon={prevIcon}
              controls={true}
              index={this.state.index}
              direction={this.state.direction}
              onSelect={this.handleSelect}
            >
              <Carousel.Item>
                <main className="grid">
                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[4].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[4].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[4].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[4].price}</p>
                    <p className="location">
                      {this.state.person[4].address.state}
                    </p>
                    <p className="date">{this.state.person[4].date}</p>
                    <p className="decerption">
                      {this.state.person[4].discription}
                    </p>
                  </div>
                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[5].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[5].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[5].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[5].price}</p>
                    <p className="location">
                      {this.state.person[5].address.state}
                    </p>
                    <p className="date">{this.state.person[5].date}</p>
                    <p className="decerption">
                      {this.state.person[5].discription}
                    </p>
                  </div>
                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[6].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[6].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[6].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[6].price}</p>
                    <p className="location">
                      {this.state.person[6].address.state}
                    </p>
                    <p className="date">{this.state.person[6].date}</p>
                    <p className="decerption">
                      {this.state.person[6].discription}
                    </p>
                  </div>
                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[7].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[7].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[7].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[7].price}</p>
                    <p className="location">
                      {this.state.person[7].address.state}
                    </p>
                    <p className="date">{this.state.person[7].date}</p>
                    <p className="decerption">
                      {this.state.person[7].discription}
                    </p>
                  </div>
                </main>
              </Carousel.Item>
              <Carousel.Item>
                <main className="grid">
                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[12].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[12].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[12].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[4].price}</p>
                    <p className="location">
                      {this.state.person[12].address.state}
                    </p>
                    <p className="date">{this.state.person[4].date}</p>
                    <p className="decerption">
                      {this.state.person[12].discription}
                    </p>
                  </div>
                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[13].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[13].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[13].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[5].price}</p>
                    <p className="location">
                      {this.state.person[13].address.state}
                    </p>
                    <p className="date">{this.state.person[5].date}</p>
                    <p className="decerption">
                      {this.state.person[13].discription}
                    </p>
                  </div>
                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[14].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[14].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[14].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[6].price}</p>
                    <p className="location">
                      {this.state.person[14].address.state}
                    </p>
                    <p className="date">{this.state.person[6].date}</p>
                    <p className="decerption">
                      {this.state.person[14].discription}
                    </p>
                  </div>
                  <div className="product_card">
                    <img
                      className="product_img"
                      src={this.state.person[15].image}
                      alt=""
                    />

                    <h1 className="product_name2">
                      {this.state.person[15].product_name}{" "}
                    </h1>
                    <p className="brand_name">
                      {this.state.person[15].brand_name}
                    </p>
                    <p className="price"> $ {this.state.person[7].price}</p>
                    <p className="location">
                      {this.state.person[15].address.state}
                    </p>
                    <p className="date">{this.state.person[7].date}</p>
                    <p className="decerption">
                      {this.state.person[15].discription}
                    </p>
                  </div>
                </main>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
