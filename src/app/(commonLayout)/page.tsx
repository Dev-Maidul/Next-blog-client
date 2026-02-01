import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blog.service";

export default async function Home() {
  const { data } = await blogService.getBlogPosts();
  console.log(data);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button>Shadcn button</Button>
    </div>
  );
}
