import Image from 'next/image';

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">
        🏏 India National Cricket Team: Complete Guide to Schedule, Matches & Rivalries of 2025
      </h1>

      <Image
        src="/assets/images/blogs/fifa1.jpeg" // Make sure this image exists in your public/assets/images folder
        alt="India National Cricket Team"
        width={1200}
        height={700}
        className="w-full h-auto rounded-lg mb-8"
      /> 

      <article className="prose max-w-none prose-lg prose-headings:text-2xl prose-p:leading-relaxed">
        <p>
          The India National Cricket Team is more than just a sports team or a player who represents India in a blue jersey — it’s a symbol of national pride, passion, and legacy. Whether it’s a fiery match with first-time world cup winners (2019) Ind vs Eng clash or a heart-stopping India vs Australia final—the powerhouses of the cricket world—the team unites over a billion fans in celebration and emotion.
        </p>
        <p>
          With high searches like “Ind vs Aus” (37.2M), “India vs England” (24.9M), and “India Cricket Schedule” (1.22M), it’s clear the team is at the heart of global cricket conversations. This blog brings you everything from upcoming matches and player analysis to rivalries and the team’s global impact.
        </p>

        <h2>Latest India Cricket Schedule (2025–2026)</h2>
        <p>Fans have already marked their calendars. Here’s what the schedule looks like:</p>
        <table className="table-auto border-collapse w-full text-left border my-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Series/Tournament</th>
              <th className="border px-4 py-2">Opponent</th>
              <th className="border px-4 py-2">Format</th>
              <th className="border px-4 py-2">Start Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">ICC Champions Trophy 2025</td>
              <td className="border px-4 py-2">Multiple (incl. PAK)</td>
              <td className="border px-4 py-2">ODI</td>
              <td className="border px-4 py-2">March 2025</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">India Tour of England</td>
              <td className="border px-4 py-2">England</td>
              <td className="border px-4 py-2">Test</td>
              <td className="border px-4 py-2">July 2025</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Home Series vs South Africa</td>
              <td className="border px-4 py-2">South Africa</td>
              <td className="border px-4 py-2">ODI + T20I</td>
              <td className="border px-4 py-2">October 2025</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Border-Gavaskar Trophy (Away)</td>
              <td className="border px-4 py-2">Australia</td>
              <td className="border px-4 py-2">Test</td>
              <td className="border px-4 py-2">Dec 2025 – Jan 2026</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Asia Cup 2026</td>
              <td className="border px-4 py-2">Sri Lanka (host)</td>
              <td className="border px-4 py-2">ODI</td>
              <td className="border px-4 py-2">March 2026</td>
            </tr>
          </tbody>
        </table>

        <h2>India vs England – Rivals of the Modern Era</h2>
        <ul>
          <li>India’s thrilling 151-run victory at Lord’s (2021)</li>
          <li>Rohit Sharma’s epic century at The Oval</li>
          <li>England’s Bazball dominance in the 2024 home series</li>
        </ul>

        <h2>India vs Australia – The Real Test Rivalry</h2>
        <ul>
          <li>Gabba Test win (2021)</li>
          <li>2023 World Cup Final: Australia defeated India at home</li>
          <li>Virat Kohli’s century in Perth, 2024</li>
        </ul>

        <h2>India vs Pakistan – The Eternal Clash</h2>
        <p>
          Every ICC encounter becomes a global spectacle:
        </p>
        <ul>
          <li>Next: ICC Champions Trophy 2025</li>
          <li>Expected Venue: Lahore or Dubai</li>
          <li>World Cup Head-to-Head: India leads 8–0</li>
          <li>ODI Record: Pakistan leads 73–56</li>
        </ul>

        <h2>Current Squad and Future Stars</h2>
        <h3>Key Players:</h3>
        <ul>
          <li>Rohit Sharma (Captain)</li>
          <li>Virat Kohli</li>
          <li>Jasprit Bumrah</li>
          <li>Shubman Gill</li>
          <li>Ravindra Jadeja</li>
          <li>Rishabh Pant</li>
        </ul>
        <h3>Youngsters to Watch:</h3>
        <ul>
          <li>Yashasvi Jaiswal</li>
          <li>Rinku Singh</li>
          <li>Tilak Varma</li>
          <li>Arshdeep Singh</li>
        </ul>

        <h2>#Fan Culture & Social Media Buzz</h2>
        <p>During high-profile matches, hashtags and reels take over the internet:</p>
        <ul>
          <li>#INDvENG</li>
          <li>#INDvAUS</li>
          <li>#BleedBlue</li>
          <li>#TeamIndia</li>
        </ul>

        <h2>Where to Watch India Matches Live</h2>
        <ul>
          <li><strong>TV:</strong> Star Sports, Sony Sports Network</li>
          <li><strong>Streaming:</strong> JioCinema, Hotstar, SonyLIV</li>
          <li><strong>Radio:</strong> AIR FM, BBC World Service</li>
          <li><strong>Apps:</strong> BCCI.tv, ICC Mobile App</li>
        </ul>

        <h2>Final Word</h2>
        <p>
          With a rich legacy and massive global fan base, the India National Cricket Team continues to define the spirit of cricket. Stay tuned for more updates, scores, and stories as the 2025–2026 season unfolds.
        </p>
      </article>
    </section>
  );
}
