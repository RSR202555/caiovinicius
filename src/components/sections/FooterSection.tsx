import { motion } from "framer-motion";
import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/caiov.personal", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/5534993160962", label: "WhatsApp" },
  ];

  const quickLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Planos", href: "#planos" },
    { label: "Transformações", href: "#transformacoes" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-hero-bg text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Caio <span className="text-primary">Vinícius</span>
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Personal Trainer especializado em transformação física e qualidade de vida.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+5534993160962" className="hover:text-primary transition-colors">
                  (34) 99316-0962
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Uberlândia, Minas Gerais - MG</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Comece Agora</h4>
            <p className="text-primary-foreground/70 mb-4">
              Agende sua avaliação gratuita e dê o primeiro passo rumo à sua transformação.
            </p>
            <a
              href="https://wa.me/5534993160962?text=Olá! Quero agendar minha avaliação gratuita."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar Avaliação
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Caio Vinícius Personal Trainer. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              CREF: 055840-G/MG
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;