import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Bookmark, 
  User, 
  BookOpen, 
  BarChart2, 
  Search, 
  Bell, 
  Edit3, 
  ChevronDown, 
  LogOut, 
  Plus, 
  Trash, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  X,
  Sparkles,
  Clock,
  Eye,
  Check,
  TrendingUp
} from 'lucide-react';

// Pre-populated default articles (matching user's screenshot & tech newsletter theme)
const initialArticles = [
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
    views: 45200,
    reads: 28400,
    content: `Let’s be honest. Generative AI tools like ChatGPT and Claude have gotten incredibly good at mimicking human syntax. But they still leave digital fingerprints everywhere. Many editors and readers rely on AI detectors, which are notoriously unreliable. The real giveaways are stylistic, structural, and behavioral.

### 1. The "False Depth" Introduction
AI models love to start essays with sweeping, grand declarations. You've probably seen sentences like: "Since the dawn of time, humanity has struggled with..." or "In today's fast-paced digital landscape, the question of..." No human writer sits down to write an article about Javascript and starts with the history of human communication.

### 2. Over-Structured Formatting
If you see a post that is perfectly broken down into numbered sections, each with a bold, punchy title, followed by exactly three bullet points, and concluded with a neat "In conclusion..." summary—it's almost certainly AI. Humans write with asymmetrical structures.

### 3. Predictable Adjectives
Watch out for words like "testament," "delve," "tapestry," "beacon," or "catalyst." AI models are trained on internet corpora where these words are overrepresented in professional writing, so they fall back on them constantly.`
  },
  {
    id: 2,
    title: "Vibe Coding is OVER. Here's What Comes Next.",
    description: "Software development is shifting from writing code to orchestrating complex agent networks. Here is the roadmap.",
    author: "Michal Malewicz",
    date: "Mar 25",
    readTime: "9 min read",
    tags: ["Coding", "AI", "Software"],
    claps: 9900,
    commentsCount: 402,
    avatar: "💻",
    bgColor: "bg-brand-cyan",
    views: 38700,
    reads: 22100,
    content: `"Vibe coding"—the practice of typing plain-text prompts into an LLM and copying the resulting code without fully understanding it—had a glorious run. But the novelty is wearing off, and the limitations are hitting hard.

As codebases grow, prompting a single file becomes impossible. The future of software engineering isn't writing single prompts; it's orchestrating agent networks.

### The Agent Architecture
Instead of you talking to one chatbot, you will manage a team of virtual specialists:
1. **The Product PM Agent**: Translates your high-level business goals into specs.
2. **The Architect Agent**: Decides which files need modification.
3. **The Coding Agent**: Executes modifications.
4. **The QA Agent**: Automatically runs tests.`
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
    views: 52000,
    reads: 36100,
    content: `Prompt engineering is often treated like magic, but it’s actually just clear documentation. When I tested 100 different Claude tasks, I discovered that Claude's reasoning capabilities shine brightest when given specific constraints.

Here are the three top-performing skills you can copy today:

### 1. The "Reverse Questioner"
Instead of asking Claude to write an essay, ask it to interview you to extract your unique perspective before writing.

### 2. The "Refining Critic"
Ask Claude to evaluate its own output and rewrite it to fix structural gaps.

### 3. The "Code Translating Sandbox"
Claude is exceptional at translating legacy codebases. The trick is defining strict type-safety mapping rules beforehand.`
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
    views: 8900,
    reads: 6200,
    content: `In 1348, as the Black Death ravaged Florence, ten young people fled to a countryside villa. To pass the time, they told stories—one story per person, every day, for ten days.

This collection, Boccaccio's *Decameron*, is a masterclass in structured, asynchronous collaboration. When remote teams default to endless meetings, they can learn from this model: a structured narrative framework where everyone has a voice, a turn, and a role.`
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
    views: 18400,
    reads: 11900,
    content: `Cultural gatherings are rarely just about entertainment. Historically and today, they serve as vital incubators for social change, resistance, and identity construction.

From New Orleans brass bands to early hip-hop block parties in the Bronx, spaces where communities celebrate are spaces where political agendas are forged, proving that collective joy is a form of power.`
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
    views: 29100,
    reads: 18300,
    content: `Walk down any city street today, and you’ll see a quiet revolution: half the pedestrians are wearing wireless earbuds.

We are living in the age of the "audio bubble." While this allows us to soundtrack our lives, it also fundamentally alters our relationship with our environment. We no longer share the same acoustic space, contributing to social fragmentation.`
  }
];

