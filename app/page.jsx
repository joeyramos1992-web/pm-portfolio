"use client";

const FALLBACK_IMG =
  "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%271200%27%20height%3D%27675%27%3E%0A%3Cdefs%3E%3ClinearGradient%20id%3D%27g%27%20x1%3D%270%27%20y1%3D%270%27%20x2%3D%271%27%20y2%3D%271%27%3E%0A%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%231a1f2a%27/%3E%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%2310161f%27/%3E%3C/linearGradient%3E%3C/defs%3E%0A%3Crect%20width%3D%271200%27%20height%3D%27675%27%20fill%3D%27url%28%23g%29%27/%3E%0A%3Ctext%20x%3D%2750%25%27%20y%3D%2750%25%27%20dominant-baseline%3D%27middle%27%20text-anchor%3D%27middle%27%20fill%3D%27rgba%28255%2C255%2C255%2C0.65%29%27%20font-family%3D%27Arial%27%20font-size%3D%2740%27%3EImage%20coming%20soon%3C/text%3E%0A%3C/svg%3E";

const ponteGadea = [
  {
    name: "Veneto Las Olas",
    units: 259,
    cityState: "Fort Lauderdale, Florida",
    currentName: "",
    website: "https://www.venetolasolas.com/",
    image: "/images/veneto-las-olas.jpg",
  },
  {
    name: "727 West Madison",
    units: 492,
    cityState: "Chicago, Illinois",
    currentName: "",
    website: "https://www.727westmadison.com/",
    image: "/images/727-west-madison.jpg",
  },
  {
    name: "Kiara",
    units: 461,
    cityState: "Seattle, Washington",
    currentName: "",
    website: "https://www.hollandresidential.com/wa/seattle/kiara#hero",
    image: "/images/kiara.jpg",
  },
  {
    name: "19 Dutch",
    units: 482,
    cityState: "New York, New York",
    currentName: "",
    website: "https://www.19dutch.com/",
    image: "/images/19-dutch.jpg",
  },
];

const crescentHeights = [
  {
    name: "NEMA Boston",
    units: 414,
    cityState: "Boston, Massachusetts",
    currentName: "The Metlo",
    website: "https://themetloboston.com/",
    image: "/images/nema-boston.jpg",
  },
  {
    name: "NEMA Chicago",
    units: 800,
    cityState: "Chicago, Illinois",
    currentName: "",
    website: "https://www.rentnemachicago.com/",
    image: "/images/nema-chicago.jpg",
  },
  {
    name: "NEMA San Francisco",
    units: 754,
    cityState: "San Francisco, California",
    currentName: "",
    website: "https://www.rentnema.com/",
    image: "/images/nema-san-francisco.jpg",
  },
  {
    name: "Echelon at K Station",
    units: 350,
    cityState: "Chicago, Illinois",
    currentName: "Echelon Chicago",
    website: "https://www.echelonchicago.com/",
    image: "/images/echelon-at-k-station.jpg",
  },
  {
    name: "Astoria Tower",
    units: 248,
    cityState: "Chicago, Illinois",
    currentName: "",
    website: "https://www.astoriatowerchicago.com/",
    image: "/images/astoria-tower.jpg",
  },
  {
    name: "Burnham Pointe",
    units: 298,
    cityState: "Chicago, Illinois",
    currentName: "",
    website: "https://burnhampointechicago.com/",
    image: "/images/burnham-pointe.jpg",
  },
  {
    name: "Park Michigan",
    units: 344,
    cityState: "Chicago, Illinois",
    currentName: "",
    website: "https://www.parkmichiganchicago.com/",
    image: "/images/park-michigan.jpg",
  },
  {
    name: "Walton on the Park",
    units: 189,
    cityState: "Chicago, Illinois",
    currentName: "Two West Delaware",
    website: "https://twowestdelaware.com/",
    image: "/images/walton-on-the-park.jpg",
  },
  {
    name: "The LEX",
    units: 335,
    cityState: "Chicago, Illinois",
    currentName: "Arrive Lex",
    website: "https://www.arrivelex.com/",
    image: "/images/the-lex.jpg",
  },
  {
    name: "North Harbor Tower",
    units: 600,
    cityState: "Chicago, Illinois",
    currentName: "",
    website: "https://www.northharbortowerchicago.com/",
    image: "/images/north-harbor-tower.jpg",
  }
];

const totalUnits = [...ponteGadea, ...crescentHeights].reduce(
  (sum, p) => sum + p.units,
  0
);

function SectionHeader({ title, subtitle, logoSrc }) {
  return (
    <div className="flex items-start justify-between gap-6 mb-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="flex items-center gap-3 mt-2">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={`${subtitle} logo`}
              className="h-12 sm:h-14 w-auto opacity-95 drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
              loading="lazy"
            />
          ) : null}
          <p className="text-white/60">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function PropertyCard({ p }) {
  return (
    <div className="glass overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="relative w-full aspect-[16/9]">
        <img
          src={p.image}
          alt={p.name}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMG;
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-snug">{p.name}</h3>
            {p.currentName ? (
              <p className="text-sm text-white/70 mt-1">
                Currently known as: {p.currentName}
              </p>
            ) : null}
          </div>

          <a
            className="btn shrink-0"
            href={p.website}
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="chip">{p.units.toLocaleString()} Units</span>
          <span className="chip">{p.cityState}</span>
        </div>
      </div>
    </div>
  );
}

function PropertyGrid({ properties }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((p) => (
        <PropertyCard key={`${p.name}-${p.units}`} p={p} />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14">
          <h1 className="text-4xl font-bold tracking-tight">
            Property Management Portfolio of Joey Ramos
          </h1>
          <p className="mt-3 max-w-3xl text-white/60">
            Preview of Class A Multifamily Assets managed over the course of 12 years with two different firms in Ponte Gadea and Crescent Heights.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="glass rounded-2xl px-6 py-4">
              <div className="text-3xl font-bold">
                {totalUnits.toLocaleString()}
              </div>
              <div className="text-sm text-white/55">Total Units Managed</div>
            </div>
            <div className="glass rounded-2xl px-6 py-4">
              <div className="text-3xl font-bold">
                {ponteGadea.length + crescentHeights.length}
              </div>
              <div className="text-sm text-white/55">Assets</div>
            </div>
          </div>
        </header>

        <section className="mb-16">
          <SectionHeader
            title="Currently Managing"
            subtitle="Ponte Gadea (2023 - Present)"
            logoSrc="/logos/pontegadea.png"
          />
          <PropertyGrid properties={ponteGadea} />
        </section>

        <section className="mb-6">
          <SectionHeader
            title="Previously Managed"
            subtitle="Crescent Heights (2014 - 2023)"
            logoSrc="/logos/ch.jpg"
          />
          <PropertyGrid properties={crescentHeights} />
        </section>

        <footer className="mt-16 pb-8 text-sm text-white/45">
          © {new Date().getFullYear()} • Property Management Portfolio
        </footer>
      </div>
    </main>
  );
}
