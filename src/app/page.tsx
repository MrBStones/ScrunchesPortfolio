import Nav from "~/app/_components/nav";
import Ratio from "~/app/_components/ratio";
import Logo from "~/app/_components/logo";
import { HydrateClient } from "~/trpc/server";
import BgLogo from "~/app/_components/bglogo";
import SpeechWithImg from "./_components/speechwimg";
import TitleText from "./_components/name/titletext";
import ScrollIndicator from "./_components/scrollindicator";
import Bookshelf from "./_components/bookshelf/bookshelf";
import NameLogo from "./_components/name/name";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="-z-20 flex min-h-screen select-none flex-col items-center justify-center overflow-hidden text-light">
        <div className="fixed left-10 top-9 z-10">
          <Logo />
        </div>
        <div className="fixed right-10 top-12 z-10">
          <Nav />
        </div>
        <div className="fixed bottom-0 right-0 z-0">
          <BgLogo />
        </div>

        <div className="container z-0 flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className={"container flex h-screen flex-col"}>
            <div
              className={
                "h-sc container flex h-3/4 flex-col items-center justify-center"
              }
            >
              <NameLogo />
            </div>
            <ScrollIndicator
              text={"Try scrolling why dontcha?"}
              hoverText={"No like, using the scrool wheel..."}
            />
          </div>

          <SpeechWithImg />

          <Bookshelf />

          <h1 className="text-2xl">Current Colors:</h1>
          <div
            className={
              "container flex flex-row gap-3 rounded-xl p-3 outline-dashed -outline-offset-4 outline-light"
            }
          >
            <div className="h-28 w-full bg-background">background</div>
            <div className="h-28 w-full bg-dark">dark</div>
            <div className="h-28 w-full bg-light text-background">light</div>
            <div className="h-28 w-full bg-hero text-background">hero</div>
            <div className="h-28 w-full bg-dark-hero text-background">
              dark-hero
            </div>
          </div>

          <Ratio
            leftText={"～(■_■)～♪"}
            rightText={"(づ ᴗ _ᴗ)づ♡"}
            odd={false}
          />
          <TitleText
            text={"Bjørn Møgelhøj"}
            subText="(Still a work in progress... "
          />
        </div>
      </main>
    </HydrateClient>
  );
}
