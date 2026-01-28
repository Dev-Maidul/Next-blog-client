import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex gap-4">
        <Link href="/dashboard/analytics/monthly">
          <Button className="cursor-pointer">Monthly</Button>
        </Link>
        <Link href="/dashboard/analytics/weekly">
          <Button className="cursor-pointer">Weekly</Button>
        </Link>
      </div>
      {children}
    </div>
  );
}
