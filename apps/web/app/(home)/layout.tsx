import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { ToolSearchProvider } from '@/components/tools/ToolSearchContext';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ToolSearchProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <Header />
          <main className="flex-1 bg-warm-white px-4 py-6 md:px-8">
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </ToolSearchProvider>
  );
}
