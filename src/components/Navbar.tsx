import { useMemo, useState, type MouseEvent } from "react";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpeg";

type NavItem = {
  label: string;
  href: string;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const instagramLink = "https://instagram.com/caiov.personal";
  const whatsappLink = "https://wa.me/553498960962";

  const items = useMemo<NavItem[]>(
    () => [
      { label: "Início", href: "#topo" },
      { label: "Planos", href: "#planos" },
      { label: "Transformações", href: "#transformacoes" },
      { label: "Sobre", href: "#sobre" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "FAQ", href: "#faq" },
    ],
    [],
  );

  const handleNavClick = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    setOpen(false);

    const id = href.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between md:justify-center">
        <div className="hidden md:flex items-center justify-center gap-6">
          <a href="#topo" onClick={handleNavClick("#topo")} className="flex items-center">
            <img src={logo} alt="Logo" className="h-11 w-auto" />
          </a>

          <nav className="flex items-center gap-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick(item.href)}
                className="px-4 py-2 rounded-md text-base font-semibold text-white hover:bg-white hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <a href="#topo" onClick={handleNavClick("#topo")} className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        <div className="md:hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white hover:text-black"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <div className={cn("md:hidden bg-black border-t border-white/10", open ? "block" : "hidden")}>
        <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick(item.href)}
              className="px-3 py-2 rounded-md text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}

          <div className="flex items-center justify-center gap-3 pt-3">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
