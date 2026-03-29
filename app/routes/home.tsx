import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeX" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')]  bg-cover">
    <Navbar></Navbar>
    <section className="main-section">
      <div>
        <h1>Track your applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-Powered feedback</h2>
      </div>
    </section>

    {
      resumes.map((resume) => {
        return <div>{resume.jobTitle}</div>
      })
    }
  </main>;
}
