import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target, Dumbbell, Heart } from "lucide-react";
import trainerProfile from "@/assets/trainer-profile.jpg";

const AboutSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: "Bacharel em Educação Física, com especialização em biomecânica, musculação e reabilitação músculo esquelética.",
    },
    {
      icon: Briefcase,
      title: "+5 Anos de Experiência",
      description: "Mais de 5 anos de experiência com treinos personalizados e orientação individualizada.",
    },
    {
      icon: Target,
      title: "Especialidades",
      description: "Biomecânica aplicada, musculação e reabilitação músculo esquelética para evoluir com segurança.",
    },
    {
      icon: Dumbbell,
      title: "Acompanhamento Humanizado",
      description: "Acompanhamento humanizado e exclusivo, com atenção real às suas necessidades e objetivos.",
    },
    {
      icon: Heart,
      title: "Minha Missão",
      description: "Ajudar você a conquistar não apenas um corpo melhor, mas uma vida mais saudável e feliz.",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-lavender">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-6" />
              <img
                src={trainerProfile}
                alt="Personal Trainer Caio Vinícius - Foto Profissional"
                className="relative z-10 w-full h-full object-cover object-[50%_20%] rounded-3xl border-4 border-primary shadow-xl"
              />
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="absolute bottom-3 right-3 md:-bottom-6 md:-right-6 z-20 bg-card p-4 rounded-2xl shadow-lg border border-border"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Vidas Transformadas</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre o Personal
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Olá, eu sou o <span className="text-primary">Caio Vinícius</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Caio Vinícius.
              Bacharel em educação física, especialista em biomecânica, musculação e reabilitação músculo esquelética,
              + de 5 anos de experiência, acompanhamento humanizado e exclusivo.
            </p>

            {/* Credentials Grid */}
            <div className="space-y-4">
              {credentials.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;