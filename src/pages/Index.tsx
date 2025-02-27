
import { Atom, Beaker, Magnet, Rocket } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const experiments = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Cannon Ball",
      description: "Experience the physics of projectile motion",
      url: "/experiments/cannonball.html"
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Seals's Room 1st Period",
      description: "Step into a unique physics learning environment",
      url: "#" // We'll add this later
    },
    {
      icon: <Magnet className="w-8 h-8" />,
      title: "Haunted 3-Step Pendulum",
      description: "Discover the mesmerizing world of pendulum motion",
      url: "#" // We'll add this later
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: "In Progress",
      description: "Stay tuned for our next exciting experiment",
      url: "#"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent">
      {/* Hero Section */}
      <div className="container px-4 pt-32 pb-24 text-center animate-fade-in">
        <div className="inline-block px-6 py-2 mb-8 text-lg font-medium text-primary bg-primary/10 rounded-full animate-fade-up transform hover:scale-105 transition-transform">
          Welcome to Seals Physics Fun House
        </div>
        <h1 className="max-w-5xl mx-auto text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Discover the Magic of
          <div className="text-primary mt-2">Physics</div>
        </h1>
        <p className="max-w-2xl mx-auto mt-8 text-xl text-gray-600 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Embark on an exciting journey through hands-on experiments that bring physics to life. Experience our unique collection of interactive demonstrations.
        </p>
      </div>

      {/* Experiments Grid */}
      <div className="container px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {experiments.map((experiment, index) => (
            <a
              key={index}
              href={experiment.url}
              className="relative p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-up no-underline"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                <div className={`text-primary transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                  {experiment.icon}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{experiment.title}</h3>
              <p className="text-gray-600">{experiment.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <div className="container px-4 py-16">
        <div className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 text-sm font-medium text-secondary bg-secondary/10 rounded-full">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Interactive Learning Experience
              </h2>
              <p className="text-gray-600">
                Our platform offers engaging physics content through interactive simulations, experiments, and real-world applications. Perfect for students, educators, and physics enthusiasts.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-float"></div>
                <div className="relative p-6 bg-white rounded-2xl shadow-lg">
                  <div className="grid gap-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
                        <p className="text-sm text-gray-600">Interactive Feature {item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
