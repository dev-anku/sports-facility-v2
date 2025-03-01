export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://sports-facility.in";

  const pages = ["", "about", "sports", "services", "projects", "contact"].map(
    (page) => `${baseUrl}/${page}`,
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map((url) => `<url><loc>${url}</loc></url>`).join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
