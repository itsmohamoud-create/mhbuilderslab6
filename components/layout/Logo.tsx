export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="10" fill="url(#paint0_linear_mh)"/>
        <path d="M10 25V12L18 19L26 12V25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_mh" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED"/>
            <stop offset="1" stopColor="#06B6D4"/>
          </linearGradient>
        </defs>
      </svg>
      <span className="font-syne font-bold text-xl tracking-tight text-white">
        MH Builders <span className="text-violet-light">Lab</span>
      </span>
    </div>
  )
}
