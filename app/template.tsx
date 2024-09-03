import { Calculator, FolderOpen, Send, UsersIcon, Clock } from "lucide-react";
import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="bg-background border-r  p-4 flex flex-col justify-between">
        <div>
          <nav className="space-y-1 mt-12">
            <Link
              href="/calculator"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <Calculator className="w-5 h-5" />
              <span>Calculator</span>
            </Link>

            <Link
              href="/docs"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <FolderOpen className="w-5 h-5" />
              <span>Gather Docs</span>
            </Link>

            {/* <Link
              href="/order"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <Send className="w-5 h-5" />
              <span>Ordering Wire</span>
            </Link> */}

            {/* <Link
              href="/trac"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <Clock className="w-5 h-5" />
              <span>Trac Loans</span>
            </Link> */}
          </nav>
        </div>
      </div>
      {children}
    </div>
  );
}
