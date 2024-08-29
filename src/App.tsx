import Aside from "./components/Aside.tsx";
import CardControllers from "./components/CardControllers.tsx";
import Deck from "./components/Deck.tsx";
import OpenWork from "./components/OpenWork.tsx";
import Provider from "./components/Provider.tsx";
import SocialMedia from "./components/SocialMedia.tsx";
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
