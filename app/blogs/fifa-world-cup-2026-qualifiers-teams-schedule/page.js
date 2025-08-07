import { blogImages } from "@/public/constants";
import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        FIFA World Cup 2026: Schedule, Qualified Teams & Where to Watch
      </h1>

      {/* <Image
        src="/home/priyanshu/Desktop/sports/sports-facility-v2/public/assets/images/blogs/fifa2.jpeg"
        alt="FIFA World Cup 2026 Preview"
        width={1000}
        height={600}
        className="rounded-md w-full h-auto mb-6"
      /> */}

      <div className="space-y-4 text-lg leading-relaxed text-gray-800">
        <p>
          The excitement for the FIFA World Cup 2026 is building up as nations across the globe
          compete for the intensive and mind-whopping World Cup qualifiers. With over monthly
          searches and becoming the trending topics for world cup qualifiers and growing interest in
          the football world cup 2026, this upcoming tournament is shaping up to be the most widely
          anticipated event in football history. Whether you're searching for the FIFA World Cup
          qualifier schedule, qualified teams, or the full World Cup 2026 roadmap, this blog has you
          covered.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Introduction to FIFA World Cup 2026</h2>
        <p>
          The FIFA World Cup 2026 will be the 23rd edition of the tournament and is set to make
          history by being jointly hosted by the United States, Canada, and Mexico. This will be the
          first World Cup to feature 48 teams, an increase from the previous 32, making the
          qualifying process more competitive and thrilling than ever before.
        </p>

        <h2 className="text-2xl font-semibold mt-6">World Cup Qualifiers: Road to 2026</h2>
        <p>
          With millions of fans tracking down and waiting eagerly for the world cup qualifiers,
          every confederation (AFC, UEFA, CAF, CONCACAF, CONMEBOL, and OFC) has its own unique path
          to qualification. Each region is battling for a spot among the 48-team final lineup,
          creating a dramatic buildup that fans are eagerly following from their respective country.
        </p>

        <h3 className="text-xl font-semibold mt-4">Key Dates of the Tournament:</h3>
        <ul className="list-disc list-inside">
          <li>Qualifiers started from the Year: 2023</li>
          <li>Expected to end: Late 2025 or early 2026</li>
          <li>Intercontinental playoffs: Early 2026</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Qualified Teams & Predictions</h2>
        <p>
          While the host nations (USA, Canada, and Mexico) are automatically qualified, the
          remaining teams are competing fiercely in their respective regions.
        </p>
        <p>Some top contenders expected to qualify include:</p>
        <ul className="list-disc list-inside">
          <li>Brazil</li>
          <li>Argentina</li>
          <li>Germany</li>
          <li>France</li>
          <li>England</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Schedule & Match Format</h2>
        <p>
          The full World Cup 2026 schedule will be released by FIFA on its website closer to the
          event. However, here is what we know so far from different sources we have scraped and
          found out some of the important:
        </p>
        <ul className="list-disc list-inside">
          <li>Total number of teams: 48</li>
          <li>Group Stages: 12 groups of 4 teams</li>
          <li>
            Knockout Rounds: Top 2 from each group + 8 best third-placed teams advance
          </li>
        </ul>
        <p>
          The tournament will likely begin in June 2026, spanning over a month across various iconic
          stadiums in the United States of America, Canada, and Mexico.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Where to Watch the World Cup Qualifiers?</h2>
        <p>
          Watch the Biggest Sporting Event on the Planet—World Cup 2026 qualifiers—live on various
          platforms like:
        </p>
        <ul className="list-disc list-inside">
          <li>Sony Sports Network (India)</li>
          <li>FOX Sports (USA)</li>
          <li>BBC and ITV (UK)</li>
          <li>FIFA+ (Global)</li>
        </ul>
      </div>
    </div>
  );
}
