export default function Bar({ value, onChange }) {
  return (
    <div className="flex justify-center my-2 w-full">
      <div className="relative w-full max-w-xs">
  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
        </span>
        <input
          type="text"
          placeholder="Search posts..."
          value={value}
          onChange={e => onChange(e.target.value)}
          className="pl-10 pr-8 py-2 border border-emerald-300 focus:border-emerald-500 rounded-full w-full bg-white text-emerald-900 placeholder-emerald-400 outline-none transition shadow-sm"
        />
        {value && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-emerald-600 focus:outline-none"
            onClick={() => onChange("")}
            aria-label="Clear search"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6"/></svg>
          </button>
        )}
      </div>
    </div>
  );
}
