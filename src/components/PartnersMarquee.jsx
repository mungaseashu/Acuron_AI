const partners = [
  {
    name: "TATA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
  },
  // {
  //   name: "Microsoft",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  // },
  // {
  //   name: "NVIDIA",
  //   logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg",
  // },
  {
    name: "Attributum",
    logo: "/Attributum logo.svg",
  },
  {
    name: "DM Impact",
    logo: "/DM Impact logo.png",
  },
];

const PartnersMarquee = () => {
  return (
    <section className="py-12 bg-section-alt border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by Industry Leaders
        </p>
      </div>
      <div className="relative w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[60px] md:before:w-[200px] before:bg-gradient-to-r before:from-section-alt before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[60px] md:after:w-[200px] after:bg-gradient-to-l after:from-section-alt after:to-transparent">
        <div className="flex animate-[marquee_80s_linear_infinite] w-max hover:[animation-play-state:paused]">
          {[...Array(16)].flatMap(() => partners).map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="group flex items-center justify-center mx-8 md:mx-12 min-w-[140px] md:min-w-[160px] h-14 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {partner.name === "TATA" ? (
                <div
                  className="h-10 md:h-12 w-full max-w-[120px] bg-foreground dark:bg-white group-hover:!bg-[#1268B3] transition-colors duration-300"
                  style={{
                    maskImage: `url('${partner.logo}')`,
                    WebkitMaskImage: `url('${partner.logo}')`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              ) : (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 md:h-12 w-auto object-contain dark:invert group-hover:dark:invert-0 transition-all duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
