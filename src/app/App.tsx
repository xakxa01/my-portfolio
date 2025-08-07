import Aside from "@/features/navigation/components/Aside.tsx";
import CardControllers from "@/features/deck/components/CardControllers.tsx";
import Deck from "@/features/deck/components/Deck.tsx";
import OpenWork from "@/shared/components/ui/OpenWork.tsx";
import Provider from "@/app/providers/Provider.tsx";
import SocialMedia from "@/shared/components/ui/SocialMedia.tsx";
import '@/styles/globals/app.css'

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
