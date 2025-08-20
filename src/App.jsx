import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Bar from "./components/Search";
import Page from "./components/Page";
import { posts } from "./data/posts.js";

const POSTS_PER_PAGE = 3;

export default function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);


  // Sort posts by date descending (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  const categories = ["All", ...new Set(sortedPosts.map(p => p.category))];

  const filtered = sortedPosts.filter(p =>
    (category === "All" || p.category === category) &&
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  // const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE); // removed unused variable

  // Actual latest post (from all posts, not filtered)
  const latestPost = sortedPosts.length > 0 ? sortedPosts[0] : null;
  // Paginate all filtered posts (including latest)
  const paginatedAll = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
  <div className="min-h-screen bg-beige-50 pb-10">
      <Header />
      <div className="max-w-5xl mx-auto px-4">
        {/* Creative Blog Title Banner */}
        <div className="text-center py-8">
          <h2 className="text-5xl font-extrabold text-emerald-600 drop-shadow-lg animate-fade-in">
            Welcome to my mind insights
          </h2>
          <p className="mt-2 text-lg text-emerald-800 animate-fade-in delay-100">Inspiration, stories, and adventures await.</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 animate-fade-in delay-200">
          <Bar value={search} onChange={setSearch} />
          <Filter categories={categories} selected={category} onSelect={cat => {
            setCategory(cat);
            setPage(1);
          }} />
        </div>

        {/* Latest Post (always the actual latest, not filtered) */}
        {latestPost && (
          <div className="mb-10 animate-fade-in-up">
            <div className="mb-2 flex items-center gap-2">
              <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow">Latest Post</span>
              <span className="text-xs text-emerald-700">{new Date(latestPost.date).toLocaleDateString()}</span>
            </div>
            <Link
              to={`/post/${latestPost.id}`}
              className="block focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-3xl"
              aria-label={`Read more about ${latestPost.title}`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-gradient-to-br from-emerald-100 via-white to-emerald-200 transition-transform duration-300 hover:scale-105">
                <img src={latestPost.image} alt={latestPost.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <span className="bg-emerald-600 text-white text-xs px-4 py-1 rounded-full mb-2 self-start shadow">{latestPost.category}</span>
                  <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{latestPost.title}</h3>
                  <p className="text-white/90 mb-4 line-clamp-2">{latestPost.description}</p>
                  <span className="text-sm text-white/70">{new Date(latestPost.date).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Blog Cards (all posts, including latest) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in delay-300">
          {paginatedAll.length === 0 ? (
            <div className="col-span-full text-center text-emerald-800 py-12">
              <span>No posts found.</span>
            </div>
          ) : (
            paginatedAll.map(post => <Card key={post.id} post={post} />)
          )}
        </div>

        {/* Pagination */}
        <Page currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
}
