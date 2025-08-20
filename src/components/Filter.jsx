export default function Filter({ categories, selected, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', margin: '20px 0' }}>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          aria-pressed={selected === cat}
          style={{
            padding: '8px 20px',
            borderRadius: '9999px',
            border: '1px solid #34d399',
            background: selected === cat ? '#059669' : '#fff',
            color: selected === cat ? '#fff' : '#059669',
            fontWeight: 500,
            cursor: 'pointer',
            outline: selected === cat ? '2px solid #059669' : 'none',
            transition: 'all 0.15s',
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
