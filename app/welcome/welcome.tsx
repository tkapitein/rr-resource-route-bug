import { ModeToggle } from "~/components/mode-toggle";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 bg-white dark:bg-black min-h-screen flex-col">
      <ModeToggle />
      <h1 className="text-4xl font-bold text-black dark:text-white">Welcome</h1>
    </main>
  );
}
