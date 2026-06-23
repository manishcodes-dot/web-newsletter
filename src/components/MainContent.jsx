import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bookmark, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Search, 
  ArrowUpRight, 
  Check, 
  Sparkles, 
  Clock, 
  BookOpen, 
  X,
  Heart
} from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "The Obvious Ways To Spot Someone Secretly Writing With AI",
    description: "The biggest giveaways usually have nothing to do with the writing itself. Here is what to look for.",
    author: "Matt Lillywhite",
    publication: "The Daily Draft",
    date: "May 26",
    readTime: "6 min read",
    tags: ["Writing", "AI", "Technology"],
    claps: 12000,
    commentsCount: 334,
    avatar: "✍️",
    bgColor: "bg-brand-pink",
    content: `
      Let’s be honest. Generative AI tools like ChatGPT and Claude have gotten incredibly good at mimicking human syntax. But they still leave digital fingerprints everywhere.
      
      Many editors and readers rely on AI detectors, which are notoriously unreliable. The real giveaways are stylistic, structural, and behavioral. Here are the three most obvious signs that someone is secretly writing with AI:
      
      ### 1. The "False Depth" Introduction
      AI models love to start essays with sweeping, grand declarations. You've probably seen sentences like: "Since the dawn of time, humanity has struggled with..." or "In today's fast-paced digital landscape, the question of..."
      No human writer sits down to write an article about Javascript and starts with the history of human communication. AI does it to build context, but it immediately signals a lack of authorial voice.
      
      ### 2. Over-Structured formatting
      If you see a post that is perfectly broken down into numbered sections, each with a bold, punchy title, followed by exactly three bullet points, and concluded with a neat "In conclusion..." summary—it's almost certainly AI. Humans write with asymmetrical structures. We write long paragraphs, followed by short one-liners. We drift, we tell anecdotes. AI follows a clean, logical outline to a fault.
      
      ### 3. Predictable Adjectives
      Watch out for words like "testament," "delve," "tapestry," "beacon," or "catalyst." AI models are trained on internet corpora where these words are overrepresented in professional writing, so they fall back on them constantly. If every second paragraph describes something as a "testament to the power of X," it’s time to double-check.
    `
  },
  {
    id: 2,
    title: "Vibe Coding is OVER. Here's What Comes Next.",
    description: "Software development is shifting from writing code to orchestrating complex agent networks. Here is the roadmap.",
    author: "Michal Malewicz",
    date: "Mar 25",
    readTime: "9 min read",
    tags: ["Coding", "AI", "Software Development"],
    claps: 9900,
    commentsCount: 402,
    avatar: "💻",
    bgColor: "bg-brand-cyan",
    content: `
      "Vibe coding"—the practice of typing plain-text prompts into an LLM and copying the resulting code without fully understanding it—had a glorious run. But the novelty is wearing off, and the limitations are hitting hard.
      
      As codebases grow, prompting a single file becomes impossible. The future of software engineering isn't writing single prompts; it's orchestrating agent networks.
      
      ### The Agent Architecture
      Instead of you talking to one chatbot, you will manage a team of virtual specialists:
      
      1. **The Product Manager Agent**: Translates your high-level business goals into precise feature specs.
      2. **The Architect Agent**: Analyzes your repository topology and decides which files need modification.
      3. **The Coding Agent**: Executes the modifications and fixes syntax errors.
      4. **The QA Agent**: Automatically writes and runs unit tests, feeding errors back to the coder.
      
      In this world, your role changes from a translator (converting thoughts to syntax) to an editor and systems orchestrator. You are no longer vibe coding; you are system directing.
    `
  },
  {
    id: 3,
    title: "I Tried 100 Claude Skills. These Are The Best.",
    description: "After testing dozens of specialized prompts and custom agent instructions, these are the ones that actually save hours.",
    author: "The PyCoach",
    publication: "Artificial Corner",
    date: "Apr 29",
    readTime: "12 min read",
    tags: ["AI", "Claude", "Productivity"],
    claps: 15000,
    commentsCount: 289,
    avatar: "🤖",
    bgColor: "bg-brand-purple",
    content: `
      Prompt engineering is often treated like magic, but it’s actually just clear documentation. When I tested 100 different Claude tasks, I discovered that Claude's reasoning capabilities shine brightest when given specific constraints rather than vague compliments.
      
      Here are the three top-performing skills you can copy today:
      
      ### 1. The "Reverse Questioner"
      Instead of asking Claude to write an essay on a topic, ask it to interview you. Use this prompt:
      "I want to write an article about [Topic]. Ask me 5 highly targeted questions one-by-one to extract my unique perspective. After I answer all 5, synthesize them into a cohesive outline."
      This prevents generic AI outputs and forces the model to write in *your* voice.
      
      ### 2. The "Refining Critic"
      Ask Claude to evaluate its own output before showing it to you.
      "Write a drafted response to [Prompt]. Then, create a 'Critique' section identifying structural weaknesses, logical gaps, and cliché phrasing. Finally, write an 'Improved Version' addressing all criticisms."
      The difference in quality is staggering.
      
      ### 3. The "Code Translating Sandbox"
      Claude is exceptional at translating legacy codebases. The trick is defining strict type-safety mappings and architectural rules before pasting the source code.
    `
  },
  {
    id: 4,
    title: "Why reading 'The Decameron' is as useful as ever",
    description: "How a 14th-century Italian collection of stories provides the perfect blueprint for modern remote collaboration.",
    author: "Nikolaus Correll",
    date: "Mar 23",
    readTime: "5 min read",
    tags: ["Literature", "History"],
    claps: 2400,
    commentsCount: 88,
    avatar: "📚",
    bgColor: "bg-brand-green",
    content: `
      In 1348, as the Black Death ravaged Florence, ten young people fled the city to a secluded villa in the countryside. To pass the time, they decided to take turns telling stories—one story per person, every day, for ten days.
      
      This collection, Boccaccio's *Decameron*, is more than a classic piece of literature; it is a masterclass in structured, asynchronous collaboration.
      
      When remote teams struggle with digital isolation, they often default to endless meetings. Boccaccio’s characters did the opposite: they created a structured narrative framework where everyone had a voice, a turn, and a role. It shows that in times of crisis and isolation, creative output and storytelling are what keep communities alive.
    `
  },
  {
    id: 5,
    title: "The Political Power of Black Cultural Gatherings",
    description: "An exploration of space, sound, and community organizing in modern urban environments.",
    author: "Tieshka K Smith",
    date: "May 12",
    readTime: "14 min read",
    tags: ["Culture", "Politics"],
    claps: 5100,
    commentsCount: 112,
    avatar: "🎙️",
    bgColor: "bg-brand-orange",
    content: `
      Cultural gatherings are rarely just about entertainment. Historically and today, they serve as vital incubators for social change, resistance, and identity construction.
      
      From the brass band parades of New Orleans to the block parties of early hip-hop in the Bronx, spaces where Black communities gather to celebrate are also spaces where political agendas are forged. When people share sound and physical space, they create counter-narratives to the dominant structures, proving that joy itself can be a revolutionary act.
    `
  },
  {
    id: 6,
    title: "The AirPods Effect",
    description: "How continuous ambient audio is reshaping our physical relationships and public spaces.",
    author: "Markham Heid",
    publication: "The Escape",
    date: "Jun 11",
    readTime: "8 min read",
    tags: ["Science", "Relationships"],
    claps: 8700,
    commentsCount: 196,
    avatar: "🎧",
    bgColor: "bg-brand-peach",
    content: `
      Walk down any city street today, and you’ll see a quiet revolution: half the pedestrians are wearing wireless earbuds.
      
      We are living in the age of the "audio bubble." While this allows us to soundtrack our lives and block out city noise, it also fundamentally alters our relationship with our environment. We no longer share the same acoustic space. The accidental greeting, the overhead conversation, the street musician—all are filtered out. This article explores how continuous ambient audio is silently contributing to social fragmentation and changing the way we interact in public.
    `
  }
];

