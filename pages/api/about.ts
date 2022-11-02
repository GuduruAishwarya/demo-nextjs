// syntax is very similar to the "Express" Node.js framework

// here we are responding to every request with an OK (200) code and sending JSON data back (our name)

export default function handler(req, res) {
    res.status(200).json({ name: "Reed Barger" });
  }