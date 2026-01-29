import { email } from "@/lib/consonants";

export default function Footer() {
  return (
    <footer className="text-center pb-5" id="contact">
      <p className="text-lg">Have a project in mind?</p>
      <a
        href={`mailto:${email}`}
        className="text-2xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
      >
        {email}
      </a>
    </footer>
  );
}
