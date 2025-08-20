import { Link } from "react-router-dom";

export default function Card({ post }) {
  return (
    <Link
      to={`/post/${post.id}`}
  className="group block bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
      tabIndex={0}
      aria-label={`Read more about ${post.title}`}
    >
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:brightness-90 transition duration-200"
        />
  <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow">
          {post.category}
        </div>
      </div>
      <div className="p-5">
  <h2 className="text-2xl font-bold text-emerald-700 group-hover:underline mb-1 line-clamp-2">
          {post.title}
        </h2>
  <p className="text-emerald-400 text-xs mb-2">{new Date(post.date).toLocaleDateString()}</p>
  <p className="mt-1 text-emerald-900 line-clamp-3">{post.description}</p>
  <span className="inline-block mt-4 text-emerald-600 font-semibold group-hover:underline">Read more →</span>
      </div>
    </Link>
  );
}
