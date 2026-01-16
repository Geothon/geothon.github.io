import Link from "./components/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center pt-20 flex-col gap-4">
      <h1 className="text-5xl font-bold">My Projects</h1>
      <h1 className="text-2xl pt-5">Apps:</h1>
      <Link href="https://todoapp-1sgl02s6n-geothons-projects.vercel.app" text="Todo App" rating={9} />
      <Link href="/hackerTyping" text="Hacker Typing" rating={6} />

      <h1 className="text-2xl pt-5">Games:</h1>
      <Link href="/number" text="Number Guessing Game" rating={4} />
      <Link href="/grnet" text="Rock Paper Scissors" rating={3}/>

    </div>
  );
}
