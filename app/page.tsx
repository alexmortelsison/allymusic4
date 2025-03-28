import AboutTheEvent from "./component/AboutTheEvent";
import HeroPage from "./component/Hero";
import HeroMobile from "./component/HeroMobile";

export default function Home() {
  return (
    <div>
      <div className="hidden lg:block">
        <HeroPage />
        <AboutTheEvent />
      </div>
      <div className="sm:block lg:hidden">
        <HeroMobile />
      </div>
    </div>
  );
}
