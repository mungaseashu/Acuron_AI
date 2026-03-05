const partners = [
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "TATA", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
  { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg" },
];

const PartnersMarquee = () => {
  return (
    <section className="py-12 bg-section-alt border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by Industry Leaders
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee w-max">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center justify-center mx-12 min-w-[140px] h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-10 w-auto object-contain dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
