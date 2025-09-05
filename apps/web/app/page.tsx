import { Button } from "@repo/ui";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
        <div className="grid">
          <p>Ismail is Learning Tailwind</p>
        </div>
        <div className="grid">
          <p>Now let&apos;s dive into shadcn/ui</p>
          <Button>Click me</Button>
        </div>
    </div>
  );
}