const recommendedTopics = [
  "Data Science",
  "Writing",
  "Relationships",
  "Politics",
  "Cryptocurrency",
  "Science",
  "Coding",
  "AI"
];

export default function MainContent() {
  const [activeTab, setActiveTab] = useState('For you'); // 'For you' | 'Featured'
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [clapCounts, setClapCounts] = useState({});
  const [activeArticle, setActiveArticle] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Toggle Bookmark
  const toggleBookmark = (e, id, title) => {
    e.stopPropagation();
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter(bId => bId !== id));
      showToast(`Removed "${title.substring(0, 20)}..." from bookmarks`);
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
      showToast(`Saved "${title.substring(0, 20)}..." to library`);
    }
  };

  // Clap Action
  const handleClap = (e, id) => {
    e.stopPropagation();
    setClapCounts({
      ...clapCounts,
      [id]: (clapCounts[id] || 0) + 1
    });
  };

  // Toast helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  // Filter Articles
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTopic = selectedTopic === 'All' || article.tags.includes(selectedTopic);
    
    const matchesTab = activeTab === 'For you' || article.claps >= 8000; // featured filter

    return matchesSearch && matchesTopic && matchesTab;
  });

  const staffPicks = articles.slice(3, 6);

  return (
    <section id="mixers" className="py-16 px-4 lg:px-8 bg-[#FFFDF9] border-b-4 border-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Search & Section Title Header */}
        <div className="border-4 border-black bg-brand p-6 mb-12 rounded-lg shadow-brutal flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="bg-white border-2 border-black font-black uppercase text-xs px-3 py-1 rounded shadow-brutal-sm inline-block mb-3">
              Newsletter Issues
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black">
              Explore Byte Size Feed
            </h2>
            <p className="font-bold text-black/80 mt-1">
              Read past publications, review coding deep-dives, or filter by topic interest.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative flex items-center w-full md:w-80">
            <input
              type="text"
              placeholder="Search issues, topics, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FFFDF9] border-2 border-black py-3 pl-4 pr-10 rounded font-bold placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-black shadow-brutal-sm"
            />
            <Search className="absolute right-3.5 w-5 h-5 text-black cursor-pointer" />
          </div>
        </div>

        {/* Medium-style 3-Column Vibe Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Feed Column (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Feed Tabs */}
            <div className="flex items-center gap-6 border-b-2 border-black pb-3 font-bold text-sm">
              {['For you', 'Featured'].map(tab => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSelectedTopic('All');
                  }}
                  className={`pb-3 relative transition-colors ${
                    activeTab === tab ? 'text-black font-black' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeTabUnderline"
                      className="absolute bottom-[-5px] left-0 right-0 h-[4px] bg-brand-cyan border border-black" 
                    />
                  )}
                </button>
              ))}

              {selectedTopic !== 'All' && (
                <span className="bg-brand border-2 border-black text-xs font-black px-2.5 py-1 rounded shadow-brutal-sm flex items-center gap-1.5 ml-auto">
                  Topic: {selectedTopic}
                  <button onClick={() => setSelectedTopic('All')} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>

            {/* Articles List */}
            <div className="flex flex-col divide-y-2 divide-gray-200">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => {
                  const currentClaps = article.claps + (clapCounts[article.id] || 0);
                  const isBookmarked = bookmarkedIds.includes(article.id);

                  return (
                    <div 
                      key={article.id}
                      onClick={() => setActiveArticle(article)}
                      className="py-8 flex flex-col sm:flex-row gap-6 cursor-pointer group"
                    >
                      {/* Left Article details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          {/* Author Metadata */}
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-6 h-6 rounded-full border border-black bg-white flex items-center justify-center text-xs shadow-brutal-sm">
                              {article.avatar}
                            </span>
                            <span className="font-bold text-xs">{article.author}</span>
                            {article.publication && (
                              <>
                                <span className="text-gray-400 font-bold text-xs">in</span>
                                <span className="font-bold text-xs hover:underline underline-offset-2">{article.publication}</span>
                              </>
                            )}
                            <span className="text-gray-300 font-bold">•</span>
                            <span className="text-gray-500 text-xs font-medium">{article.date}</span>
                          </div>

                          {/* Title & Description */}
                          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-snug mb-2 group-hover:underline underline-offset-4 decoration-2 decoration-brand-strong">
                            {article.title}
                          </h3>
                          <p className="text-sm font-semibold text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                            {article.description}
                          </p>
                        </div>

                        {/* Footer Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase tracking-wider bg-brand border border-black px-2 py-0.5 rounded shadow-brutal-sm">
                              {article.tags[0]}
                            </span>
                            <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {article.readTime}
                            </span>
                          </div>

                          {/* Action Items */}
                          <div className="flex items-center gap-4">
                            {/* Clap button */}
                            <button 
                              onClick={(e) => handleClap(e, article.id)}
                              className="flex items-center gap-1 hover:text-brand-strong font-bold text-xs bg-gray-50 hover:bg-brand-pink border border-black p-1 px-2 rounded shadow-brutal-sm transition-colors"
                            >
                              <ThumbsUp className="w-3.5 h-3.5" />
                              <span>{(currentClaps / 1000).toFixed(1)}K</span>
                            </button>

                            {/* Bookmark button */}
                            <button 
                              onClick={(e) => toggleBookmark(e, article.id, article.title)}
                              className={`p-1.5 border border-black rounded shadow-brutal-sm transition-colors ${
                                isBookmarked ? 'bg-brand-cyan' : 'bg-gray-50 hover:bg-gray-100'
                              }`}
                            >
                              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-black' : ''}`} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Right Thumbnail Image card */}
                      <div className={`w-full sm:w-40 h-32 shrink-0 rounded-lg border-2 border-black ${article.bgColor} shadow-brutal-sm hidden sm:flex items-center justify-center relative overflow-hidden group-hover:rotate-1 transition-transform`}>
                        <div className="absolute top-2 left-2 text-2xl opacity-20 select-none">
                          {article.avatar}
                        </div>
                        <span className="text-4xl filter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                          {article.avatar}
                        </span>
                        <div className="absolute bottom-2 right-2 flex items-center justify-center w-6 h-6 rounded-full border border-black bg-white shadow-brutal-sm">
                          <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 bg-brand-pink border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-brutal">
                    🔍
                  </div>
                  <h4 className="font-black uppercase text-lg mb-1">No articles found</h4>
                  <p className="text-sm font-semibold text-gray-500 max-w-sm mx-auto">
                    Try adjusting your search query, selecting another category tab, or resetting the active filters.
                  </p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedTopic('All'); setActiveTab('For you'); }}
                    className="mt-4 bg-brand border-2 border-black px-4 py-2 font-black text-xs uppercase rounded shadow-brutal hover:translate-x-[-1px] hover:translate-y-[-1px]"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar Column (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-10 lg:border-l-2 lg:border-dashed lg:border-black/20 lg:pl-10">
            
            {/* Staff Picks */}
            <div>
              <h3 className="font-black uppercase text-sm tracking-wider mb-6 flex items-center gap-2 border-b-2 border-black pb-2">
                <Sparkles className="w-4 h-4 text-brand-strong" />
                Staff Picks
              </h3>
              <div className="flex flex-col gap-5">
                {staffPicks.map((article) => (
                  <div 
                    key={article.id} 
                    onClick={() => setActiveArticle(article)}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full border border-black bg-white flex items-center justify-center text-[10px] shadow-brutal-sm">
                        {article.avatar}
                      </span>
                      <span className="font-bold text-[11px]">{article.author}</span>
                    </div>
                    <h4 className="font-black text-sm uppercase leading-tight group-hover:underline">
                      {article.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Topics */}
            <div>
              <h3 className="font-black uppercase text-sm tracking-wider mb-6 flex items-center gap-2 border-b-2 border-black pb-2">
                <BookOpen className="w-4 h-4 text-brand-strong" />
                Recommended Topics
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {recommendedTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-3 py-1.5 border border-black font-black uppercase text-[10px] rounded transition-all shadow-brutal-sm ${
                      selectedTopic === topic 
                        ? 'bg-brand-cyan text-black translate-y-[-1px] translate-x-[-1px] shadow-brutal-sm' 
                        : 'bg-white hover:bg-gray-100'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Bookmarks Quick List */}
            {bookmarkedIds.length > 0 && (
              <div>
                <h3 className="font-black uppercase text-sm tracking-wider mb-6 flex items-center gap-2 border-b-2 border-black pb-2">
                  <Bookmark className="w-4 h-4 text-brand-strong fill-brand-strong" />
                  Your Saved List ({bookmarkedIds.length})
                </h3>
                <div className="flex flex-col gap-3">
                  {bookmarkedIds.map((id) => {
                    const article = articles.find(a => a.id === id);
                    if (!article) return null;
                    return (
                      <div 
                        key={id}
                        onClick={() => setActiveArticle(article)}
                        className="flex items-center justify-between bg-white border border-black p-2.5 rounded shadow-brutal-sm cursor-pointer hover:bg-gray-50"
                      >
                        <span className="font-black text-xs uppercase line-clamp-1 flex-1 pr-2">
                          {article.title}
                        </span>
                        <button 
                          onClick={(e) => toggleBookmark(e, id, article.title)}
                          className="text-gray-400 hover:text-black shrink-0"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Subscriptions Stats widget */}
            <div className="bg-brand-pink border-4 border-black p-6 rounded-lg shadow-brutal text-center relative overflow-hidden">
              <span className="text-3xl absolute -top-1 -right-1 opacity-20 select-none">📬</span>
              <h4 className="font-black uppercase text-base mb-2">Weekly byte-sized insights</h4>
              <p className="text-xs font-bold text-black/70 mb-4">
                No clutter. Just high-quality analysis and development blueprints once a week.
              </p>
              <a href="#newsletter-signup" className="block w-full bg-white border-2 border-black py-2 font-black uppercase text-xs rounded shadow-brutal-sm hover:translate-x-[-1px] hover:translate-y-[-1px]">
                Subscribe Now
              </a>
            </div>

          </div>

        </div>

        {/* Modal Full Article Reader Drawer */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Overlay Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveArticle(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-xs"
              />

              {/* Reader Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#FFFDF9] border-4 border-black w-full max-w-2xl p-6 sm:p-8 rounded-lg shadow-brutal-lg relative z-10 max-h-[85vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 bg-white border-2 border-black p-1 rounded hover:bg-gray-100 transition-colors shadow-brutal-sm"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Article Header */}
                <div className="border-b-2 border-black pb-4 mb-6">
                  {/* Author Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-xl shadow-brutal-sm">
                      {activeArticle.avatar}
                    </span>
                    <div>
                      <h4 className="font-black text-sm uppercase leading-none">{activeArticle.author}</h4>
                      <span className="text-[10px] font-bold text-gray-500">Published in {activeArticle.publication || "Byte Size Feed"} on {activeArticle.date}</span>
                    </div>
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none mb-3">
                    {activeArticle.title}
                  </h1>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {activeArticle.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-wider bg-brand border border-black px-2.5 py-0.5 rounded shadow-brutal-sm">
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs font-bold text-gray-400 ml-auto flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {activeArticle.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Body Content */}
                <div className="prose prose-neutral max-w-none text-base font-semibold leading-relaxed text-gray-800 space-y-4 mb-8">
                  {activeArticle.content.split('\n\n').map((paragraph, index) => {
                    const trimmed = paragraph.trim();
                    if (!trimmed) return null;
                    if (trimmed.startsWith('###')) {
                      return (
                        <h3 key={index} className="text-lg font-black uppercase tracking-tight text-black pt-4">
                          {trimmed.replace('###', '').trim()}
                        </h3>
                      );
                    }
                    if (trimmed.startsWith('1.') || trimmed.startsWith('-')) {
                      return (
                        <div key={index} className="pl-4 border-l-2 border-black my-2 text-sm italic text-gray-600 bg-gray-50 p-2.5 rounded">
                          {trimmed}
                        </div>
                      );
                    }
                    return <p key={index}>{trimmed}</p>;
                  })}
                </div>

                {/* Footer Engagement bar */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-black/10">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={(e) => handleClap(e, activeArticle.id)}
                      className="flex items-center gap-1.5 bg-brand-pink border-2 border-black px-4 py-2 rounded font-black text-sm uppercase shadow-brutal hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{activeArticle.claps + (clapCounts[activeArticle.id] || 0)} claps</span>
                    </button>

                    <button 
                      onClick={(e) => toggleBookmark(e, activeArticle.id, activeArticle.title)}
                      className={`p-2 border-2 border-black rounded shadow-brutal hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                        bookmarkedIds.includes(activeArticle.id) ? 'bg-brand-cyan' : 'bg-white'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarkedIds.includes(activeArticle.id) ? 'fill-black' : ''}`} />
                    </button>
                  </div>

                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.origin + "?article=" + activeArticle.id);
                      showToast("Article link copied to clipboard!");
                    }}
                    className="flex items-center gap-1 text-xs font-bold bg-white border-2 border-black p-2 rounded hover:bg-gray-50 transition-colors shadow-brutal-sm"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    Share
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Floating Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="fixed bottom-6 left-6 z-50 bg-black text-white border-2 border-white px-4 py-3 rounded shadow-brutal font-black text-xs uppercase flex items-center gap-2"
            >
              <Check className="w-4 h-4 text-green-400" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
