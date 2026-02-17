import CardControllers from "@/features/deck/components/CardControllers.tsx";
import Deck from "@/features/deck/components/Deck.tsx";
import ResumePage from "@/features/resume/ResumePage.tsx";
import OpenWork from "@/shared/components/ui/OpenWork.tsx";
import Provider from "@/app/providers/Provider.tsx";
import SocialMedia from "@/shared/components/ui/SocialMedia.tsx";
import '@/styles/globals/app.css'

const App = () => {
  const currentPath = window.location.pathname;

  if (currentPath === "/resume") {
    return <ResumePage />;
  }

  return (
    <Provider>
      <div className="min-h-screen w-full relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
          }}
        />

        <div className="app__container">

          <div className="app__left">
            <OpenWork />
          </div>

          <div className="app__middle">
            <CardControllers />
            <Deck />
          </div>

          <div className="app__right">
            <SocialMedia />
          </div>

        </div>
      </div>
    </Provider >
  );
};

export default App;
