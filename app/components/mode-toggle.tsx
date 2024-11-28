import { Theme, useTheme } from "../react-router-theme";

export function ModeToggle() {
  const [, setTheme] = useTheme();
  return (
    <div className="flex items-center justify-center gap-8">
      <button
        className="text-black dark:text-white"
        onClick={() => setTheme(null)}
      >
        System
      </button>
      <button
        className="text-black dark:text-white"
        onClick={() => setTheme(Theme.LIGHT)}
      >
        Light
      </button>
      <button
        className="text-black dark:text-white"
        onClick={() => setTheme(Theme.DARK)}
      >
        Dark
      </button>
    </div>
  );
}
