export default function Navbar ({items, clearItems}) {
  return (
      <nav className="navbar bg-dark px-2 py-3 border-bottom">
        <div className="container-fluid">
          <a 
          className="navbar-brand text-white"
          href="#">React todo list
          </a>

          { (items.length > 0 ) && (
            <button className="btn btn-outline-light rounded-1"
           onClick={clearItems}
          >
            Clear Items
          </button>
          )}
        </div>
      </nav>
    )
}