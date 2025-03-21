
import { LatestPost } from "~/app/_components/post";
import Nav from "~/app/_components/nav";
import Ratio from "~/app/_components/ratio";
import Logo from "~/app/_components/logo";
import {HydrateClient } from "~/trpc/server";
import Image from 'next/image'
import BgLogo from "~/app/_components/bglogo";
import SpeechBubble from "~/app/_components/speechBubble";
import SpeechWithImg from "./_components/speechwimg";
import TitleText from "./_components/titletext";
import ScrollIndicator from "./_components/scrollindicator";


export default async function Home() {

  return (
    <HydrateClient>
      <main
          className="flex min-h-screen select-none flex-col items-center justify-center text-light -z-20">
        <div className="fixed left-10 top-9 z-10">
          <Logo/>
        </div>
        <div className="fixed right-10 top-12 z-10">
          <Nav/>
        </div>
        <div className="fixed right-0 bottom-0 z-0">
          <BgLogo/>
        </div>

        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 z-0">
          <div className={"container flex flex-col h-screen"}>
            <div className={"container flex flex-col h-sc items-center justify-center h-3/4"}>
              <TitleText text={"Bjørn Møgelhøj"} subText="(Still a work in progress... "/>
            </div>
            <ScrollIndicator text={"Try scrolling why dontcha?"} hoverText={"No like, using the scrool wheel..."}/>
          </div>

          <SpeechWithImg/>

          <div className={"container flex flex-row h-sc h-128 bg-dark/50 backdrop-blur-sm rounded-xl"}>
            <p className={"p-5 text-5xl"}>BOOKSHELF</p>
          </div>

          <Ratio
              leftText={"～(■_■)～♪"}
              rightText={"(づ ᴗ _ᴗ)づ♡"}
              odd={false}
          />
          <Ratio leftText={"♪((ヽ(ᐛ)ﾉ))♬"} rightText={"♪(๑ᴖ◡ᴖ๑)♪"} odd={true}/>
          <Ratio
              leftText={"( 〃● ₃● ) ~"}
              rightText={"ヾ(⌐■_■)ノ♪"}
              odd={false}
          />
          <Ratio
              leftText={"♪♪♪ ヽ( ᐖゞ)"}
              rightText={"☆ﾟ°˖* ᕕ( ᐛ )ᕗ"}
              odd={true}
          />
          <Ratio
              leftText={"O(∩_∩)O"}
              rightText={"ヽ( ▀̿ Ĺ̯ ▀̿)ノ♪♬"}
              odd={false}
          />
        </div>
      </main>
    </HydrateClient>
  );
}
