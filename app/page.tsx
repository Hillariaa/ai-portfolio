import NeuralBackground from "@/components/NeuralBackground"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden grid-background">

      <Navbar />
      <NeuralBackground />

      {/* HERO */}

      <section
        id="home"
        className="flex flex-col items-center justify-center text-center pt-40 pb-20 px-6"
      >

        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Hilary Azimoh
        </h1>

        <p className="text-2xl text-gray-300 max-w-2xl">
          Applied AI Engineer building real-world AI systems using
          LLMs, RAG pipelines, and autonomous agents.
        </p>

        <p className="text-gray-400 mt-4 max-w-xl">
          I design production-ready AI systems that integrate reasoning,
          retrieval pipelines, and automation workflows.
        </p>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">

          <a
            href="https://ai-research-agent-0puf.onrender.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition"
          >
            Try Live AI Demo
          </a>

          <a
            href="https://github.com/Hillariaa"
            target="_blank"
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            View GitHub
          </a>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center"
      >

        <div className="relative w-64 h-64 mx-auto">

          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 blur-xl opacity-40"></div>

          <img
            src="/hilary.jpg"
            alt="Hilary Azimoh"
            className="relative w-64 h-64 object-cover rounded-full border border-white/10"
          />

        </div>

        <div>

          <h2 className="text-3xl font-semibold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            I'm an Applied AI Engineer focused on building real-world AI systems that connect powerful models with practical software applications.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            My background spans medicine, software engineering, and cybersecurity, giving me a unique perspective on building reliable, secure, and production-ready AI systems.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            Today I design AI architectures that integrate large language models, automation workflows, and APIs into systems that retrieve knowledge, assist decision-making, and augment human capabilities.
          </p>

        </div>

      </section>

      {/* AI SYSTEMS */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-semibold mb-12 text-center">
          AI Systems I Build
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Interview Intelligence */}

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition">

            <h3 className="text-xl font-semibold mb-3">
              AI Interview Intelligence
            </h3>

            <p className="text-gray-400 mb-5">
              Speech-to-text powered interview analysis system that evaluates candidate responses and produces structured hiring insights.
            </p>

          </div>

          {/* Research Agent */}

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition">

            <h3 className="text-xl font-semibold mb-3">
              AI Research Agent
            </h3>

            <p className="text-gray-400 mb-5">
              Autonomous research agent that searches the web, analyzes sources, and generates structured insights.
            </p>

          </div>

          {/* Knowledge Copilot */}

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition">

            <h3 className="text-xl font-semibold mb-3">
              AI Knowledge Copilot
            </h3>

            <p className="text-gray-400 mb-5">
              Retrieval-augmented AI assistant that connects LLMs to knowledge bases using vector search and document retrieval.
            </p>

          </div>

          {/* Automation Agent */}

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition">

            <h3 className="text-xl font-semibold mb-3">
              AI Career Automation Agent
            </h3>

            <p className="text-gray-400 mb-5">
              Conversational automation agent that explains Hilary’s work, shares portfolio + CV, and schedules recruiter meetings.
            </p>

          </div>

        </div>

      </section>

      {/* SYSTEM ARCHITECTURE */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-semibold text-center mb-12">
          How I Design AI Systems
        </h2>

        <div className="grid md:grid-cols-5 gap-6 text-center">

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Input</h3>
            <p className="text-gray-400 text-sm">
              User queries, audio, or documents enter the system
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Processing</h3>
            <p className="text-gray-400 text-sm">
              Speech-to-text or retrieval pipelines prepare data
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Reasoning</h3>
            <p className="text-gray-400 text-sm">
              LLMs or agents analyze information and generate insights
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Output</h3>
            <p className="text-gray-400 text-sm">
              Structured insights, reports, or decisions
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Deployment</h3>
            <p className="text-gray-400 text-sm">
              FastAPI APIs deployed with Docker and cloud infrastructure
            </p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="px-10 pb-24 max-w-6xl mx-auto"
      >

        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          AI Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Knowledge Copilot */}

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-purple-400 transition">

            <h3 className="text-xl font-semibold mb-2">
              AI Knowledge Copilot
            </h3>

            <p className="text-gray-400 mb-4">
              Retrieval-augmented AI assistant connecting LLMs to knowledge bases using vector search.
            </p>

            <a
              href="https://github.com/Hillariaa/ai-knowledge-copilot"
              className="text-purple-400 hover:underline"
            >
              View Project →
            </a>

          </div>

          {/* Interview Intelligence */}

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-purple-400 transition">

            <h3 className="text-xl font-semibold mb-2">
              AI Interview Intelligence
            </h3>

            <p className="text-gray-400 mb-4">
              AI system analyzing interview transcripts to generate structured candidate insights.
            </p>

            <a
              href="https://github.com/Hillariaa/ai-interview-intelligence"
              className="text-purple-400 hover:underline"
            >
              View Project →
            </a>

          </div>

          {/* Research Agent */}

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-purple-400 transition">

            <h3 className="text-xl font-semibold mb-2">
              AI Research Agent
            </h3>

            <p className="text-gray-400 mb-4">
              Autonomous research agent that performs web search and produces structured insights.
            </p>

            <a
              href="https://github.com/Hillariaa/ai-research-agent"
              className="text-purple-400 hover:underline"
            >
              View Project →
            </a>

          </div>

          {/* Automation Agent */}

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-purple-400 transition">

            <h3 className="text-xl font-semibold mb-2">
              AI Career Automation Agent
            </h3>

            <p className="text-gray-400 mb-4">
              AI agent that answers recruiter questions, shares portfolio and CV, and schedules calls.
            </p>

            <a
              href="https://ai-career-agent-ui.vercel.app/"
              className="text-purple-400 hover:underline"
            >
              Live Demo →
            </a>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-20 text-center"
      >

        <h2 className="text-3xl font-semibold mb-6">
          Let's Build AI Systems
        </h2>

        <p className="text-gray-400 mb-8">
          I'm open to Applied AI Engineering roles and collaborations.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="mailto:hilariezee@gmail.com"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Hillariaa"
            target="_blank"
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/hilary-azimoh-a32b81231/"
            target="_blank"
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            LinkedIn
          </a>

          <a
            href="/Hilary_Azimoh_AI_Engineer_CV.pdf" 
            target="_blank"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition"
          >
            Download CV
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="text-center text-gray-500 pb-10">
        © 2026 Hilary Azimoh — Applied AI Engineer
      </footer>

    </main>
  )
}