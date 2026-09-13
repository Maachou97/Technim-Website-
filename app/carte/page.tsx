import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carte de visite | TECHNIM',
  robots: { index: false, follow: false },
};

export default function CartePage() {
  return (
    <main className="min-h-screen bg-[#071a2b]">
      <iframe
        src="/carte.html"
        title="Carte de visite virtuelle TECHNIM"
        className="h-screen w-full border-0"
      />
    </main>
  );
}
