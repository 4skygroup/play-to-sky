import { useParams } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import City from "../components/Offices/City";

export default function OfficesByCities() {
  // const citiesByRegion = [
  //   {
  //     name: "Europe",
  //     label: "europe",
  //     cities: [
  //       {
  //         name: "Paris",
  //         country: "France",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Londres",
  //         country: "",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Berlin",
  //         country: "Allemagne",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Amsterdam",
  //         country: "",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //     ],
  //     expression: "Innovation & Excellence",
  //   },
  //   {
  //     name: "Afrique",
  //     label: "africa",
  //     cities: [
  //       {
  //         name: "Casablanca",
  //         country: "Maroc",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Le Cap",
  //         country: "Afrique du Sud",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Lagos",
  //         country: "Nigeria",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //     ],
  //     expression: "Creativity & Vision",
  //   },
  //   {
  //     name: "Amérique (Nord)",
  //     label: "north-america",
  //     cities: [
  //       {
  //         name: "New York",
  //         country: "États-Unis d'Amérique",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Toronto",
  //         country: "Canada",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "São Paulo",
  //         country: "Brésil",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Mexico",
  //         country: "Mexique",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //     ],
  //     expression: "Technology & Innovation",
  //   },
  //   {
  //     name: "Moyen-Orient",
  //     label: "middle-east",
  //     cities: [
  //       {
  //         name: "Dubaï",
  //         country: "Émirats Arabes Unis",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Doha",
  //         country: "Qatar",
  //         expression: "",
  //         localAgent: { name: "", number: "" },
  //         status: false,
  //         since: 2026,
  //       },
  //     ],
  //     expression: "Future & Growth",
  //   },
  // ];

  // const citiesByRegion = [
  //   {
  //     name: "Europe",
  //     label: "europe",
  //     cities: [
  //       {
  //         name: "Paris",
  //         country: "France",
  //         expression: "Hub d'Innovation",
  //         localAgent: { name: "Jean Dupont", number: "+33 6 12 34 56 78" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Londres",
  //         country: "Royaume-Uni",
  //         expression: "Financial Tech Hub",
  //         localAgent: { name: "Oliver Smith", number: "+44 7700 900123" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Berlin",
  //         country: "Allemagne",
  //         expression: "Tech Innovations",
  //         localAgent: { name: "Lukas Müller", number: "+49 1512 3456789" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Amsterdam",
  //         country: "Pays-Bas",
  //         expression: "Digital So",
  //         localAgent: { name: "Daan de Vries", number: "+31 6 12345678" },
  //         status: false,
  //         since: 2026,
  //       },
  //     ],
  //     expression: "Innovation & Excellence",
  //   },
  //   {
  //     name: "Afrique",
  //     label: "africa",
  //     cities: [
  //       {
  //         name: "Casablanca",
  //         country: "Maroc",
  //         expression: "",
  //         localAgent: {
  //           name: "Youssef El Amrani",
  //           number: "+212 6 61 23 45 67",
  //         },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Le Cap",
  //         country: "Afrique du Sud",
  //         expression: "",
  //         localAgent: { name: "Thabo Nkosi", number: "+27 71 234 5678" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Lagos",
  //         country: "Nigeria",
  //         expression: "",
  //         localAgent: { name: "Chinedu Okafor", number: "+234 803 123 4567" },
  //         status: false,
  //         since: 2026,
  //       },
  //     ],
  //     expression: "Creativity & Vision",
  //   },
  //   {
  //     name: "Amérique (Nord)",
  //     label: "north-america",
  //     cities: [
  //       {
  //         name: "New York",
  //         country: "États-Unis d'Amérique",
  //         expression: "",
  //         localAgent: { name: "Michael Johnson", number: "+1 212 555 7890" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Toronto",
  //         country: "Canada",
  //         expression: "",
  //         localAgent: { name: "Sophie Tremblay", number: "+1 416 555 1234" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "São Paulo",
  //         country: "Brésil",
  //         expression: "",
  //         localAgent: { name: "Carlos Silva", number: "+55 11 91234 5678" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Mexico",
  //         country: "Mexique",
  //         expression: "",
  //         localAgent: { name: "Luis Hernández", number: "+52 55 1234 5678" },
  //         status: false,
  //         since: 2026,
  //       },
  //     ],
  //     expression: "Technology & Innovation",
  //   },
  //   {
  //     name: "Moyen-Orient",
  //     label: "middle-east",
  //     cities: [
  //       {
  //         name: "Dubaï",
  //         country: "Émirats Arabes Unis",
  //         expression: "",
  //         localAgent: { name: "Omar Al Mansoori", number: "+971 50 123 4567" },
  //         status: false,
  //         since: 2026,
  //       },
  //       {
  //         name: "Doha",
  //         country: "Qatar",
  //         expression: "",
  //         localAgent: { name: "Khalid Al Thani", number: "+974 3312 3456" },
  //         status: false,
  //         since: 2026,
  //       },
  //     ],
  //     expression: "Future & Growth",
  //   },
  // ];
  const citiesByRegion = [
    {
      name: "Europe",
      label: "europe",
      cities: [
        {
          name: "Paris",
          timeZone: "Europe/Paris",
          country: "France",
          expression: "Hub d'Innovation",
          localAgent: { name: "Jean Dupont", number: "+33 6 12 34 56 78" },
          status: true,
          since: 2026,
        },
        {
          name: "Londres",
          timeZone: "Europe/London",
          country: "Royaume-Uni",
          expression: "Financial Tech Hub",
          localAgent: { name: "Oliver Smith", number: "+44 7700 900123" },
          status: false,
          since: 2026,
        },
        {
          name: "Berlin",
          timeZone: "Europe/Berlin",
          country: "Allemagne",
          expression: "Tech Innovations",
          localAgent: { name: "Lukas Müller", number: "+49 1512 3456789" },
          status: false,
          since: 2026,
        },
        {
          name: "Amsterdam",
          timeZone: "Europe/Amsterdam",
          country: "Pays-Bas",
          expression: "Digital Solutions",
          localAgent: { name: "Daan de Vries", number: "+31 6 12345678" },
          status: false,
          since: 2026,
        },
      ],
      expression: "Innovation & Excellence",
    },
    {
      name: "Afrique",
      label: "africa",
      cities: [
        {
          name: "Casablanca",
          timeZone: "Africa/Casablanca",
          country: "Maroc",
          expression: "Business Gateway",
          localAgent: {
            name: "Youssef El Amrani",
            number: "+212 6 61 23 45 67",
          },
          status: false,
          since: 2026,
        },
        {
          name: "Le Cap",
          timeZone: "Africa/Johannesburg",
          country: "Afrique du Sud",
          expression: "Creative Economy",
          localAgent: { name: "Thabo Nkosi", number: "+27 71 234 5678" },
          status: false,
          since: 2026,
        },
        {
          name: "Lagos",
          timeZone: "Africa/Lagos",
          country: "Nigeria",
          expression: "Startup Ecosystem",
          localAgent: { name: "Chinedu Okafor", number: "+234 803 123 4567" },
          status: false,
          since: 2026,
        },
      ],
      expression: "Creativity & Vision",
    },
    {
      name: "Amérique (Nord)",
      label: "north-america",
      cities: [
        {
          name: "New York",
          timeZone: "America/New_York",
          country: "États-Unis d'Amérique",
          expression: "Global Finance Hub",
          localAgent: { name: "Michael Johnson", number: "+1 212 555 7890" },
          status: false,
          since: 2026,
        },
        {
          name: "Toronto",
          timeZone: "America/Toronto",
          country: "Canada",
          expression: "Innovation Center",
          localAgent: { name: "Sophie Tremblay", number: "+1 416 555 1234" },
          status: false,
          since: 2026,
        },
        {
          name: "São Paulo",
          timeZone: "America/Sao_Paulo",
          country: "Brésil",
          expression: "Economic Powerhouse",
          localAgent: { name: "Carlos Silva", number: "+55 11 91234 5678" },
          status: false,
          since: 2026,
        },
        {
          name: "Mexico",
          timeZone: "America/Mexico_City",
          country: "Mexique",
          expression: "Industrial Growth",
          localAgent: { name: "Luis Hernández", number: "+52 55 1234 5678" },
          status: false,
          since: 2026,
        },
      ],
      expression: "Technology & Innovation",
    },
    {
      name: "Moyen-Orient",
      label: "middle-east",
      cities: [
        {
          name: "Dubaï",
          timeZone: "Asia/Dubai",
          country: "Émirats Arabes Unis",
          expression: "Luxury & Innovation",
          localAgent: { name: "Omar Al Mansoori", number: "+971 50 123 4567" },
          status: false,
          since: 2026,
        },
        {
          name: "Doha",
          timeZone: "Asia/Qatar",
          country: "Qatar",
          expression: "Strategic Growth",
          localAgent: { name: "Khalid Al Thani", number: "+974 3312 3456" },
          status: false,
          since: 2026,
        },
      ],
      expression: "Future & Growth",
    },
  ];
  const region = useParams().region;
  return (
    <div>
      <Header bgColor="white" />
      <div className="flex flex-col items-center py-25 gap-y-25">
        <div className="flex flex-col items-center">
          <h1 className="text-[4rem]">Nos bureaux</h1>
          <span className="text-xl text-dark-gray">Villes</span>
        </div>
        <div className="flex flex-wrap gap-12.5 content-center justify-center max-w-312.5">
          {citiesByRegion
            .filter((r) => r.label === region)[0]
            .cities.map((city) => (
              <City cityInfo={city} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
