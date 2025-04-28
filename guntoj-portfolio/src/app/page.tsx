import LampDemo from "@/components/lamp-demo";
import NavbarDemo from "@/components/navbar-menu-demo";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <NavbarDemo />
      <div className="flex flex-col items-center justify-center">
        <LampDemo />
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Checkout my <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Created amazing user interfaces with React, making websites that look great and work smoothly for real-life projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://assets.aceternity.com/templates/startup-1.webp"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Description of project 1
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://assets.aceternity.com/templates/startup-2.webp"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Description of project 2
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://assets.aceternity.com/templates/startup-3.webp"
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 3</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Description of project 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
