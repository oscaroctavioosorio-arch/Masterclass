import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, ChevronRight, Users, Sparkles, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { IMAGES } from '@/assets/images';
import { handleRegister, fadeInUp, staggerContainer, springPresets } from '@/lib/index';
export default function Home() {
  return <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-[15%] left-[5%] w-4 h-4 bg-primary/30 rotate-45 animate-bounce" style={{
      animationDelay: '0s',
      animationDuration: '3s'
    }} />
      <div className="absolute top-[60%] right-[8%] w-6 h-6 bg-accent/40 rotate-45 animate-bounce" style={{
      animationDelay: '1s',
      animationDuration: '4s'
    }} />
      <div className="absolute bottom-[30%] left-[10%] w-3 h-3 bg-primary/50 rotate-45 animate-bounce" style={{
      animationDelay: '2s',
      animationDuration: '5s'
    }} />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed08_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed08_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-pulse" />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        {/* Floating Tech Elements */}
        <div className="absolute top-[20%] left-[15%] w-20 h-20 border border-primary/20 rotate-45 animate-spin" style={{
        animationDuration: '20s'
      }} />
        <div className="absolute top-[40%] right-[20%] w-16 h-16 border border-accent/30 rotate-12 animate-pulse" />
        <div className="absolute bottom-[30%] left-[25%] w-12 h-12 bg-primary/10 backdrop-blur-sm rotate-45 animate-bounce" style={{
        animationDelay: '1s',
        animationDuration: '6s'
      }} />
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30 font-mono text-sm tracking-wider uppercase backdrop-blur-sm shadow-[0_0_20px_rgba(124,58,237,0.3)] animate-pulse" variant="outline">
                🚀 MASTERCLASS GRATUITA - 2 DE MARZO DE 2026
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 text-accent">
              El Código del Futuro Financiero
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              El sistema te impone las reglas; la nueva economía te devuelve el control. Descubre cómo hackear el sistema tradicional, dominar la Web 3.0 y construir un portafolio de riqueza soberana e inconfiscable.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button size="lg" onClick={handleRegister} className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 group relative px-10 py-8 font-black rounded-2xl bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 transition-all duration-500 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95 border border-primary/30 backdrop-blur-sm text-sm">
                <Sparkles className="mr-2 w-5 h-5 animate-pulse" />
                Asegurar Mi Cupo Ahora
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section: Problema - hidden, merged into valor */}
      <section id="problema" className="py-24 px-4 border-y border-primary/20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        {/* Floating Tech Squares */}
        <div className="absolute top-[10%] left-[5%] w-8 h-8 border-2 border-primary/30 rotate-45 animate-spin" style={{
        animationDuration: '15s'
      }} />
        <div className="absolute top-[70%] right-[8%] w-6 h-6 border-2 border-accent/40 rotate-12 animate-pulse" />
        <div className="absolute bottom-[20%] left-[15%] w-10 h-10 bg-primary/10 backdrop-blur-sm rotate-45 animate-bounce" style={{
        animationDelay: '2s',
        animationDuration: '8s'
      }} />
        
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1)_0%,transparent_50%)] animate-pulse" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-black">La Fórmula de la Multiplicación: El Portafolio Perfecto</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">No dividimos nuestro dinero por activos, lo dividimos por energías. Este es el mapa exacto que usamos:</p>
          </motion.div>
        </div>
      </section>

      {/* Section: Valor (3 Energías) */}
      <section id="valor" className="py-24 px-4 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute top-[20%] left-[10%] w-32 h-32 border border-primary/20 rotate-45 animate-spin" style={{
        animationDuration: '25s'
      }} />
        <div className="absolute bottom-[30%] right-[15%] w-24 h-24 border border-accent/30 rotate-12 animate-pulse" />
        <div className="absolute top-[60%] left-[5%] w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rotate-45 animate-bounce" style={{
        animationDelay: '3s',
        animationDuration: '10s'
      }} />
        
        <div className="container mx-auto relative z-10">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={staggerContainer}>
            {/* Card 1: Energía Intensa */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-card/60 via-primary/5 to-card/40 border-primary/30 backdrop-blur-sm group hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:scale-105 relative overflow-hidden">
                {/* Floating squares inside card */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary/30 rotate-45 animate-pulse" />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-primary/40 rotate-45 animate-bounce" style={{
                animationDelay: '1s',
                animationDuration: '4s'
              }} />
                
                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                    <Zap className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Energía Intensa <span className="block text-sm font-mono text-primary/80 mt-1">(El Cohete) — 5% a 5,000%</span></h3>
                  <p className="text-muted-foreground flex-grow">
                    Capital de riesgo. Usamos Inteligencia Artificial, bots y arbitraje rápido para detectar oportunidades y capturar ganancias en microsegundos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2: Energía Activa */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-card/60 via-accent/5 to-card/40 border-accent/30 backdrop-blur-sm group hover:border-accent/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 relative overflow-hidden">
                {/* Floating squares inside card */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-accent/30 rotate-45 animate-pulse" style={{
                animationDelay: '0.5s'
              }} />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-accent/40 rotate-45 animate-bounce" style={{
                animationDelay: '2s',
                animationDuration: '5s'
              }} />
                
                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    <TrendingUp className="w-8 h-8 text-accent animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Energía Activa <span className="block text-sm font-mono text-accent/80 mt-1">(El Motor) — Flujo de Caja</span></h3>
                  <p className="text-muted-foreground flex-grow">
                    Nuestro salario de la blockchain. Generamos ingresos pasivos diarios a través del Yield Farming, cobrando comisiones automáticas por dar liquidez a la red.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3: Energía Calma */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-card/60 via-pink-500/5 to-card/40 border-pink-400/30 backdrop-blur-sm group hover:border-pink-400/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:scale-105 relative overflow-hidden">
                {/* Floating squares inside card */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-pink-400/30 rotate-45 animate-pulse" style={{
                animationDelay: '1s'
              }} />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-pink-400/40 rotate-45 animate-bounce" style={{
                animationDelay: '3s',
                animationDuration: '6s'
              }} />

                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-400/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                    <Shield className="w-8 h-8 text-pink-400 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Energía Calma <span className="block text-sm font-mono text-pink-400 mt-1">(El Refugio) — La base del imperio</span></h3>
                  <p className="text-muted-foreground flex-grow">
                    Riqueza inquebrantable a largo plazo. Aquí tokenizamos Activos Reales (RWA) y Oro Digital para blindar el patrimonio fuera del sistema bancario y protegerlo de la inflación.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section: Plan de Escape */}
      <section id="plan-escape" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(124,58,237,0.08),transparent)]" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            {/* Glassmorphism container */}
            <div className="relative rounded-3xl border border-primary/30 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_60px_rgba(124,58,237,0.15),inset_0_1px_0_rgba(255,255,255,0.05)] p-8 md:p-12">
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-center text-accent">
                ESTO NO ES UNA CLASE TEÓRICA.<br className="hidden md:block" /> ES TU PLAN DE ESCAPE.
              </h2>

              <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto leading-relaxed">
                Te mostraremos el "detrás de escena" de cómo los grandes capitales se están moviendo a la Web 3.0 mientras el 99% del mundo sigue distraído. En esta Masterclass revelaremos:
              </p>

              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-primary flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <p className="text-foreground/90 leading-relaxed"><span className="font-bold text-black">El fin del monopolio bancario:</span> Cómo crear un búnker de seguridad inconfiscable para tu dinero (Cold Wallets).</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-primary flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <p className="text-foreground/90 leading-relaxed"><span className="font-bold text-black">El salto cuántico del Oro:</span> Por qué la tecnología Blockchain está digitalizando los activos más valiosos del planeta.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-accent flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <p className="text-foreground/90 leading-relaxed"><span className="font-bold text-black">Tú eres el verdadero negocio:</span> Cómo capitalizar esta información para escalar tu marca personal y convertirte en un referente de la nueva economía.</p>
                </li>
              </ul>

              {/* WhatsApp Button */}
              <div className="flex justify-center">
                <a
                  href="https://whatsapp.com/channel/0029Vb7gP3CBadmiPjz46X3U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-lg text-white bg-[#0f1f15] border border-green-500/40 shadow-[0_0_30px_rgba(34,197,94,0.25),inset_0_1px_0_rgba(34,197,94,0.1)] hover:shadow-[0_0_50px_rgba(34,197,94,0.45)] hover:border-green-400/70 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  UNIRME AL CANAL VIP DE WHATSAPP
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: Ponentes */}
      <section id="ponentes" className="py-32 px-4 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />
        <div className="absolute top-[20%] left-[5%] w-20 h-20 border-2 border-primary/20 rotate-45 animate-spin" style={{
        animationDuration: '30s'
      }} />
        <div className="absolute bottom-[25%] right-[10%] w-16 h-16 border-2 border-accent/30 rotate-12 animate-pulse" />
        <div className="absolute top-[70%] left-[15%] w-12 h-12 bg-gradient-to-r from-primary/20 to-accent/20 rotate-45 animate-bounce" style={{
        animationDelay: '4s',
        animationDuration: '12s'
      }} />
        
        {/* Floating Particles */}
        <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-primary/60 rounded-full animate-ping" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute bottom-[40%] left-[25%] w-3 h-3 bg-accent/50 rounded-full animate-ping" style={{
        animationDelay: '3s'
      }} />
        <div className="absolute top-[50%] right-[30%] w-1 h-1 bg-white/80 rounded-full animate-ping" style={{
        animationDelay: '5s'
      }} />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-accent">Conoce a tus anfitriones</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Host: Nicolás */}
            <motion.div className="flex flex-col items-center md:items-start text-center md:text-left" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={springPresets.smooth} viewport={{
            once: true
          }}>
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <img src={IMAGES.NICOLAS_MORENO_2} alt="Nicolás Moreno" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border-2 border-border/50 group-hover:border-primary/50 relative z-10 shadow-2xl" />
              </div>
              <h3 className="text-3xl font-bold mb-2 tracking-tight">NICOLÁS MORENO</h3>
              <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">Experto en Inversiones DeFi y Expansión</p>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Nicolás es experto en apalancarse de ecosistemas web 3.0, utilizando la Blockchain para transformarlos en oportunidades accesibles. Su dominio de las nuevas tecnologías lo convierte en el puente perfecto entre la innovación digital y la riqueza real.
              </p>
            </motion.div>

            {/* Host: Sofía */}
            <motion.div className="flex flex-col items-center md:items-start text-center md:text-left" initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={springPresets.smooth} viewport={{
            once: true
          }}>
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <img src={IMAGES.SOFIA_OSORIO_JPG_1} alt="Sofía Osorio" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border-2 border-border/50 group-hover:border-accent/50 relative z-10 shadow-2xl" />
              </div>
              <h3 className="text-3xl font-bold mb-2 tracking-tight">SOFÍA OSORIO</h3>
              <p className="text-accent font-mono text-sm uppercase tracking-widest mb-4">Experta en Negocios Digitales y Marcas Personales</p>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Especialista en enseñar cómo el dinero y la tecnología pueden trabajar a tu favor. Combina una mentalidad inversionista aguda con estrategias prácticas para construir un ecosistema de riqueza seguro.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Cierre */}
      <section id="cierre" className="py-32 px-4 relative overflow-hidden">
        {/* Enhanced Futuristic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(124,58,237,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-pulse" />
        
        {/* Floating Tech Elements */}
        <div className="absolute top-[15%] left-[8%] w-16 h-16 border-2 border-primary/30 rotate-45 animate-spin" style={{
        animationDuration: '20s'
      }} />
        <div className="absolute top-[25%] right-[12%] w-12 h-12 border-2 border-accent/40 rotate-12 animate-pulse" />
        <div className="absolute bottom-[20%] left-[20%] w-8 h-8 bg-gradient-to-r from-primary/30 to-accent/30 rotate-45 animate-bounce" style={{
        animationDelay: '2s',
        animationDuration: '8s'
      }} />
        <div className="absolute bottom-[35%] right-[25%] w-6 h-6 bg-white/20 rotate-45 animate-ping" style={{
        animationDelay: '4s'
      }} />
        
        {/* Glowing Orbs */}
        <div className="absolute top-[40%] left-[5%] w-4 h-4 bg-primary/50 rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-[50%] right-[8%] w-3 h-3 bg-accent/60 rounded-full blur-sm animate-pulse" style={{
        animationDelay: '2s'
      }} />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeInUp}>
            <Users className="w-12 h-12 text-primary mx-auto mb-8 opacity-50" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-black">
              Es momento de elegir de qué lado de la historia quieres estar.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Los cupos son limitados. Transforma tu visión financiera y toma el control total de tus activos antes de que el futuro te deje atrás.
            </p>
            
            {/* Horarios Internacionales */}
            <div className="mb-12 p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold text-primary">Lunes, 2 de Marzo de 2026</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
                <div className="flex flex-col items-center p-3 bg-card/50 rounded-lg border border-border/30">
                  <span className="text-2xl mb-1">🇨🇴</span>
                  <span className="font-mono text-primary">1:00 PM</span>
                  <span className="text-muted-foreground">Colombia</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-card/50 rounded-lg border border-border/30">
                  <span className="text-2xl mb-1">🇺🇸</span>
                  <span className="font-mono text-primary">1:00 PM</span>
                  <span className="text-muted-foreground">Miami</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-card/50 rounded-lg border border-border/30">
                  <span className="text-2xl mb-1">🇪🇸</span>
                  <span className="font-mono text-primary">7:00 PM</span>
                  <span className="text-muted-foreground">España</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-card/50 rounded-lg border border-border/30">
                  <span className="text-2xl mb-1">🇲🇽</span>
                  <span className="font-mono text-primary">12:00 PM</span>
                  <span className="text-muted-foreground">México</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-card/50 rounded-lg border border-border/30">
                  <span className="text-2xl mb-1">🇸🇻</span>
                  <span className="font-mono text-primary">1:00 PM</span>
                  <span className="text-muted-foreground">El Salvador</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-card/50 rounded-lg border border-border/30">
                  <span className="text-2xl mb-1">🇦🇪</span>
                  <span className="font-mono text-primary">10:00 PM</span>
                  <span className="text-muted-foreground">Dubai</span>
                </div>
              </div>
            </div>

            <Button size="lg" onClick={handleRegister} className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 group relative px-12 py-8 font-black rounded-2xl bg-gradient-to-r from-white via-white to-primary/20 text-black hover:from-white/90 hover:via-white/90 hover:to-primary/30 transition-all duration-500 shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 border border-white/30 text-sm">
              <Sparkles className="mr-3 w-6 h-6 animate-pulse" />
              Registrarme a la Masterclass
            </Button>

            <p className="mt-8 text-sm font-mono text-muted-foreground uppercase tracking-[0.2em] opacity-50">
              © 2026 EL CÓDIGO DEL FUTURO FINANCIERO
            </p>
          </motion.div>
        </div>
      </section>
    </div>;
}