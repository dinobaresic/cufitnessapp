export interface BlogPost {
    id: number;
    slug: string;
    category: string;
    date: string;
    readTime?: string;
    title: string;
    excerpt: string;
    link: string;
    isAffiliate?: boolean;
    content?: string; // HTML or Markdown content
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        slug: "visokoproteinski-dorucak-za-energiju-cijeli-dan",
        category: "Recepti",
        date: "30.12.2024.",
        readTime: "3 min čitanja",
        title: "Visokoproteinski doručak za energiju cijeli dan",
        excerpt: "Kako započeti dan s 30g proteina u manje od 5 minuta pripreme.",
        link: "/blog/visokoproteinski-dorucak-za-energiju-cijeli-dan",
        content: `
        <p class="lead">Doručak je najvažniji obrok u danu - kliše koji si čuo tisuću puta. Ali ako treniraš, to nije samo kliše, to je činjenica. Kvalitetan doručak postavlja ton za ostatak dana, stabilizira šećer u krvi i osigurava amino kiseline potrebne za oporavak mišića nakon noćnog posta.</p>
        
        <h2>Zašto proteini ujutro?</h2>
        <p>Većina ljudi ujutro jede ugljikohidrate (kruh, žitarice, pekarski proizvodi). To dovodi do naglog skoka inzulina, nakon kojeg slijedi pad energije oko 11 sati. Unosom proteina i zdravih masti osiguravaš stabilnu razinu energije i dulji osjećaj sitosti.</p>
        
        <h3>Sastojci</h3>
        <ul>
          <li>3 jaja (L veličina)</li>
          <li>100g zrnatog sira</li>
          <li>Šaka špinata</li>
          <li>1 kriška integralnog tosta</li>
          <li>Maslinovo ulje za pečenje</li>
        </ul>

        <h3>Priprema</h3>
        <ol>
          <li>Zagrij tavu na srednje jakoj vatri s malo maslinovog ulja.</li>
          <li>Umuti jaja sa zrnatim sirom (ovo je tajna kremoznosti i dodatnih proteina!).</li>
          <li>Dodaj špinat u tavu da povene, zatim ulij smjesu jaja.</li>
          <li>Peci uz lagano miješanje dok jaja nisu gotova po tvojoj želji.</li>
          <li>Posluži uz tost.</li>
        </ol>
        
        <div class="highlight-box">
          <p>💡 <strong>INFO:</strong> Ovaj obrok sadrži cca <strong>450 kalorija i 35g proteina</strong>. Savršen start za svakoga tko želi izgraditi mišiće ili zadržati sitost tijekom dijete.</p>
        </div>
      `
    },
    {
        id: 5,
        slug: "kreatin-mitovi-istine",
        category: "Suplementacija",
        date: "29.12.2024.",
        title: "Kreatin: Mitovi, istine i zašto ga moraš koristiti",
        excerpt: "Nije steroid. Nije opasan. Saznaj zašto je ovo broj 1 suplement za snagu.",
        link: "https://www.myprotein.hr/",
        isAffiliate: true,
    },
    {
        id: 2,
        slug: "najcesce-greske-kod-cucnja",
        category: "Trening",
        date: "28.12.2024.",
        title: "Najčešće greške kod čučnja (i kako ih popraviti)",
        excerpt: "Čučanj je kralj vježbi, ali samo ako ga radiš pravilno. Evo 3 ključna tipsa.",
        link: "/blog/najcesce-greske-kod-cucnja",
        content: "<p>Sadržaj uskoro...</p>"
    },
    {
        id: 3,
        slug: "kako-ostati-dosljedan",
        category: "Lifestyle",
        date: "25.12.2024.",
        title: "Kako ostati dosljedan kad ti se ne da",
        excerpt: "Motivacija je prolazna. Disciplina je ono što donosi rezultate.",
        link: "/blog/kako-ostati-dosljedan",
        content: "<p>Sadržaj uskoro...</p>"
    },
    {
        id: 6,
        slug: "whey-protein-vodic",
        category: "Suplementacija",
        date: "22.12.2024.",
        title: "Whey Protein: Vodič za početnike",
        excerpt: "Koji odabrati? Isolat ili koncentrat? Najbolji omjer cijene i kvalitete na MyProteinu.",
        link: "https://www.myprotein.hr/",
        isAffiliate: true,
    },
    {
        id: 4,
        slug: "post-workout-shake",
        category: "Recepti",
        date: "20.12.2024.",
        title: "Post-workout shake koji zapravo ima dobar okus",
        excerpt: "Zaboravi na grudice i loš okus proteina. Ovo je game changer.",
        link: "/blog/post-workout-shake",
        content: "<p>Sadržaj uskoro...</p>"
    },
];
