export default function Page({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center my-8 gap-2">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 rounded-full font-semibold shadow transition-all duration-150 border-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2
            ${currentPage === i + 1
              ? "bg-emerald-600 text-white border-emerald-600 scale-105"
              : "bg-white border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400"}
          `}
          aria-current={currentPage === i + 1 ? "page" : undefined}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
