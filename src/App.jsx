import Aside from "./components/Aside";
import CardControllers from "./components/cardControllers";
import Deck from "./components/Deck";
import OpenWork from "./components/OpenWork";
import Provider from "./components/Provider";
import SocialMedia from "./components/SocialMedia";
import './styles/app.css'

const App = () => (
  <Provider>
    <div className="app__container">

      <div className="app__left">
        <OpenWork />
        <Aside />
      </div>

      <div className="app__middle">
        <Deck />
      </div>

      <div className="app__right">
        <SocialMedia />
        <CardControllers />
      </div>

    </div>
  </Provider >
);

export default App;
