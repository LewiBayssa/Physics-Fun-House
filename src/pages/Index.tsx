
import { Atom, Beaker, Magnet, Rocket } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const topics = [
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Physics",
      description: "Explore the mysterious world of quantum mechanics",
    },
    {
      icon: <Beaker className="w-8 h-8" />,
      title: "Experiments",
      description: "Hands-on physics experiments and demonstrations",
    },
    {
      icon: <Magnet className="w-8 h-8" />,
      title: "Electromagnetics",
      description: "Discover the forces of electricity and magnetism",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Mechanics",
      description: "Learn about forces, motion, and energy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent">
      {/* Hero Section */}
      <div className="container px-4 pt-20 pb-16 text-center animate-fade-in">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full animate-fade-up">
          Welcome to Physics Fun House
        </div>
        <h1 className="max-w-4xl mx-auto text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Discover the Magic of
          <span className="text-primary"> Physics</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Embark on an exciting journey through the fundamental laws that govern our universe. Experience physics like never before.
        </p>
      </div>

      {/* Topics Grid */}
      <div className="container px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                <div className={`text-primary transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                  {topic.icon}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{topic.title}</h3>
              <p className="text-gray-600">{topic.description}</p>
            </div>
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
