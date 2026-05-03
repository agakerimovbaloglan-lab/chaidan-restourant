import { useState } from "react";
import { Header } from "@/components/menu/Header";
import { Hero } from "@/components/menu/Hero";
import { CategoryNav } from "@/components/menu/CategoryNav";
import { MenuSection } from "@/components/menu/MenuSection";
import { FoodDetail } from "@/components/menu/FoodDetail";
import { categories, type FoodItem } from "@/data/menu";

const Index = () => {
  const [selected, setSelected] = useState<FoodItem | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="menu">
          <CategoryNav />
          <div className="container py-12">
            {categories.map((cat) => (
              <MenuSection key={cat.id} category={cat} onSelect={setSelected} />
            ))}
          </div>
        </div>

        <footer id="contact" className="border-t border-border/40 py-16 mt-16">
          <div className="container text-center">
            <div className="font-display text-4xl text-gold mb-3">Chaidan Tea House</div>
            <p className="text-sm text-muted-foreground uppercase tracking-[0.3em]">
              Bakı · Nizami küç. 28 · +994 12 555 00 00
            </p>
            <div className="divider-gold my-8 max-w-xs mx-auto" />
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Chaidan. Hər süfrədə bir hekayə.
            </p>
          </div>
        </footer>
      </main>

      <FoodDetail item={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Index;
