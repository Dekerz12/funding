import {
  Calculator,
  CircleDollarSign,
  FolderOpen,
  Mail,
  Send,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="bg-background border-r w-56 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <UsersIcon className="w-6 h-6" />
            <span className="text-base font-semibold">Funding Process</span>
          </div>
          <nav className="space-y-1 mt-12">
            <Link
              href="/calculator"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <Calculator className="w-5 h-5" />
              <span>Calculator</span>
            </Link>

            {/* 
            <Link
              href="/order"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <Send className="w-5 h-5" />
              <span>Ordering Wire</span>
            </Link> */}
          </nav>
        </div>
      </div>
      {children}
    </div>
  );
}
