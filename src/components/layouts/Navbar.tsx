export default function Navbar() {
  return (
    <nav
      className={
        "bg-white shadow-lg px-4 py-8 flex items-center justify-between sticky top-0 left-0 z-10"
      }
    >
      <header>
        <h1 className={"font-extrabold text-base"}>Where in the world?</h1>
      </header>
      <div className="flex gap-3">
        <img src="/moon-svgrepo-com.svg" alt="Moon icon" />
        <span className={"font-semibold"}>Dark Mode</span>
      </div>
    </nav>
  );
}
