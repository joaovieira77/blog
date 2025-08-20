import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) return <div className="p-8 text-center text-2xl">Post not found.</div>;

  return (
  <div className="min-h-screen bg-beige-50 flex flex-col items-center justify-center py-12 animate-fade-in">
  <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover" />
        <div className="p-10 md:p-16">
          <span className="inline-block bg-emerald-600 text-white text-lg px-6 py-2 rounded-full mb-6 shadow">{post.category}</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-800 mb-6 leading-tight drop-shadow-lg">{post.title}</h1>
          <p className="text-2xl text-emerald-500 mb-8">{new Date(post.date).toLocaleDateString()}</p>
          <div className="prose prose-lg max-w-none text-emerald-900 mb-12 leading-relaxed">
            {post.text}
          </div>
          <Link to="/" className="inline-block text-lg text-emerald-600 font-bold hover:underline transition">← Back to blog</Link>
        </div>
      </div>
    </div>
  );
}
