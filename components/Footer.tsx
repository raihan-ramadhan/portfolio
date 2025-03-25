export default function Footer() {
  return (
    <footer className="bg-cream text-black py-5 selection:bg-black selection:text-cream flex flex-col items-center w-full gap-y-2">
      <p className="inline-flex items-center gap-1 w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-copyright w-4 h-4"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path>
        </svg>
        <span>2025 Portfolio</span>
      </p>
      <p className="inline-flex items-center gap-1 text-sm">
        <span>Built with</span>
        <svg
          className="w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 1063 1000"
        >
          <path
            fill="currentColor"
            d="M775 1q126 0 207 80t81 207v60q0 285-532 653Q0 634 0 348v-60Q0 161 80.5 81T287 1q81 0 134 30.5T531 130q58-68 111-98.5T775 1z"
          ></path>
        </svg>
        <span>by Raihan.R</span>
      </p>
    </footer>
  );
}