const followedPubs = [
  { name: "ILLUMINATION", color: "bg-green-500" },
  { name: "Bootcamp", color: "bg-blue-500" },
  { name: "Write A Catalyst", color: "bg-red-500" },
  { name: "Health and Science", color: "bg-purple-500" },
  { name: "Python in Plain English", color: "bg-yellow-500" },
  { name: "Mac O'Clock", color: "bg-cyan-500" },
  { name: "Data Science Collective", color: "bg-pink-500" },
  { name: "Books Are Our Superpower", color: "bg-emerald-500" },
  { name: "The Riff", color: "bg-orange-500" }
];

export default function Dashboard({ onLogout }) {
  const [activeMenu, setActiveMenu] = useState('Home'); // 'Home' | 'Library' | 'Profile' | 'Stories' | 'Stats'
  const [feedTab, setFeedTab] = useState('For you'); // 'For you' | 'Featured'
  const [searchQuery, setSearchQuery] = useState('');
  const [articlesList, setArticlesList] = useState(initialArticles);
  const [bookmarkedIds, setBookmarkedIds] = useState([1, 3]); // default bookmarks
  const [clapCounts, setClapCounts] = useState({});
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);
  
  // Modals & Menu Dropdowns
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // New Story Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newCategory, setNewCategory] = useState('Coding');
  const [newContent, setNewContent] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleClap = (e, id) => {
    e.stopPropagation();
    setClapCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const toggleBookmark = (e, id, title) => {
    e.stopPropagation();
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(prev => prev.filter(bId => bId !== id));
      showToast(`Removed "${title.substring(0, 20)}..." from bookmarks`);
    } else {
      setBookmarkedIds(prev => [...prev, id]);
      showToast(`Saved "${title.substring(0, 20)}..." to library`);
    }
  };

  // Submit New Story
  const handlePublishStory = (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    const newStory = {
      id: Date.now(),
      title: newTitle,
      description: newDesc || newContent.substring(0, 100) + "...",
      author: "You (Developer)",
      date: "Just now",
      readTime: `${Math.max(1, Math.ceil(newContent.split(' ').length / 200))} min read`,
      tags: [newCategory],
      claps: 0,
      commentsCount: 0,
      avatar: "🚀",
      bgColor: "bg-brand",
      views: 0,
      reads: 0,
      content: newContent
    };

    setArticlesList([newStory, ...articlesList]);
    setNewTitle('');
    setNewDesc('');
    setNewContent('');
    setIsWriteModalOpen(false);
    setActiveMenu('Stories');
    showToast(`Published "${newTitle.substring(0, 20)}..." successfully!`);
  };

  // Delete Written Story
  const handleDeleteStory = (id, title) => {
    setArticlesList(articlesList.filter(a => a.id !== id));
    setBookmarkedIds(bookmarkedIds.filter(bId => bId !== id));
    showToast(`Deleted "${title.substring(0, 20)}..."`);
  };

  // Filtering Logic
  const filteredArticles = articlesList.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTopic = selectedTopic === 'All' || article.tags.includes(selectedTopic);
    
    const matchesTab = feedTab === 'For you' || (article.claps + (clapCounts[article.id] || 0)) >= 6000;

    return matchesSearch && matchesTopic && matchesTab;
  });

  // User Written Stories (Author: "You (Developer)")
  const userStories = articlesList.filter(a => a.author.includes("You"));

  // Bookmarked Articles
  const bookmarkedArticles = articlesList.filter(a => bookmarkedIds.includes(a.id));

  // Recommended topics list
  const recommendedTopics = ["Coding", "AI", "Writing", "Science", "Productivity", "Culture", "Politics"];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-black font-sans flex flex-col md:flex-row border-b-4 border-black">
      
      {/* 1. LEFT SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-64 border-r-4 border-black bg-white flex flex-col justify-between shrink-0 p-6 z-20">
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <span className="font-black text-2xl uppercase tracking-tighter bg-brand border-2 border-black px-2.5 py-0.5 rounded shadow-brutal-sm">
              Byte Size
            </span>
          </div>

          {/* Nav menu links */}
          <nav className="flex flex-col gap-1.5">
            {[
              { id: 'Home', label: 'Home', icon: <Home className="w-5 h-5" /> },
              { id: 'Library', label: 'Library', icon: <Bookmark className="w-5 h-5" /> },
              { id: 'Stories', label: 'Stories', icon: <BookOpen className="w-5 h-5" /> },
              { id: 'Stats', label: 'Stats', icon: <BarChart2 className="w-5 h-5" /> },
              { id: 'Profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveMenu(item.id);
                  setSelectedTopic('All');
                }}
                className={`flex items-center gap-3 w-full p-2.5 rounded font-black text-sm uppercase border-2 transition-all text-left ${
                  activeMenu === item.id 
                    ? 'bg-brand-cyan border-black shadow-brutal-sm translate-x-[-2px] translate-y-[-2px]' 
                    : 'bg-transparent border-transparent hover:bg-gray-50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.id === 'Library' && bookmarkedIds.length > 0 && (
                  <span className="ml-auto bg-brand-pink border border-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black">
                    {bookmarkedIds.length}
                  </span>
                )}
                {item.id === 'Stories' && userStories.length > 0 && (
                  <span className="ml-auto bg-brand-purple border border-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black text-white">
                    {userStories.length}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Followed publications list (matching screenshot sidebar) */}
          <div className="hidden md:block">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-3.5 border-b border-gray-100 pb-1.5">
              Following Publications
            </h4>
            <div className="flex flex-col gap-2.5 max-h-48 overflow-y-auto pr-1">
              {followedPubs.map((pub, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-bold text-gray-700 hover:text-black cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${pub.color} border border-black/40`} />
                    <span className="truncate max-w-[130px] group-hover:underline">{pub.name}</span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Profile / Logout action */}
        <div className="border-t-2 border-dashed border-black/10 pt-4 mt-6 flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-full border-2 border-black bg-brand flex items-center justify-center text-lg shadow-brutal-sm shrink-0">
              🚀
            </span>
            <div className="truncate">
              <h5 className="font-black text-xs uppercase leading-none">Developer Account</h5>
              <span className="text-[10px] font-bold text-gray-400">admin@bytesize.dev</span>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="mt-2 w-full flex items-center justify-center gap-2 bg-[#FFFDF9] hover:bg-red-50 border-2 border-black py-2 rounded font-black text-xs uppercase shadow-brutal-sm hover:translate-y-[-1px] transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </aside>

      {/* 2. MAIN WORKING PLATFORM COLUMN */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#FFFDF9]">
        
        {/* TOP NAVBAR (Search & Actions) */}
        <header className="border-b-4 border-black px-6 py-4 bg-white flex items-center justify-between gap-4 z-10">
          {/* Mobile brand header (shows only on mobile) */}
          <div className="flex items-center gap-2 md:hidden">
            <span className="text-xl">⚡</span>
            <span className="font-black text-lg uppercase tracking-tight">Byte Size</span>
          </div>

          {/* Search bar */}
          <div className="relative flex items-center max-w-md w-full md:w-80">
            <input
              type="text"
              placeholder="Search feed, tags, stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FFFDF9] border-2 border-black py-2 pl-3 pr-9 rounded text-xs font-bold placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-black shadow-brutal-sm"
            />
            <Search className="absolute right-3 w-4 h-4 text-black cursor-pointer" />
          </div>

          {/* User controls (Write, Bell, Avatar) */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Write Button */}
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="bg-brand border-2 border-black px-3.5 py-1.5 sm:px-4 sm:py-2 rounded font-black text-xs uppercase shadow-brutal hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Write</span>
            </button>

            {/* Notifications icon */}
            <button className="p-2 border-2 border-black rounded bg-[#FFFDF9] hover:bg-gray-50 shadow-brutal-sm relative">
              <Bell className="w-4 h-4 text-black" />
              <span className="absolute top-[-3px] right-[-3px] w-2.5 h-2.5 rounded-full bg-brand-pink border border-black" />
            </button>

            {/* Avatar Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-1 border-2 border-black p-0.5 rounded-full bg-white hover:bg-gray-50 shadow-brutal-sm"
              >
                <span className="w-7 h-7 rounded-full bg-brand-cyan flex items-center justify-center font-bold text-sm">
                  🚀
                </span>
                <ChevronDown className="w-3.5 h-3.5 pr-0.5" />
              </button>

              {/* Profile Context Dropdown */}
              <AnimatePresence>
                {isProfileDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-30" onClick={() => setIsProfileDropdownOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2.5 w-56 bg-[#FFFDF9] border-4 border-black p-4 rounded-lg shadow-brutal z-40"
                    >
                      <div className="pb-3 border-b-2 border-dashed border-black/10 mb-2.5">
                        <span className="text-[10px] font-black uppercase text-gray-400 block mb-0.5">Signed in as</span>
                        <span className="font-bold text-xs block truncate text-black">admin@bytesize.dev</span>
                      </div>
                      <div className="flex flex-col gap-1 text-xs font-black uppercase">
                        <button 
                          onClick={() => { setActiveMenu('Profile'); setIsProfileDropdownOpen(false); }}
                          className="w-full text-left p-1.5 hover:bg-brand-cyan rounded transition-colors"
                        >
                          My Profile
                        </button>
                        <button 
                          onClick={() => { setActiveMenu('Stats'); setIsProfileDropdownOpen(false); }}
                          className="w-full text-left p-1.5 hover:bg-brand-cyan rounded transition-colors"
                        >
                          Dashboard Stats
                        </button>
                        <button 
                          onClick={() => { setIsWriteModalOpen(true); setIsProfileDropdownOpen(false); }}
                          className="w-full text-left p-1.5 hover:bg-brand-cyan rounded transition-colors flex items-center justify-between"
                        >
                          Write a Story
                          <Plus className="w-3.5 h-3.5 text-black" />
                        </button>
                        <hr className="my-2 border-black/10" />
                        <button 
                          onClick={onLogout}
                          className="w-full text-left p-1.5 hover:bg-red-50 text-red-600 rounded transition-colors flex items-center justify-between"
                        >
                          Sign Out
                          <LogOut className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* FEED / LAYOUT DYNAMIC VIEWPORT AREA */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 max-w-7xl w-full mx-auto">
          
          {/* MENU VIEW 1: HOME FEED */}
          {activeMenu === 'Home' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Articles Feed */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="flex items-center gap-6 border-b-2 border-black pb-3 font-bold text-sm">
                  {['For you', 'Featured'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setFeedTab(tab)}
                      className={`pb-3 relative transition-colors ${
                        feedTab === tab ? 'text-black font-black' : 'text-gray-400 hover:text-black'
                      }`}
                    >
                      {tab}
                      {feedTab === tab && (
                        <motion.div 
                          layoutId="dashTabUnderline"
                          className="absolute bottom-[-5px] left-0 right-0 h-[4px] bg-brand border border-black" 
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Articles mapping */}
                <div className="flex flex-col divide-y-2 divide-gray-100">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => {
                      const totalClaps = article.claps + (clapCounts[article.id] || 0);
                      const isSaved = bookmarkedIds.includes(article.id);

                      return (
                        <div 
                          key={article.id}
                          onClick={() => setActiveArticle(article)}
                          className="py-6 flex flex-col sm:flex-row gap-6 cursor-pointer group"
                        >
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              {/* Metadata */}
                              <div className="flex items-center gap-2 mb-2">
                                <span className="w-5 h-5 rounded-full border border-black bg-white flex items-center justify-center text-[10px] shadow-brutal-sm shrink-0">
                                  {article.avatar}
                                </span>
                                <span className="font-bold text-[11px] text-black">{article.author}</span>
                                {article.publication && (
                                  <span className="text-[10px] text-gray-500 font-bold">in {article.publication}</span>
                                )}
                                <span className="text-gray-300 font-bold">•</span>
                                <span className="text-gray-400 text-[10px] font-medium">{article.date}</span>
                              </div>

                              {/* Title & Desc */}
                              <h3 className="text-lg md:text-xl font-black uppercase leading-tight tracking-tight mb-1.5 group-hover:underline underline-offset-2">
                                {article.title}
                              </h3>
                              <p className="text-xs font-semibold text-gray-500 line-clamp-2 leading-relaxed mb-3">
                                {article.description}
                              </p>
                            </div>

                            {/* Footer controls */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="text-[9px] font-black uppercase bg-brand border border-black px-1.5 py-0.5 rounded shadow-brutal-sm">
                                  {article.tags[0]}
                                </span>
                                <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {article.readTime}
                                </span>
                              </div>

                              <div className="flex items-center gap-3">
                                <button 
                                  onClick={(e) => handleClap(e, article.id)}
                                  className="flex items-center gap-1 hover:bg-brand-pink border border-black p-1 px-2 rounded text-[10px] font-bold shadow-brutal-sm bg-gray-50 transition-colors"
                                >
                                  <ThumbsUp className="w-3 h-3 text-black" />
                                  <span>{totalClaps >= 1000 ? `${(totalClaps / 1000).toFixed(1)}K` : totalClaps}</span>
                                </button>
                                <button 
                                  onClick={(e) => toggleBookmark(e, article.id, article.title)}
                                  className={`p-1.5 border border-black rounded shadow-brutal-sm transition-colors ${
                                    isSaved ? 'bg-brand-cyan' : 'bg-gray-50 hover:bg-gray-100'
                                  }`}
                                >
                                  <Bookmark className={`w-3 h-3 ${isSaved ? 'fill-black' : ''}`} />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Right side Thumbnail Image Card */}
                          <div className={`w-full sm:w-32 h-24 shrink-0 rounded border-2 border-black ${article.bgColor} shadow-brutal-sm hidden sm:flex items-center justify-center relative overflow-hidden group-hover:rotate-1 transition-transform`}>
                            <span className="text-3xl filter drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">{article.avatar}</span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="py-12 text-center bg-white border-2 border-black rounded-lg shadow-brutal-sm mt-4 p-6">
                      <span className="text-3xl">🔍</span>
                      <h4 className="font-black text-sm uppercase mt-2">No matching posts found</h4>
                      <button 
                        onClick={() => { setSearchQuery(''); setSelectedTopic('All'); }}
                        className="mt-3 bg-brand border-2 border-black px-3.5 py-1.5 rounded font-black text-xs uppercase shadow-brutal-sm"
                      >
                        Reset filters
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Sidebar Columns (Topic recommended & staff picks) */}
              <div className="lg:col-span-4 flex flex-col gap-8 lg:border-l-2 lg:border-dashed lg:border-black/10 lg:pl-6">
                
                {/* Staff Picks */}
                <div>
                  <h3 className="font-black uppercase text-xs tracking-wider text-black mb-4 flex items-center gap-1.5 border-b border-black pb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-strong" />
                    Staff Picks
                  </h3>
                  <div className="flex flex-col gap-4">
                    {articlesList.slice(3, 6).map((art) => (
                      <div 
                        key={art.id}
                        onClick={() => setActiveArticle(art)}
                        className="group cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-4 h-4 rounded-full border border-black bg-white flex items-center justify-center text-[10px] shadow-brutal-sm">
                            {art.avatar}
                          </span>
                          <span className="font-bold text-[10px]">{art.author}</span>
                        </div>
                        <h4 className="font-black text-xs uppercase leading-tight group-hover:underline text-gray-800">
                          {art.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Topics */}
                <div>
                  <h3 className="font-black uppercase text-xs tracking-wider text-black mb-4 flex items-center gap-1.5 border-b border-black pb-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-brand-strong" />
                    Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {recommendedTopics.map(topic => (
                      <button
                        key={topic}
                        onClick={() => setSelectedTopic(selectedTopic === topic ? 'All' : topic)}
                        className={`px-2.5 py-1 border border-black font-black uppercase text-[9px] rounded transition-all shadow-brutal-sm ${
                          selectedTopic === topic 
                            ? 'bg-brand-cyan text-black translate-x-[-1px] translate-y-[-1px] shadow-brutal-sm' 
                            : 'bg-white hover:bg-gray-100'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Help Box */}
                <div className="bg-brand-pink border-2 border-black p-4 rounded shadow-brutal-sm text-center">
                  <h5 className="font-black uppercase text-xs mb-1">Need help?</h5>
                  <p className="text-[10px] font-bold text-gray-600 mb-3">Check documentation, APIs, and write tutorials.</p>
                  <a href="#faq" className="inline-block bg-white border border-black px-3 py-1 text-[10px] font-black uppercase rounded shadow-brutal-sm hover:translate-y-[-1px]">
                    FAQ Guide
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* MENU VIEW 2: LIBRARY BOOKMARKS */}
          {activeMenu === 'Library' && (
            <div>
              <div className="border-b-2 border-black pb-4 mb-6">
                <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                  <Bookmark className="w-6 h-6 fill-black text-black" />
                  Your Saved Library ({bookmarkedArticles.length})
                </h2>
                <p className="text-xs font-bold text-gray-500 mt-1">Manage articles and newsletter issues you saved to read later.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bookmarkedArticles.length > 0 ? (
                  bookmarkedArticles.map(art => (
                    <div 
                      key={art.id}
                      onClick={() => setActiveArticle(art)}
                      className="bg-white border-4 border-black p-5 rounded-lg shadow-brutal flex flex-col justify-between cursor-pointer hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="w-7 h-7 rounded-full border border-black bg-white flex items-center justify-center text-sm shadow-brutal-sm">
                            {art.avatar}
                          </span>
                          <button 
                            onClick={(e) => toggleBookmark(e, art.id, art.title)}
                            className="p-1 border border-black rounded bg-red-50 hover:bg-red-100 text-red-600 transition-colors shadow-brutal-sm"
                          >
                            <Trash className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h3 className="font-black text-sm uppercase mb-1">{art.title}</h3>
                        <p className="text-[11px] font-semibold text-gray-500 line-clamp-2 leading-relaxed mb-4">{art.description}</p>
                      </div>

                      <div className="flex items-center justify-between border-t border-black/10 pt-3 text-[10px] font-black uppercase text-gray-400">
                        <span>By {art.author}</span>
                        <span>{art.readTime}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 py-16 text-center bg-white border-2 border-black rounded-lg shadow-brutal-sm p-6">
                    <span className="text-4xl">📚</span>
                    <h4 className="font-black text-base uppercase mt-3 mb-1">Your library is empty</h4>
                    <p className="text-xs font-semibold text-gray-500 max-w-sm mx-auto mb-4">Go to the main feed to explore article issues and save them for offline reading.</p>
                    <button 
                      onClick={() => setActiveMenu('Home')}
                      className="bg-brand border-2 border-black px-4 py-2 font-black text-xs uppercase rounded shadow-brutal hover:translate-y-[-1px]"
                    >
                      Browse Feed
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* MENU VIEW 3: STORIES WRITER */}
          {activeMenu === 'Stories' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-black pb-4 mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-black" />
                    Your Written Stories ({userStories.length})
                  </h2>
                  <p className="text-xs font-bold text-gray-500 mt-1">Write, draft, publish, and delete your personal newsletter issues.</p>
                </div>
                <button
                  onClick={() => setIsWriteModalOpen(true)}
                  className="bg-brand-cyan border-2 border-black px-4 py-2 rounded font-black text-xs uppercase shadow-brutal hover:translate-y-[-1px] flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  Write New Story
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {userStories.length > 0 ? (
                  userStories.map(art => (
                    <div 
                      key={art.id}
                      className="bg-white border-2 border-black p-4 rounded shadow-brutal-sm flex items-center justify-between gap-4"
                    >
                      <div className="cursor-pointer flex-1" onClick={() => setActiveArticle(art)}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-brand-purple border border-black text-[9px] px-1.5 py-0.5 rounded font-black text-white uppercase">{art.tags[0]}</span>
                          <span className="text-[10px] font-bold text-gray-400">{art.date} • {art.readTime}</span>
                        </div>
                        <h4 className="font-black text-sm uppercase leading-tight hover:underline">{art.title}</h4>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setActiveArticle(art)}
                          className="bg-gray-100 hover:bg-gray-200 border border-black p-1.5 rounded shadow-brutal-sm transition-all"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => handleDeleteStory(art.id, art.title)}
                          className="bg-red-50 hover:bg-red-100 text-red-600 border border-black p-1.5 rounded shadow-brutal-sm transition-all"
                        >
                          <Trash className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-16 text-center bg-white border-2 border-black rounded-lg shadow-brutal-sm p-6">
                    <span className="text-4xl">📝</span>
                    <h4 className="font-black text-base uppercase mt-3 mb-1">You haven't written any stories yet</h4>
                    <p className="text-xs font-semibold text-gray-500 max-w-sm mx-auto mb-4">Express your coding ideas! Click "Write" above to compose and publish your first article to the feed.</p>
                    <button 
                      onClick={() => setIsWriteModalOpen(true)}
                      className="bg-brand-cyan border-2 border-black px-4 py-2 font-black text-xs uppercase rounded shadow-brutal hover:translate-y-[-1px]"
                    >
                      Start Writing
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* MENU VIEW 4: ANALYTICS & STATS */}
          {activeMenu === 'Stats' && (
            <div className="flex flex-col gap-8">
              <div className="border-b-2 border-black pb-4 mb-2">
                <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                  <BarChart2 className="w-6 h-6 text-black" />
                  Newsletter Analytics
                </h2>
                <p className="text-xs font-bold text-gray-500 mt-1">Review active traffic data, subscription sign-ups, and clap conversions.</p>
              </div>

              {/* Statistics cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Total Views", val: "191,400", change: "+12.4%", desc: "vs last 30 days", color: "bg-brand-pink" },
                  { label: "Total Reads", val: "123,800", change: "+9.8%", desc: "Average read ratio 64%", color: "bg-brand-cyan" },
                  { label: "Active Claps", val: "53,200", change: "+24.1%", desc: "Highly engaging feedback", color: "bg-brand-purple" },
                  { label: "Est. Earnings", val: "$1,452.80", change: "+15.3%", desc: "Byte Size Partner Plan", color: "bg-brand-green" }
                ].map((s, idx) => (
                  <div key={idx} className={`${s.color} border-4 border-black p-5 rounded-lg shadow-brutal`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-black text-xs uppercase text-black/60">{s.label}</span>
                      <span className="bg-white border border-black text-[9px] font-black px-1.5 py-0.5 rounded shadow-brutal-sm text-green-700 flex items-center gap-0.5">
                        <TrendingUp className="w-2.5 h-2.5" />
                        {s.change}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black uppercase leading-tight mb-1 text-black">{s.val}</h3>
                    <p className="text-[10px] font-black text-black/50">{s.desc}</p>
                  </div>
                ))}
              </div>

              {/* Interactive graph representation (Neo-Brutalist bar chart) */}
              <div className="bg-white border-4 border-black p-6 rounded-lg shadow-brutal">
                <h4 className="font-black text-sm uppercase tracking-tight mb-6 border-b border-black pb-2">Traffic Views per Day (June)</h4>
                
                <div className="flex items-end justify-between h-48 gap-1.5 sm:gap-3 px-2 pt-6 bg-gray-50 border-2 border-black rounded">
                  {[
                    { day: "Mon", val: 78, color: "bg-brand" },
                    { day: "Tue", val: 92, color: "bg-brand-pink" },
                    { day: "Wed", val: 56, color: "bg-brand-cyan" },
                    { day: "Thu", val: 84, color: "bg-brand-purple" },
                    { day: "Fri", val: 95, color: "bg-brand-green" },
                    { day: "Sat", val: 42, color: "bg-brand-orange" },
                    { day: "Sun", val: 38, color: "bg-brand-peach" }
                  ].map((bar, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                      <span className="text-[9px] font-black text-black opacity-0 group-hover:opacity-100 transition-opacity mb-1 bg-white border border-black px-1 rounded shadow-brutal-sm">
                        {bar.val * 12}
                      </span>
                      <div 
                        style={{ height: `${bar.val}%` }} 
                        className={`w-full border-t-2 border-x-2 border-black ${bar.color} rounded-t shadow-brutal-sm hover:translate-y-[-2px] transition-transform`} 
                      />
                      <span className="text-[9px] font-black uppercase tracking-wider text-gray-500 mt-2">{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Articles breakdown table */}
              <div className="bg-white border-4 border-black rounded-lg shadow-brutal overflow-hidden">
                <div className="p-4 bg-brand border-b-2 border-black font-black uppercase text-xs tracking-wider">
                  Top performing articles
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-bold text-gray-700">
                    <thead className="bg-gray-100 border-b-2 border-black uppercase text-[10px] font-black">
                      <tr>
                        <th className="p-3">Title</th>
                        <th className="p-3">Views</th>
                        <th className="p-3">Reads</th>
                        <th className="p-3">Read Ratio</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/10">
                      {articlesList.slice(0, 4).map((art, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="p-3 font-black text-black max-w-xs truncate">{art.title}</td>
                          <td className="p-3">{art.views.toLocaleString()}</td>
                          <td className="p-3">{art.reads.toLocaleString()}</td>
                          <td className="p-3 text-green-700">{(art.reads / art.views * 100).toFixed(0)}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* MENU VIEW 5: USER PROFILE EDIT */}
          {activeMenu === 'Profile' && (
            <div className="max-w-2xl">
              <div className="border-b-2 border-black pb-4 mb-8">
                <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                  <User className="w-6 h-6 text-black" />
                  Profile & Custom Settings
                </h2>
                <p className="text-xs font-bold text-gray-500 mt-1">Customize public developer card details, social handles, and avatar configurations.</p>
              </div>

              <div className="bg-white border-4 border-black p-6 rounded-lg shadow-brutal flex flex-col gap-6">
                
                {/* Profile Header Editor */}
                <div className="flex items-center gap-4 border-b-2 border-dashed border-black/10 pb-6">
                  <span className="w-16 h-16 rounded-full border-2 border-black bg-brand flex items-center justify-center text-3xl shadow-brutal-sm">
                    🚀
                  </span>
                  <div>
                    <h3 className="font-black text-base uppercase">Developer Account</h3>
                    <span className="text-[10px] font-bold text-gray-400 block mb-1">Created June 2026 • Tier: Partner Plan</span>
                    <button className="bg-brand-cyan border border-black px-2.5 py-1 text-[9px] font-black uppercase rounded shadow-brutal-sm hover:translate-y-[-1px]">
                      Change Avatar
                    </button>
                  </div>
                </div>

                {/* Form fields */}
                <form className="flex flex-col gap-4 text-xs font-black uppercase" onSubmit={(e) => { e.preventDefault(); showToast("Profile settings saved!"); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-500">First Name</label>
                      <input 
                        type="text" 
                        defaultValue="Alex" 
                        className="bg-gray-50 border-2 border-black p-2.5 rounded font-bold"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-gray-500">Last Name</label>
                      <input 
                        type="text" 
                        defaultValue="Developer" 
                        className="bg-gray-50 border-2 border-black p-2.5 rounded font-bold"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-500">Bio</label>
                    <textarea 
                      rows="3" 
                      defaultValue="Systems architect, writer, and tech enthusiast. Focusing on custom web development, agent orchestrations, and prompt design."
                      className="bg-gray-50 border-2 border-black p-2.5 rounded font-bold text-xs leading-relaxed"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-500">Email Address</label>
                    <input 
                      type="email" 
                      disabled
                      defaultValue="admin@bytesize.dev" 
                      className="bg-gray-100 border-2 border-black/30 p-2.5 rounded font-bold text-gray-400 cursor-not-allowed"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="bg-brand border-2 border-black py-3 rounded font-black text-xs uppercase shadow-brutal hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all mt-2 text-center"
                  >
                    Save Changes
                  </button>
                </form>

              </div>
            </div>
          )}

        </div>
      </main>

      {/* 3. MODAL WRITE A NEW STORY DRAWER */}
      <AnimatePresence>
        {isWriteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWriteModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />
            {/* Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#FFFDF9] border-4 border-black w-full max-w-xl p-6 rounded-lg shadow-brutal-lg relative z-10"
            >
              <button 
                onClick={() => setIsWriteModalOpen(false)}
                className="absolute top-4 right-4 bg-white border-2 border-black p-1 rounded hover:bg-gray-100 transition-colors shadow-brutal-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-2">
                <Edit3 className="w-6 h-6 text-brand-strong" />
                Compose New Story
              </h3>

              <form onSubmit={handlePublishStory} className="flex flex-col gap-4 text-xs font-black uppercase">
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-500">Title</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter article title..."
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="bg-white border-2 border-black p-2.5 rounded font-bold placeholder:text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-500">Category Tag</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="bg-white border-2 border-black p-2.5 rounded font-bold"
                    >
                      {recommendedTopics.map(topic => (
                        <option key={topic} value={topic}>{topic}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-500">Subtitle / Description</label>
                    <input
                      type="text"
                      placeholder="Brief preview text..."
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      className="bg-white border-2 border-black p-2.5 rounded font-bold placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-500">Body Content</label>
                  <textarea
                    rows="6"
                    required
                    placeholder="Write article details here..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="bg-white border-2 border-black p-2.5 rounded font-bold text-xs placeholder:text-gray-400 leading-relaxed"
                  />
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-black/10 mt-2">
                  <button 
                    type="submit"
                    className="flex-1 bg-brand-cyan border-2 border-black py-3 rounded font-black text-sm uppercase shadow-brutal hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-center"
                  >
                    Publish to Feed
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsWriteModalOpen(false)}
                    className="bg-white border-2 border-black px-5 py-3 rounded font-bold text-sm hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. MODAL ARTICLE DETAIL OVERLAY READER */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#FFFDF9] border-4 border-black w-full max-w-2xl p-6 sm:p-8 rounded-lg shadow-brutal-lg relative z-10 max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 bg-white border-2 border-black p-1 rounded hover:bg-gray-100 transition-colors shadow-brutal-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b-2 border-black pb-4 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-xl shadow-brutal-sm">
                    {activeArticle.avatar}
                  </span>
                  <div>
                    <h4 className="font-black text-sm uppercase leading-none">{activeArticle.author}</h4>
                    <span className="text-[10px] font-bold text-gray-500">Published in {activeArticle.publication || "Byte Size Feed"} on {activeArticle.date}</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none mb-3">
                  {activeArticle.title}
                </h1>

                <div className="flex flex-wrap gap-2 mt-4">
                  {activeArticle.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-wider bg-brand border border-black px-2.5 py-0.5 rounded shadow-brutal-sm">
                      {tag}
                    </span>
                  ))}
                  <span className="text-[10px] font-bold text-gray-400 ml-auto flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {activeArticle.readTime}
                  </span>
                </div>
              </div>

              {/* Content body layout */}
              <div className="prose prose-neutral max-w-none text-xs sm:text-sm font-semibold leading-relaxed text-gray-800 space-y-4 mb-8">
                {activeArticle.content.split('\n\n').map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  if (trimmed.startsWith('###')) {
                    return (
                      <h3 key={index} className="text-sm font-black uppercase tracking-tight text-black pt-3">
                        {trimmed.replace('###', '').trim()}
                      </h3>
                    );
                  }
                  if (trimmed.startsWith('1.') || trimmed.startsWith('-')) {
                    return (
                      <div key={index} className="pl-4 border-l-2 border-black my-2 text-xs italic text-gray-600 bg-gray-50 p-2 rounded">
                        {trimmed}
                      </div>
                    );
                  }
                  return <p key={index}>{trimmed}</p>;
                })}
              </div>

              {/* Engagement Controls */}
              <div className="flex items-center justify-between pt-4 border-t-2 border-black/10">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={(e) => handleClap(e, activeArticle.id)}
                    className="flex items-center gap-1.5 bg-brand-pink border-2 border-black px-3.5 py-1.5 rounded font-black text-xs uppercase shadow-brutal hover:translate-y-[-1px] transition-all"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{activeArticle.claps + (clapCounts[activeArticle.id] || 0)} claps</span>
                  </button>

                  <button 
                    onClick={(e) => toggleBookmark(e, activeArticle.id, activeArticle.title)}
                    className={`p-2 border-2 border-black rounded shadow-brutal hover:translate-y-[-1px] transition-all ${
                      bookmarkedIds.includes(activeArticle.id) ? 'bg-brand-cyan' : 'bg-white'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarkedIds.includes(activeArticle.id) ? 'fill-black' : ''}`} />
                  </button>
                </div>

                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.origin + "?article=" + activeArticle.id);
                    showToast("Story link copied to clipboard!");
                  }}
                  className="flex items-center gap-1 text-[10px] font-black uppercase bg-white border-2 border-black p-2 rounded hover:bg-gray-50 transition-colors shadow-brutal-sm"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Share
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. TOAST NOTIFICATION POPUP */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 bg-black text-white border-2 border-white px-4 py-3 rounded shadow-brutal font-black text-[10px] uppercase flex items-center gap-2"
          >
            <Check className="w-4.5 h-4.5 text-green-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
