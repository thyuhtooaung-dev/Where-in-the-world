import ThemeToggle from "@/components/ThemeToggle.tsx";

export default function Navbar() {
  return (
    <nav
      className={
        "bg-white dark:bg-blue-900 shadow-lg px-4 py-8 flex items-center justify-between sticky top-0 left-0 z-10 md:px-12"
      }
    >
      <header>
        <h1 className={"font-extrabold text-base md:text-xl"}>
          Where in the world?
        </h1>
      </header>

      <ThemeToggle />
    </nav>
  );
}
