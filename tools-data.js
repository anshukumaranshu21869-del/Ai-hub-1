// AIVerse India - AI Tools Database
// Future me yahin 5000+ AI tools add honge

const aiTools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "Chat AI",
    audience: ["Student", "Creator", "Business", "Developer"],
    pricing: "Free + Paid",
    rating: 4.9,
    officialUrl: "https://chat.openai.com/",
    shortUse: "Study, coding, writing aur ideas ke liye best AI assistant.",
    hindiGuide: "ChatGPT se aap notes, coding, resume, business ideas, captions aur doubts solve kar sakte ho.",
    tags: ["chat", "study", "coding", "writing", "business", "resume"],
    alternatives: ["Claude", "Gemini", "Perplexity"],
    prompts: [
      "Mujhe [topic] simple Hindi me examples ke saath samjhao.",
      "Is code ko line-by-line explain karo.",
      "Mere liye professional resume summary banao."
    ]
  },
  {
    id: "claude",
    name: "Claude",
    category: "Chat AI",
    audience: ["Student", "Creator", "Business", "Developer"],
    pricing: "Free + Paid",
    rating: 4.8,
    officialUrl: "https://claude.ai/",
    shortUse: "Long content, documents aur app planning ke liye useful AI.",
    hindiGuide: "Claude long notes, PDFs, writing aur planning ke liye kaafi strong hai.",
    tags: ["writing", "documents", "planning", "study", "coding"],
    alternatives: ["ChatGPT", "Gemini", "Perplexity"],
    prompts: [
      "Is document ka simple summary banao.",
      "Mere app idea ka complete roadmap banao.",
      "Long article ko short notes me convert karo."
    ]
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "Chat AI",
    audience: ["Student", "Business", "Research"],
    pricing: "Free + Paid",
    rating: 4.7,
    officialUrl: "https://gemini.google.com/",
    shortUse: "Google ecosystem, research aur study help ke liye useful.",
    hindiGuide: "Gemini search, study, Google tools aur research ke kaam me helpful hai.",
    tags: ["google", "research", "study", "search", "chat"],
    alternatives: ["ChatGPT", "Claude", "Perplexity"],
    prompts: [
      "Latest topic par research summary do.",
      "Is topic ke important points batao.",
      "Google tools ke saath kaise kaam karun?"
    ]
  },
  {
    id: "canva",
    name: "Canva AI",
    category: "Design AI",
    audience: ["Creator", "Business", "Student"],
    pricing: "Free + Paid",
    rating: 4.8,
    officialUrl: "https://www.canva.com/",
    shortUse: "Poster, thumbnail, logo aur social media design ke liye.",
    hindiGuide: "Canva AI se Instagram post, YouTube thumbnail, presentation aur poster bana sakte ho.",
    tags: ["design", "poster", "thumbnail", "logo", "instagram"],
    alternatives: ["Adobe Firefly", "Microsoft Designer"],
    prompts: [
      "AI tools ke liye premium Instagram post design idea do.",
      "YouTube thumbnail ke liye catchy text suggest karo.",
      "Business poster layout banao."
    ]
  },
  {
    id: "capcut",
    name: "CapCut AI",
    category: "Video AI",
    audience: ["Creator", "Student", "Business"],
    pricing: "Free + Paid",
    rating: 4.7,
    officialUrl: "https://www.capcut.com/",
    shortUse: "Reels, shorts aur video editing ke liye.",
    hindiGuide: "CapCut AI se captions, auto edit, effects aur reels editing easy ho jaati hai.",
    tags: ["video", "reels", "shorts", "editing", "captions"],
    alternatives: ["Canva", "Runway", "Adobe Express"],
    prompts: [
      "Mujhe 30 second reel script do.",
      "Is video ke liye captions suggest karo.",
      "Viral reel structure banao."
    ]
  },
  {
    id: "perplexity",
    name: "Perplexity",
    category: "Research AI",
    audience: ["Student", "Research", "Business"],
    pricing: "Free + Paid",
    rating: 4.8,
    officialUrl: "https://www.perplexity.ai/",
    shortUse: "Latest search, sources aur research ke liye.",
    hindiGuide: "Perplexity latest information sources ke saath deta hai, research ke liye useful hai.",
    tags: ["search", "research", "latest", "sources", "study"],
    alternatives: ["ChatGPT", "Gemini", "Claude"],
    prompts: [
      "Latest AI news with sources batao.",
      "Is topic par research summary do.",
      "Best tools compare karo."
    ]
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "Coding AI",
    audience: ["Developer", "Student", "Startup"],
    pricing: "Free + Paid",
    rating: 4.6,
    officialUrl: "https://cursor.com/",
    shortUse: "AI code editor for app aur website projects.",
    hindiGuide: "Cursor se coding projects me AI help milti hai, bugs fix aur code generate kar sakte ho.",
    tags: ["coding", "developer", "app", "website", "bug fix"],
    alternatives: ["GitHub Copilot", "Replit AI", "Windsurf"],
    prompts: [
      "Is project ka folder structure improve karo.",
      "Bug find karke corrected code do.",
      "Responsive website bana do."
    ]
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    category: "Study AI",
    audience: ["Student", "Research", "Teacher"],
    pricing: "Free",
    rating: 4.7,
    officialUrl: "https://notebooklm.google.com/",
    shortUse: "PDF summary, notes aur study guide ke liye.",
    hindiGuide: "NotebookLM PDF ya notes se summary, Q&A aur study guide banane me help karta hai.",
    tags: ["pdf", "notes", "study", "summary", "research"],
    alternatives: ["ChatGPT", "Gemini", "Claude"],
    prompts: [
      "Is PDF ka chapter-wise summary banao.",
      "Important questions generate karo.",
      "Revision sheet banao."
    ]
  }
];
