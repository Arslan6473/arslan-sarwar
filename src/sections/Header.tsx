"use client"

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border backdrop-blur bg-white/10 border-white/15 rounded-full">
        <button onClick={() => scrollToSection("home")} className="nav-item">Home</button>
        <button onClick={() => scrollToSection("projects")} className="nav-item">Projects</button>
        <button onClick={() => scrollToSection("about")} className="nav-item">About</button>
        <button onClick={() => scrollToSection("contact")} className="nav-item bg-white text-gray-900 hover:text-gray-900 hover:bg-white/70">Contact</button>
      </nav>
    </div>
  );
};
