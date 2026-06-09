import Image from "next/image";


export default function Stats() {
  return (
   <section className="relative w-full h-[600px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/globeWorld.png"
        alt="globe background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
          Assisting over <span className="text-blue-300">15,000+</span> job seekers
          find their dream positions
        </h1>

        <p className="mt-4 text-lg text-gray-200 max-w-xl">
          Connecting talent with global opportunities in seconds.
        </p>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl">
            <p className="text-2xl font-bold">50K+</p>
            <span className="text-sm text-gray-200">Active Jobs</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl">
            <p className="text-2xl font-bold">15K+</p>
            <span className="text-sm text-gray-200">Job Seekers</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl">
            <p className="text-2xl font-bold">120+</p>
            <span className="text-sm text-gray-200">Countries</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl">
            <p className="text-2xl font-bold">95%</p>
            <span className="text-sm text-gray-200">Success Rate</span>
          </div>

        </div>
      </div>

    </section>
  );
}

/* Reusable Stat Card */
function StatCard({ icon, value, label }) {
  return (
    <div className="group rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="text-blue-600 bg-blue-100 p-2 rounded-lg group-hover:scale-110 transition">
          {icon}
        </div>

        <div>
          <p className="text-xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </div>
    </div>
  );
}