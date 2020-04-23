import React from "react";
import { Chart, Cards, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./image/image.png";
import SocialFollow from "./SocialFollow";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />

        <div className={styles.note}>
          <p>
            Live statistics and coronavirus tracking the number of confirmed
            Infected cases, Recovered cases, Deaths cases. The coronavirus
            COVID-19 is affecting 209 countries and territories around the
            globe.
          </p>
          <p className={styles.note2}>Stay Home. Stay Safe. Stay Updated.</p>
        </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <SocialFollow />
      </div>
    );
  }
}
export default App;
