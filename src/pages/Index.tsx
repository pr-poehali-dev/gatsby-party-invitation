import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/dac6224d-9dba-4103-8f6e-9a8189684386/files/c834271e-ad7e-4541-9adf-2f16f7c6722b.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-1 bg-primary animate-shimmer" />
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 text-primary">
              С РАДОСТЬЮ
            </h1>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 text-secondary">
              приглашаю вас
            </h2>
            <p className="text-2xl md:text-3xl font-light text-secondary mb-8">
              отпраздновать мой юбилей
            </p>
            
            <div className="mt-12 mb-8 flex justify-center">
              <div className="w-32 h-1 bg-primary animate-shimmer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-4">
              <div className="flex flex-col items-center animate-scale-in" style={{animationDelay: '0.1s'}}>
                <div className="w-20 h-20 border-2 border-primary flex items-center justify-center mb-4 rotate-45">
                  <Icon name="Sparkles" className="text-primary -rotate-45" size={32} />
                </div>
                <p className="text-secondary text-sm uppercase tracking-widest">Элегантность</p>
              </div>

              <div className="flex flex-col items-center animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 border-2 border-primary flex items-center justify-center mb-4 rotate-45">
                  <Icon name="Music" className="text-primary -rotate-45" size={32} />
                </div>
                <p className="text-secondary text-sm uppercase tracking-widest">Джаз</p>
              </div>

              <div className="flex flex-col items-center animate-scale-in" style={{animationDelay: '0.3s'}}>
                <div className="w-20 h-20 border-2 border-primary flex items-center justify-center mb-4 rotate-45">
                  <Icon name="GlassWater" className="text-primary -rotate-45" size={32} />
                </div>
                <p className="text-secondary text-sm uppercase tracking-widest">Шампанское</p>
              </div>

              <div className="flex flex-col items-center animate-scale-in" style={{animationDelay: '0.4s'}}>
                <div className="w-20 h-20 border-2 border-primary flex items-center justify-center mb-4 rotate-45">
                  <Icon name="PartyPopper" className="text-primary -rotate-45" size={32} />
                </div>
                <p className="text-secondary text-sm uppercase tracking-widest">Веселье</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
                Детали события
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto animate-shimmer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card border-2 border-primary p-8 text-center hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 border-2 border-primary flex items-center justify-center rotate-45">
                    <Icon name="Calendar" className="text-primary -rotate-45" size={28} />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">Дата</h3>
                <p className="text-3xl font-light text-secondary mb-2">20.12.2025</p>
              </Card>

              <Card className="bg-card border-2 border-primary p-8 text-center hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 border-2 border-primary flex items-center justify-center rotate-45">
                    <Icon name="Clock" className="text-primary -rotate-45" size={28} />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">Время</h3>
                <p className="text-3xl font-light text-secondary mb-2">16:00</p>
              </Card>

              <Card className="bg-card border-2 border-primary p-8 text-center hover:scale-105 transition-transform duration-300 animate-fade-in md:col-span-3 lg:col-span-1" style={{animationDelay: '0.3s'}}>
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 border-2 border-primary flex items-center justify-center rotate-45">
                    <Icon name="MapPin" className="text-primary -rotate-45" size={28} />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">Место</h3>
                <p className="text-xl font-light text-secondary">Банкетный зал<br/>Буа-Алан</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-card/30 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
                Дресс-код
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto animate-shimmer" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-card border-2 border-primary p-12 animate-scale-in">
                <div className="text-center">
                  <p className="font-serif text-3xl text-primary mb-6">Мужчины</p>
                  <div className="flex justify-center gap-8 mb-6 flex-wrap">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 border-2 border-primary flex items-center justify-center mb-4 rotate-45">
                        <Icon name="Shirt" className="text-primary -rotate-45" size={40} />
                      </div>
                      <p className="text-secondary text-lg">Подтяжки</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 border-2 border-primary flex items-center justify-center mb-4 rotate-45">
                        <span className="text-4xl -rotate-45">🎀</span>
                      </div>
                      <p className="text-secondary text-lg">Бабочка</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 border-2 border-primary flex items-center justify-center mb-4 rotate-45">
                        <span className="text-4xl -rotate-45">🎩</span>
                      </div>
                      <p className="text-secondary text-lg">Шляпа</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic text-lg">
                    Шляпы приветствуются!
                  </p>
                </div>
              </Card>

              <Card className="bg-card border-2 border-primary p-12 animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="text-center">
                  <p className="font-serif text-3xl text-primary mb-6">Женщины</p>
                  <div className="flex justify-center gap-8 mb-6 flex-wrap">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 border-2 border-primary flex items-center justify-center mb-4 rotate-45">
                        <span className="text-4xl -rotate-45">👗</span>
                      </div>
                      <p className="text-secondary text-lg">Платье</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 border-2 border-primary flex items-center justify-center mb-4 rotate-45">
                        <Icon name="Feather" className="text-primary -rotate-45" size={40} />
                      </div>
                      <p className="text-secondary text-lg">Боа</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 border-2 border-primary flex items-center justify-center mb-4 rotate-45">
                        <span className="text-4xl -rotate-45">😊</span>
                      </div>
                      <p className="text-secondary text-lg">Улыбка</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-1 bg-primary animate-shimmer" />
            </div>
            <p className="font-serif text-3xl md:text-4xl text-secondary italic mb-8">
              "Я всегда гонялся за завтрашним днем.<br/>
              А сегодня — это все, что у нас есть"
            </p>
            <p className="text-primary text-xl">— Ф. Скотт Фицджеральд</p>
            <div className="mt-8 flex justify-center">
              <div className="w-32 h-1 bg-primary animate-shimmer" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;