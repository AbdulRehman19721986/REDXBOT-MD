const axios = require('axios');
module.exports = [{
  pattern: "tv",
  alias: ["tvshow", "series"],
  desc: "Get TV show information",
  category: "search",
  react: "📺",
  filename: __filename,
  use: ".tv <show name>",
  execute: async (conn, mek, m, { from, args, q, reply }) => {
    try {
      if (!args.length) return reply("❌ Please provide TV show name.\nExample: .tv Breaking Bad");
      
      const query = args.join(" ");
      await reply("🔍 Searching...");
      
      const searchRes = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=57203c5cf51e28cb6db2c9969d214007&query=${encodeURIComponent(query)}`);
      if (!searchRes.data.results || searchRes.data.results.length === 0) throw new Error("Show not found");
      
      const show = searchRes.data.results[0];
      
      const info = `
📺 *${show.name}*
📅 *First Air:* ${show.first_air_date || 'N/A'}
📊 *Rating:* ${show.vote_average}/10
📝 *Overview:* ${show.overview?.substring(0, 300)}...
      `;
      
      await conn.sendMessage(from, {
        image: { url: `https://image.tmdb.org/t/p/w500${show.poster_path}` },
        caption: info
      }, { quoted: mek });
      
    } catch (e) {
      await reply(`❌ Error: ${e.message}`);
    }
  }
},{
  pattern: "movie",
  alias: ["film", "movieinfo"],
  desc: "Search movie information and official trailer",
  category: "search",
  react: "🎬",
  filename: __filename,
  use: ".movie <movie name>",
  execute: async (conn, mek, m, { from, args, q, reply }) => {
    try {
      const query = (args || []).join(" ").trim();
      if (!query) {
        return reply("❌ Please provide a movie name.\nExample: .movie Interstellar");
      }

      const apiKey = process.env.TMDB_API_KEY || "57203c5cf51e28cb6db2c9969d214007";
      await reply("🎬 Searching movie details...");

      const searchRes = await axios.get("https://api.themoviedb.org/3/search/movie", {
        params: { api_key: apiKey, query, include_adult: false, language: "en-US", page: 1 },
        timeout: 12000
      });
      const results = searchRes.data?.results || [];
      if (!results.length) return reply("❌ No matching movie was found.");

      const movie = results[0];
      let trailerUrl = "";
      try {
        const videoRes = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, {
          params: { api_key: apiKey, language: "en-US" },
          timeout: 9000
        });
        const videos = videoRes.data?.results || [];
        const trailer = videos.find(v => v.site === "YouTube" && v.type === "Trailer" && v.official)
          || videos.find(v => v.site === "YouTube" && v.type === "Trailer")
          || videos.find(v => v.site === "YouTube" && v.type === "Teaser");
        if (trailer?.key) trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
      } catch (_) {
        // Trailer lookup is optional; movie information should still be returned.
      }

      const year = movie.release_date ? movie.release_date.slice(0, 4) : "N/A";
      const overview = (movie.overview || "No synopsis is available.")
        .replace(/\s+/g, " ")
        .slice(0, 650);
      const info = [
        `🎬 *${movie.title || "Unknown title"}*`,
        `📅 *Release:* ${year}`,
        `⭐ *Rating:* ${Number(movie.vote_average || 0).toFixed(1)}/10`,
        `🗳️ *Votes:* ${Number(movie.vote_count || 0).toLocaleString("en-US")}`,
        "",
        `📝 *Overview:* ${overview}`,
        trailerUrl ? `\n▶️ *Official trailer:* ${trailerUrl}` : "",
        "",
        "_Movie details provided by TMDB. This command searches information; it does not stream or download films._"
      ].filter(Boolean).join("\n");

      const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;
      if (poster) {
        await conn.sendMessage(from, { image: { url: poster }, caption: info }, { quoted: mek });
      } else {
        await conn.sendMessage(from, { text: info }, { quoted: mek });
      }
    } catch (e) {
      const status = e.response?.status;
      const message = status === 401
        ? "TMDB API key is invalid. Set TMDB_API_KEY in your environment."
        : status === 429
          ? "TMDB rate limit reached. Please try again shortly."
          : (e.message || "Movie search failed.");
      await reply(`❌ ${message}`);
    }
  }
}];
