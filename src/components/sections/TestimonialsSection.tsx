import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Lucas Lobo",
      role: "Aluno",
      duration: "Treinando atualmente",
      rating: 5,
      text: "Comecei a semana fraco no treino de peito, mas consegui colocar muita intensidade nos outros exercícios. Evoluí bastante na força, principalmente em bíceps, tríceps, ombro e no agachamento fiz o melhor treino de perna da minha vida e cheguei em casa feliz e bem-humorado. Mesmo com a alimentação desregulada, sinto que estou evoluindo muito sob sua tutela. É um alívio estar nas mãos de um profissional assim.",
      image: null,
    },
    {
      name: "Raphaela Silva",
      role: "Aluna",
      duration: "Treinando atualmente",
      rating: 5,
      text: "Semana pesada, mas muito positiva. Consegui trabalhar bem toda a divisão de treino, senti bastante o estímulo muscular e melhorei a alimentação, o que refletiu na disposição. A cada semana percebo evolução física, o que aumenta ainda mais minha motivação.\n\nAgradeço pela orientação e companhia  tem sido uma experiência incrível e muito produtiva.",
      image: null,
    },
    {
      name: "Wanessa Souza",
      role: "Aluna",
      duration: "Treinando atualmente",
      rating: 5,
      text: "Obrigado, Caio! ❤️ Desde que começamos, percebo muitas mudanças e uma constância que eu não imaginava ter. Tudo isso graças ao seu profissionalismo, atenção e cuidado. Dá orgulho ver o profissional que você é e como isso reflete nos resultados. Sou muito grata por tudo.",
      image: null,
    },
    {
      name: "Júnior Oliveira",
      role: "Aluno",
      duration: "Treinando atualmente",
      rating: 5,
      text: "Confio plenamente na sua programação. Esta última semana foi diferente e cheguei realmente ao meu limite, então acredito que um bom resultado está a caminho 🤓😬",
      image: null,
    },
    {
      name: "Sulamita Alves",
      role: "Aluna",
      duration: "Treinando atualmente",
      rating: 5,
      text: "Nesta semana, achei o treino mais intenso, mas, ainda assim, senti menos dor e mais disposição. Seu acompanhamento tem sido excelente — você é um profissional incrível 🤎",
      image: null,
    },
    {
      name: "Lairson Júnior",
      role: "Aluno",
      duration: "Treinando atualmente",
      rating: 5,
      text: "Sobre os treinos, nenhuma crítica. Está tudo certo 👌 apenas elogios ao seu profissionalismo ❤️💪",
      image: null,
    },
    {
      name: "Frederico",
      role: "Aluno",
      duration: "Treinando atualmente",
      rating: 5,
      text: "Você é ótimo e muito eficiente. Sempre resolve tudo na hora.\n\nEu é que demoro para responder, sou indisciplinado e desorganizado, e o mestrado junto com um congresso têm me deixado maluco para a próxima semana, treinador. Com isso, todo o resto inclusive os treinos acaba ficando em segundo plano.\n\nParei no último treino por causa das dores e estou me recuperando de braço e peito. Sem peso nenhum, já cheguei a me sentir fraco.",
      image: null,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Que Meus <span className="text-primary">Alunos Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de pessoas reais que transformaram suas vidas através 
            do treinamento personalizado.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border card-hover relative flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 relative z-10 whitespace-pre-line flex-1">"{item.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.role} • {item.duration}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-lg border border-border">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-foreground font-semibold">5.0</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground text-sm">+120 avaliações no Google</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;