"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16 px-6 md:px-12 flex flex-col w-full max-w-[1600px] mx-auto transition-colors duration-300">
      
      {/* HEADER SECTION */}
      <div className="mb-20 md:mb-32">
        <h1 className="text-6xl md:text-8xl font-mono tracking-tight mb-3 text-foreground">
          Contact
        </h1>
        <p className="text-gray-500 max-w-xl text-lg md:text-xl leading-relaxed">
          Let's build something meaningful together. Reach out for inquiries or start a new project.
        </p>
      </div>

      {/* 3-COLUMN GRID */}
      {/* The top border dynamically adapts to the theme */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/20 pt-16 gap-16 md:gap-0">
        
        {/* COLUMN 1: INQUIRIES */}
        <div className="flex flex-col h-full md:pr-12">
          <span className="text-[12px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-12">
            Inquiries
          </span>

          <div className="flex flex-col gap-10 flex-1">
            <div>
              <p className="text-xl font-bold mb-4 text-foreground">Email</p>
              <a 
                href="mailto:hello@transcend.com" 
                className="text-gray-500 mb-1"
              >
                hello@transcend.com
              </a>
            </div>
            <div>
              <p className="text-xl font-bold mb-4 text-foreground">Phone</p>
              <a 
                href="tel:+2348001234567" 
                className="text-gray-500 mb-1"
              >
                +234 810 912 2015
              </a>
            </div>
          </div>

          <div className="flex gap-6 font-bold uppercase mt-16 md:mt-auto font-mono text-sm text-foreground">
            <a href="#" className="hover:opacity-50 transition-opacity">LN</a>
            <a href="#" className="hover:opacity-50 transition-opacity">IG</a>
            <a href="#" className="hover:opacity-50 transition-opacity">TW</a>
          </div>
        </div>

        {/* COLUMN 2: OFFICES */}
        {/* Vertical borders added here specifically for desktop */}
        <div className="flex flex-col md:border-x border-foreground/20 md:px-12">
          <span className="text-[12px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-12">
            Offices
          </span>

          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">NG</h3>
              <p className="text-gray-500 mb-1">1085, Victoria Island</p>
              <p className="text-gray-500 mb-4">Lagos, Nigeria</p>
              <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                6.4253° N, 3.4219° E
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">UK</h3>
              <p className="text-gray-500 mb-1">123 Oxford Street</p>
              <p className="text-gray-500 mb-4">London, United Kingdom</p>
              <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                9.0765° N, 7.3986° E
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 3: NEW PROJECT FORM */}
        <div className="flex flex-col md:pl-12">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-12">
            New Project
          </span>

          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            
            {/* Input Group: Name */}
            <div className="flex flex-col">
              <input 
                type="text" 
                placeholder="NAME" 
                className="w-full border border-foreground/20 bg-transparent p-4 outline-none focus:border-foreground transition-colors placeholder:text-gray-400 text-foreground font-sans" 
              />
              <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mt-2 font-bold">
                Name
              </label>
            </div>

            {/* Input Group: Email */}
            <div className="flex flex-col">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="w-full border border-foreground/20 bg-transparent p-4 outline-none focus:border-foreground transition-colors placeholder:text-gray-400 text-foreground font-sans" 
              />
              <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mt-2 font-bold">
                Email
              </label>
            </div>

            {/* Input Group: Brief */}
            <div className="flex flex-col">
              <textarea 
                placeholder="BRIEF" 
                rows={4} 
                className="w-full border border-foreground/20 bg-transparent p-4 outline-none focus:border-foreground transition-colors placeholder:text-gray-400 text-foreground font-sans resize-none"
              ></textarea>
              <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mt-2 font-bold">
                Brief
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:opacity-50 transition-opacity mt-4 font-mono w-fit text-foreground"
            >
              Submit
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            
          </form>
        </div>

      </div>
    </div>
  );
}