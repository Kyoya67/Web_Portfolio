import { JSDOM } from "jsdom";

export default async function handler(req, res) {
  const { url } = req.query;

  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const { document } = dom.window;

    const ogImage = document.querySelector(
      'meta[property="og:image"]'
    )?.content;

    res.status(200).json({ ogImage });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch OGP data" });
  }
}
