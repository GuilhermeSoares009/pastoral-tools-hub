import { Footer } from '@/components/layout/Footer';
import { Sidebar } from '@/components/layout/Sidebar';
import { ToolHeader } from '@/components/layout/ToolHeader';

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col md:ml-80">
        <ToolHeader />
        <main className="flex-1 bg-warm-white px-4 py-6 md:px-8">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
