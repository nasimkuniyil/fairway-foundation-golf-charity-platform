export default function About() {
  return (
    <section id="about" className="mb-12 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="hidden md:block mb-12 lg:mb-0">
            <div className="relative group">
              <div className="relative h-[400px] aspect-square rounded-2xl">
                <img
                  src={"/golf-sticks.jpg"}
                  alt="Youth learning golf"
                  className="relative rounded-2xl shadow-warm object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 bg-white p-6 sm:p-8 rounded-2xl shadow-warm border border-slate-100 max-w-xs">
                <div className="text-4xl font-sans font-bold text-brand-orange-dark mb-2">
                  15,000+
                </div>
                <div className="text-slate-600 font-medium">
                  Youths introduced to the game and core values since 2018.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8 mt-6 md:mt-16 lg:mt-0">
            <h2 className="text-sm font-bold text-brand-orange-dark tracking-widest uppercase mb-3">
              Our Mission
            </h2>
            <h3 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 mb-6 text-balance">
              Building Character Through The Game of Golf
            </h3>
            <p className="text-sm md:text-lg text-slate-600 mb-8 leading-relaxed">
              We believe that the values inherent in golf — honesty, integrity,
              and perseverance — are the same values that build strong
              communities. The Fairway Foundation channels the passion of
              golfers into actionable change for underprivileged youth.
            </p>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-orange-soft text-brand-orange-dark">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4 text-sm md:text-base">
                  <h4 className="text-xl font-bold text-slate-900">
                    Community Access
                  </h4>
                  <p className="mt-2 text-slate-600">
                    Breaking down barriers by providing equipment, course
                    access, and professional instruction.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-teal-soft text-brand-teal-dark">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-slate-900">
                    Education Support
                  </h4>
                  <p className="mt-2 text-slate-600">
                    Funding after-school tutoring and college scholarships for
                    our participants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
