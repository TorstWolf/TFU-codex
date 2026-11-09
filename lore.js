/* ============================================================
   TFU — Torstwolfs Fictional Universe
   All lore lives in this one file. Source: TFU_Canon_Lore_Master_Note.md (9 Nov 2026).
   See README.md for how to add or change entries.
   ============================================================ */
window.CODEX = {
  title: "TFU Codex",
  backLink: { label: "← Vayn's Library", href: "https://vaynslibrary.com" },

  // Entry types, in the order they're listed on a page: id: [singular, plural]
  types: {
    world:        ["Universe", "Universes"],
    continent:    ["Continent", "Continents"],
    faction:      ["Faction", "Factions"],
    country:      ["Country", "Countries"],
    subfaction:   ["Sub-faction", "Sub-factions"],
    city:         ["Place", "Places"],
    organization: ["Organization", "Organizations"],
    cosmos:       ["Cosmology", "Cosmology"],
    realm:        ["Realm", "Realms"],
    character:    ["Character", "Characters"],
    story:        ["Story", "Stories"],
    topic:        ["Lore", "Lore"],
    continuity:   ["Alternate Universe", "Alternate Universes"],
  },

  // Faction looks. An entry with  theme: "elven"  uses that look, and so does everything inside it.
  //   accent / accent2 = main and second color · font = heading font · caps = UPPERCASE headings
  themes: {
    default:  { accent: "#7c9cff", accent2: "#b18cff", font: "Space Grotesk" },
    elven:    { accent: "#d8b45a", accent2: "#4fb3ff", font: "Cormorant Garamond", tracking: "0" },
    northern: { accent: "#7fa6e0", accent2: "#c9d6e8", font: "Marcellus", tracking: ".02em" },
    wiu:      { accent: "#e0413f", accent2: "#a9adb3", font: "Barlow Condensed", caps: true, tracking: ".02em" },
    imperium: { accent: "#e0b043", accent2: "#a3243b", font: "Cinzel", tracking: ".02em" },
    southern: { accent: "#f2a93b", accent2: "#c2412b", font: "Outfit" },
    eastern:  { accent: "#3fb6e6", accent2: "#d6a542", font: "Sora" },
    pantheon: { accent: "#c3c9d3", accent2: "#38d9e8", font: "Rajdhani", caps: true, tracking: ".06em" },
    anomaly:  { accent: "#22d3e6", accent2: "#8b93a1", font: "Rajdhani", caps: true, tracking: ".06em" },
    cosmos:   { accent: "#b18cff", accent2: "#f2c86b", font: "Cormorant Garamond", tracking: "0" },
    hell:     { accent: "#e5483e", accent2: "#f08a3c", font: "Cinzel", tracking: ".02em" },
    fantasy:  { accent: "#c9a36a", accent2: "#b23a3a", font: "Cinzel", tracking: ".02em" },
  },

  /* Fields: id, parent, type, name, tagline, summary, body, facts, related, image,
     emblem (transparent faction symbol), theme (one of the themes above),
     status (e.g. "Working name" — shows a small badge for not-yet-final canon) */
  entries: [
    // =====================================================================
    // THE UNIVERSE
    // =====================================================================
    {
      id: "tfu", type: "world", name: "TFU",
      theme: "default",
      image: "img/tfu.jpg",
      tagline: "Torstwolfs Fictional Universe",
      summary: "Everyday life, advanced technology, magic, interdimensional realms, gods, angels, demons — and threats from outside the universe itself.",
      body: `TFU brings together ordinary civilian life, advanced technology, magic, interdimensional realms, gods, angels, demons, and threats that come from outside the universe. Three main peoples share it:

- **Humans** have no natural way to work magic directly, but they have built advanced technology. Like every being, they still carry innate mana.
- **Elves** have the strongest natural bond with magic. They are the main users of mana crystals and magi-tech, and their Empire reaches across dimensions.
- **Demihumans** have animal traits, magical senses and innate mana, but weaker direct magic than elves. They range from mostly human with ears and tails to fully furred.

Species and nationality are different things: the [[northern-tribes|Northern Tribes]] include both humans and demihumans, and human-majority nations are not exclusively human.

The world has five continents, Western, Central, Northern, Southern and Eastern, separated by oceans and capped by ice at both poles. Central seas make north–south warfare difficult, and mountain ranges and rivers form important borders.

**The present day** has no major international wars. Internal feuds trouble the [[southern-federation|Southern Federation]], the [[eastern-union|Eastern Union]] and the [[imperium-austriacum]], and covert operations against [[anomalies]] continue in the shadows.`,
      facts: {
        Continents: "5 — [[western-continent|Western]], [[central-continent|Central]], [[northern-continent|Northern]], [[southern-continent|Southern]], [[eastern-continent|Eastern]]",
        Peoples: "Humans, elves, demihumans",
        "Space travel": "Solar-system colonies; FTL is impossible",
        "Present era": "No major international wars",
      },
    },

    // =====================================================================
    // CONTINENTS
    // =====================================================================
    {
      id: "western-continent", parent: "tfu", type: "continent", name: "Western Continent",
      theme: "wiu",
      image: "img/western-continent.jpg",
      tagline: "Five nations, one union.",
      summary: "Home of the Western Industrial Union. Fewest demihumans of any continent.",
      body: `The Western Continent belongs to the [[wiu]]: its mainland members, plus a large island to the northwest.

It has the fewest demihumans of any continent. East of it lies the [[central-continent]], home of the [[elven-empire|Elven Empire]] and the [[imperium-austriacum]].`,
      facts: { "Major powers": "[[wiu]]", Demihumans: "Fewest of any continent" },
    },
    {
      id: "central-continent", parent: "tfu", type: "continent", name: "Central Continent",
      image: "img/central-continent.jpg",
      tagline: "Elves and Rome, side by side.",
      summary: "Home of the Elven Empire and, to its south, the Imperium Austriacum: old rivals over land, space and resources.",
      body: `The Central Continent is home to two great powers: the [[elven-empire|Elven Empire]], east of the [[wiu]], and south of it the [[imperium-austriacum]].

Their old rivalry over land, space and resources shaped the continent's history and helped push the elves toward unification.`,
      facts: { "Major powers": "[[elven-empire]], [[imperium-austriacum]]" },
    },
    {
      id: "northern-continent", parent: "tfu", type: "continent", name: "Northern Continent",
      theme: "northern",
      image: "img/northern-continent.jpg",
      tagline: "Winter, wolves and walking cities.",
      summary: "The far north, home of the Northern Tribes and their colossal landships.",
      body: `The far north belongs to the [[northern-tribes|Northern Tribes]]: human and demihuman communities united under a single king. Together with the South, it has the largest demihuman population of any continent.

The [[eastern-union|Eastern Union]] sometimes trades with the North.`,
      facts: { "Major powers": "[[northern-tribes]]", Demihumans: "Among the most of any continent" },
    },
    {
      id: "southern-continent", parent: "tfu", type: "continent", name: "Southern Continent",
      theme: "southern",
      image: "img/southern-continent.jpg",
      tagline: "Across the southern ocean.",
      summary: "Home of the Southern Federation, a large bloc with a strong demihuman presence. Seasons run opposite to the north.",
      body: `Across the ocean to the south lies the [[southern-federation|Southern Federation]]. Together with the North, the South has the largest demihuman population of any continent. Its seasons run opposite to the Northern Hemisphere's.

The South trades regularly with the [[eastern-union|Eastern Union]].`,
      facts: { "Major powers": "[[southern-federation]]", Demihumans: "Among the most of any continent" },
    },
    {
      id: "eastern-continent", parent: "tfu", type: "continent", name: "Eastern Continent",
      theme: "eastern",
      image: "img/eastern-continent.jpg",
      tagline: "Free cities of the far east.",
      summary: "The advanced city-states of the Eastern Union. Few elves, but many demihumans.",
      body: `The far east is home to the [[eastern-union|Eastern Union]], a loose union of advanced city-states. Few elves live here, but the demihuman population is sizable.

The East trades with the South and sometimes with the North.`,
      facts: { "Major powers": "[[eastern-union]]", Elves: "Fewest of any continent" },
    },

    // =====================================================================
    // WESTERN INDUSTRIAL UNION
    // =====================================================================
    {
      id: "wiu", parent: "western-continent", type: "faction", name: "Western Industrial Union",
      theme: "wiu", emblem: "img/emblems/wiu.png",
      image: "img/wiu.jpg",
      tagline: "Five nations, one union.",
      summary: "A union of five human-majority countries, each with its own culture, from poetic to practical.",
      body: `The WIU is a union of several human-majority countries, not one uniform nation. Its member cultures range from romantic to practical.

Its core is made up of exactly five countries: an island nation northwest of the mainland, plus [[valedor]], [[eisenrhein]], [[kriegwald]] and [[freymark]] on the mainland.`,
      facts: { Abbreviation: "WIU", Members: "5 countries", Peoples: "Human-majority" },
    },
    {
      id: "wiu-island", parent: "wiu", type: "country", name: "The Northwestern Isle",
      status: "Name pending",
      summary: "The WIU member that holds a large island northwest of the mainland.",
      body: `One of the five core members of the [[wiu]], occupying a large island northwest of the mainland. Its final name has not been decided yet.`,
    },
    {
      id: "valedor", parent: "wiu", type: "country", name: "Valedor",
      tagline: "The country of poets.",
      summary: "The WIU's country of poets.",
    },
    {
      id: "eisenrhein", parent: "wiu", type: "country", name: "Eisenrhein",
      tagline: "Engineering that simply works.",
      summary: "Known for its effective engineering.",
    },
    {
      id: "kriegwald", parent: "wiu", type: "country", name: "Kriegwald",
      tagline: "Strength in exchange for supply.",
      summary: "The union's military power, which it trades for energy and supplies.",
    },
    {
      id: "freymark", parent: "wiu", type: "country", name: "Freymark",
      tagline: "The breadbasket of the West.",
      summary: "Rural food producer. Its citizens are armed because of dangerous wildlife.",
    },

    // =====================================================================
    // ELVEN EMPIRE
    // =====================================================================
    {
      id: "elven-empire", parent: "central-continent", type: "faction", name: "The Elven Empire",
      theme: "elven", emblem: "img/emblems/elven-empire.png",
      image: "img/elven-empire.jpg",
      tagline: "An empire across dimensions.",
      summary: "The unified elven tribes. An interdimensional empire powered by mana crystals, magi-tech and skyships.",
      body: `Elves once lived in separate tribes, and expansion and war involving humans and demihumans devastated them. The future [[emperor]] travelled among those peoples, learned from them, and then united the elven tribes.

The historical rivalry with the [[imperium-austriacum]] was about **land, space and resources**, not racial hatred, and that pressure helped drive elven unification. Since then the Empire has become interdimensional, and it now cares more about other magical realms than about conquering Earth.

Elves have no major shared religion, though some see the Emperor as godlike because of how old he is. Their social hierarchy rests on age, accumulated wisdom and elder status.

**Military and infrastructure:** magi-tech powered by mana crystals, skyships, interdimensional ground soldiers, motorized divisions, and magi-tech tanks and cars.`,
      facts: { Ruler: "[[emperor]]", Placement: "East of the [[wiu]]", Power: "Mana crystals & magi-tech", Religion: "None shared" },
      related: ["imperium-austriacum"],
    },
    {
      id: "emperor", parent: "elven-empire", type: "character", name: "Emperor of Elvenkind",
      image: "img/emperor.jpg",
      tagline: "The eldest living elf.",
      summary: "Ancient, kind and wise. Unifier and ruler of the interdimensional Empire.",
      body: `The Emperor is ancient, kind and wise. He is the eldest living elf and existed before the ancient human civilizations. He travelled among humans and demihumans before he united the elven tribes.

He rules the interdimensional Empire and is the adoptive father of [[lillith]] and [[victoria]]. His personal name is not known.`,
      facts: { Role: "Ruler of the Elven Empire", Children: "[[lillith]], [[victoria]] (adopted)" },
    },
    {
      id: "lillith", parent: "elven-empire", type: "character", name: "Lillith",
      image: "img/lillith.jpg",
      tagline: "The Emperor's Blade.",
      summary: "Leader of the Empire's ground forces. An obsessive strategist, and just as obsessive in love.",
      body: `Lillith is the Emperor's adopted daughter and [[victoria]]'s older sister. She has existed since around the Fall of Rome and leads the imperial ground forces.

She is an obsessive strategist, and just as obsessive in love: when she wants someone, she pursues them intensely. Only the [[emperor]] can restrain her.

She is the main lead of [[emperors-blade]].`,
      facts: { Appearance: "White hair, red eyes", Role: "Leader of ground forces", Weapon: "**Oathblade**: ceremonial saber with a pale-silver blade, black hilt, and runes that channel the elements" },
    },
    {
      id: "victoria", parent: "elven-empire", type: "character", name: "Victoria",
      image: "img/victoria.jpg",
      tagline: "The shining star of the Empire.",
      summary: "Leader of the skyship fleet, elite sniper and the Empire's favourite negotiator.",
      body: `Victoria is [[lillith]]'s younger sister and the [[emperor]]'s adopted daughter. She was born shortly before the founding of the Templars.

She commands the skyship fleet and is an ace marksman and elite sniper. Sociable, playful and widely admired, she is the Empire's public symbol, its "shining star", and is often the first one sent to negotiate.

She is the protagonist of [[elven-eagle]].`,
      facts: { Appearance: "Long silver-grey hair, red-gold eyes", Uniform: "Black officer uniform and cap with red accents", Role: "Leader of the skyship fleet" },
    },
    {
      id: "aurelian", parent: "elven-empire", type: "character", name: "Aurelian",
      image: "img/aurelian.jpg",
      tagline: "The inventor no one has seen.",
      summary: "Chief magi-tech designer of the Empire. A recluse who has stayed in his workshop for at least 300 years.",
      body: `Aurelian is a male elf, the Empire's chief magi-tech designer, an inventor and a reclusive genius. He has stayed in his workshop for at least **300 years**, and very few people know his face, gender or age.

Not to be confused with [[marcus-aurelianus]] of the Imperium.`,
      facts: { Role: "Chief magi-tech designer", Seclusion: "300+ years" },
    },

    // =====================================================================
    // IMPERIUM AUSTRIACUM
    // =====================================================================
    {
      id: "imperium-austriacum", parent: "central-continent", type: "faction", name: "Imperium Austriacum",
      theme: "imperium", emblem: "img/emblems/imperium-austriacum.png",
      image: "img/imperium-austriacum.jpg",
      tagline: "Rome continues.",
      summary: "A Neo-Roman continuation, led by a humble philosopher-warlord.",
      body: `The Imperium Austriacum is a Neo-Roman continuation led by [[marcus-aurelianus]].

It was historically a natural rival of the [[elven-empire|Elven Empire]] over territory and resources. That rivalry helped push the elves toward unification; racism is not where it began. Today the Imperium deals with internal feuds rather than any major international war.`,
      facts: { Leader: "[[marcus-aurelianus]]", Placement: "South of the [[wiu]] and [[elven-empire]]", Present: "Internal feuds" },
      related: ["elven-empire"],
    },
    {
      id: "marcus-aurelianus", parent: "imperium-austriacum", type: "character", name: "Marcus Aurelianus",
      image: "img/marcus-aurelianus.jpg",
      tagline: "Philosopher. Warlord. Humble.",
      summary: "Leader of the Imperium Austriacum.",
      body: `Marcus Aurelianus leads the Imperium: a humble philosopher-warlord in Neo-Roman armor with gold ornament and a burgundy-and-white cloak.

Not to be confused with [[aurelian]], the elven inventor.`,
      facts: { Role: "Leader of the Imperium", Look: "Neo-Roman armor, gold ornament, burgundy-and-white cloak" },
    },

    // =====================================================================
    // NORTHERN TRIBES
    // =====================================================================
    {
      id: "northern-tribes", parent: "northern-continent", type: "faction", name: "The Northern Tribes",
      theme: "northern", emblem: "img/emblems/northern-tribes.png",
      image: "img/northern-tribes.jpg",
      tagline: "Surviving winter together.",
      summary: "Human and demihuman communities united under King Eric Berg. Norse traditions, duty-based honor and colossal landships.",
      body: `The Northern Tribes bring human and demihuman communities together under one king. Their culture draws on Norse traditions, household customs and folklore, and a typical village holds around **150–250 people**.

Honor here is positive and duty-based: responsibility, solidarity and surviving winter together. This is not a raider society.

Their hierarchy:

1. [[eric-berg]]
2. Jarl
3. Tribe Chief
4. The people

**Military:** northern forces include both humans and wolf demihumans. Their doctrine emphasizes artillery, armor, endurance, logistics and fortifications, along with wolfkin scouting and heightened senses.`,
      facts: { Ruler: "[[eric-berg]]", Peoples: "Humans & demihumans", "Village size": "~150–250" },
    },
    {
      id: "eric-berg", parent: "northern-tribes", type: "character", name: "King Eric Berg",
      image: "img/eric-berg.jpg",
      tagline: "King of the North.",
      summary: "Ruler of the Northern Tribes.",
      body: `Eric Berg is the king of the [[northern-tribes|Northern Tribes]], above the Jarls and Tribe Chiefs.

The main-setting design shows him as a roughly 1.9 m, white-haired wolf demihuman with wolf ears and tail. His human version belongs to the [[tfu-fantasy]] AU.`,
      facts: { Role: "King of the Northern Tribes", Height: "~1.9 m" },
    },
    {
      id: "landships", parent: "northern-tribes", type: "topic", name: "Landships",
      image: "img/landships.jpg",
      tagline: "Fortress-cities on the move.",
      summary: "Colossal mobile fortress-cities. A Great-Cruiser can carry about 70,000 people.",
      body: `Northern engineering combines conventional and magical technology, and the landships are its most visible result: colossal mobile fortress-cities.

A **Great-Cruiser** can carry about **70,000 people**. That is its population capacity, not its combat crew.`,
      facts: { "Great-Cruiser capacity": "~70,000 people" },
    },
    {
      id: "alpine-tribe", parent: "northern-tribes", type: "subfaction", name: "The Alpine Tribe",
      tagline: "Family, endurance, loyalty, warmth.",
      summary: "A wolf-demihuman mountain culture built around communal hot springs and hospitality.",
      body: `The Alpine Tribe is a wolf-demihuman culture in the cold mountains. For them the wolf stands for family, endurance, loyalty and communal warmth, and their central values are survival, discipline, hospitality and community.

Communal hot springs and bathhouses are part of everyday life. They are built from heavy stone and timber and lit by lanterns. Baths are used for recovery, gossip, marriage talks, business and politics, and offering a guest a bath is part of hospitality.

**Bathhouse customs**

- Social rank is set aside while bathing.
- Wash before entering, tie up long hair and keep the water clean.
- Keep voices quiet; no weapons in the baths.
- Don't stare at or disturb others, and follow the attendants.
- Bathing is family-oriented and non-sexual; affection and ear or tail grooming belong in private.`,
      facts: { People: "Wolf demihumans", Values: "Survival, discipline, hospitality, community" },
    },
    {
      id: "astrid-vael", parent: "alpine-tribe", type: "character", name: "Astrid Vael",
      tagline: "Keeper of the springs.",
      summary: "A gentle wolf-demihuman bathhouse keeper of the Alpine Tribe.",
      body: `Astrid works at and keeps one of the [[alpine-tribe|Alpine Tribe]]'s bathhouses. She is gentle, friendly, observant and patient, with a quiet confidence.

She has long sandy-blonde hair, ice-blue eyes, large wolf ears and one large blonde tail with a cream tip.`,
      facts: { Species: "Wolf demihuman", Age: "26", Height: "168 cm", Role: "Bathhouse keeper" },
    },

    // =====================================================================
    // SOUTHERN FEDERATION
    // =====================================================================
    {
      id: "southern-federation", parent: "southern-continent", type: "faction", name: "The Southern Federation",
      theme: "southern", emblem: "img/emblems/southern-federation.png",
      image: "img/southern-federation.jpg",
      tagline: "The great southern bloc.",
      summary: "A major political bloc with a large demihuman population, currently troubled by internal feuds.",
      body: `The Southern Federation is the major political bloc of the south, with a large demihuman population. It is currently dealing with internal feuds.

Its states, capitals and national offices have not been fully mapped out yet.`,
      facts: { Demihumans: "Large population", Present: "Internal feuds" },
    },
    {
      id: "ironspring", parent: "southern-federation", type: "city", name: "Ironspring",
      tagline: "City of the Engineering Academy.",
      summary: "A Southern Federation city, home of Ironspring's Engineering Academy.",
      body: `Ironspring is home to the **Engineering Academy**. Students commute to it from the surrounding villages.

**Village life around Ironspring**

- Seasons run opposite to the Northern Hemisphere.
- A spring fertility festival is a common time for couples to make their relationship official.
- An autumn festival celebrates the harvest.
- Very hot summers bring a long school break.
- Children stay close to home and help with farm chores, manual work and family-owned shops.`,
      facts: { "Known for": "Engineering Academy", State: "Thermal Basin State (working name)" },
    },
    {
      id: "nessa-brindle", parent: "ironspring", type: "character", name: "Nessa Brindle",
      image: "img/nessa-brindle.jpg",
      status: "Working name",
      tagline: "If it's broken, she's already fixing it.",
      summary: "A petite Corgi-demihuman engineering student specializing in military engineering and drones.",
      body: `Nessa is a petite Corgi-demihuman woman from a village near [[ironspring]]. She has loved tinkering and repairing things since childhood, and she grew up in a lively household with several brothers and sisters.

She commuted to Ironspring for school, and as a young adult she now attends **Ironspring's Engineering Academy**, specializing in military engineering and drone technology.`,
      facts: { Species: "Corgi demihuman", Studies: "Military engineering & drones" },
    },

    // =====================================================================
    // EASTERN UNION
    // =====================================================================
    {
      id: "eastern-union", parent: "eastern-continent", type: "faction", name: "The Eastern Union",
      theme: "eastern", emblem: "img/emblems/eastern-union.png",
      image: "img/eastern-union.jpg",
      tagline: "Free cities, united by choice.",
      summary: "A loose union of advanced city-states in the far east.",
      body: `The Eastern Union is a loose union of advanced city-states in the far east. It trades with the South and sometimes with the North.

Like the [[southern-federation|Southern Federation]] and [[imperium-austriacum]], it is dealing with internal feuds rather than any major international war.`,
      facts: { Government: "Union of city-states", Trade: "South, sometimes North", Present: "Internal feuds" },
    },
    {
      id: "oranjii-town", parent: "eastern-union", type: "city", name: "Oranjii's Coastal Town",
      image: "img/oranjii-town.jpg",
      status: "Unnamed",
      tagline: "Where a goddess runs the pub.",
      summary: "The coastal Japanese-style town of Daily Goddess, with a shrine on a forested hill and two bays.",
      body: `A coastal Japanese-style town, and the setting of [[daily-goddess]].

- [[oranjii]]'s shrine stands on a forested hill.
- A second sea, the northern bay, lies north of the shrine.
- A river with bridges connects **North Bay** and **Azure Bay**.
- **Kitsune Brews**, Oranjii's pub, sits on the walkway beside the second sea.

[[akane]] and the nearby shrine goddess [[shizuka]] round out the local divine community.`,
      facts: { Bays: "North Bay, Azure Bay", Pub: "Kitsune Brews" },
      related: ["oranjii"],
    },
    {
      id: "anomaly-city", parent: "eastern-union", type: "city", name: "The Island City",
      status: "Unnamed",
      tagline: "Neon over the water.",
      summary: "A futuristic Japanese-inspired island city in the Eastern Union, where the Anomaly Division has its headquarters.",
      body: `A futuristic Japanese-inspired island city in the [[eastern-union|Eastern Union]], and the setting of [[anomaly]].

The extranational [[anomaly-division]] keeps its headquarters here.`,
      facts: { Headquarters: "[[anomaly-division]]", Story: "[[anomaly]]" },
      related: ["anomaly-division"],
    },

    // =====================================================================
    // ORGANIZATIONS
    // =====================================================================
    {
      id: "pantheon", parent: "tfu", type: "organization", name: "Project Pantheon",
      theme: "pantheon", emblem: "img/emblems/pantheon.png",
      image: "img/pantheon.jpg",
      tagline: "They were never here.",
      summary: "An extranational secret organization, backed mostly by human-majority countries. Not a superhero team.",
      body: `Pantheon is an **extranational secret organization**. It stands outside any single nation and is backed mostly by human-majority countries. It is not one nation's program, and it is not a publicly celebrated superhero organization.

Its operatives work behind the scenes. In [[anomaly]], they appear only as codenames, shadows, silhouettes and aftermath, and their faces are never shown.`,
      facts: { Nature: "Extranational, secret", Operatives: "5 known" },
      related: ["anomaly-division"],
    },
    {
      id: "thor", parent: "pantheon", type: "character", name: "Thor",
      image: "img/thor.jpg",
      tagline: "The door is wherever he says it is.",
      summary: "Breacher. Mech suit and extreme strength.",
      facts: { Role: "Breacher", Kit: "Mech suit" },
    },
    {
      id: "mercury", parent: "pantheon", type: "character", name: "Mercury",
      image: "img/mercury.jpg",
      tagline: "One shot.",
      summary: "Master marksman who shoots without measuring optics. His anti-materiel rifle can pierce landship and skyship hulls.",
      facts: { Role: "Marksman", Weapon: "Anti-materiel rifle" },
    },
    {
      id: "anubis", parent: "pantheon", type: "character", name: "Anubis",
      image: "img/anubis.jpg",
      tagline: "The room was already clear.",
      summary: "Invisibility, near-total-darkness vision, heightened senses and reflexes, and a vibration knife.",
      facts: { Role: "Infiltrator", Weapon: "Vibration knife" },
    },
    {
      id: "artemis", parent: "pantheon", type: "character", name: "Artemis",
      image: "img/artemis.jpg",
      tagline: "The hunt is already over.",
      summary: "Ranger with cybernetic and genetic enhancements. Close-to-medium range, with a smart carbine.",
      facts: { Role: "Ranger", Weapon: "Smart carbine", Specialty: "Tracking, mobility, enhanced senses" },
    },
    {
      id: "susanoo", parent: "pantheon", type: "character", name: "Susanoo",
      image: "img/susanoo.jpg",
      tagline: "Faster than the eye.",
      summary: "Cybernetic swordmaster: high-speed close combat and precision strikes.",
      facts: { Role: "Swordmaster", Look: "Dark tactical armor, visor, blue-violet accents" },
    },

    {
      id: "anomaly-division", parent: "tfu", type: "organization", name: "The Anomaly Division",
      theme: "anomaly", emblem: "img/emblems/anomaly-division.png",
      image: "img/anomaly-division.jpg",
      tagline: "Classifying the impossible.",
      summary: "An extranational secret organization that investigates and classifies anomalies: things that break in from outside the universe.",
      body: `Like [[pantheon]], the Anomaly Division is an **extranational secret organization**: it answers to no single nation. It investigates and classifies [[anomalies]], and its central field-and-support pair is [[ares]] and [[stella]].

Its headquarters is in [[anomaly-city]], a futuristic Japanese-inspired island city in the [[eastern-union|Eastern Union]].`,
      facts: { Nature: "Extranational, secret", Purpose: "Investigate & classify anomalies", Headquarters: "[[anomaly-city]]", "Key agents": "[[ares]], [[stella]]" },
      related: ["anomalies"],
    },
    {
      id: "ares", parent: "anomaly-division", type: "character", name: "Ares",
      image: "img/ares.jpg",
      tagline: "A family he can't go home to.",
      summary: "Fox-demihuman veteran agent of the Anomaly Division, with two magi-tech pistols.",
      body: `Ares is an experienced, long-serving agent of the Anomaly Division. He has a family he cannot see because his work is secret.

He is paired with [[stella]] in [[anomaly]].`,
      facts: { Species: "Fox demihuman", Hair: "Blue-brown", Weapons: "Two magi-tech pistols" },
    },
    {
      id: "stella", parent: "anomaly-division", type: "character", name: "Stella",
      image: "img/stella.jpg",
      tagline: "Eyes in the system.",
      summary: "Wolf-demihuman technical and support specialist, partnered with Ares.",
      body: `Stella is the Anomaly Division's technical and support specialist and works alongside [[ares]]. She is based at the Division's headquarters in [[anomaly-city]].

Her runescribe version belongs to the [[tfu-fantasy]] AU.`,
      facts: { Species: "Wolf demihuman", Role: "Tech & support specialist" },
    },

    // =====================================================================
    // COSMOLOGY
    // =====================================================================
    {
      id: "cosmology", parent: "tfu", type: "cosmos", name: "Cosmology & Divinity",
      theme: "cosmos",
      image: "img/cosmology.jpg",
      tagline: "Who writes the rules — and who can rewrite them.",
      summary: "The Creator, angels, local gods, Hell, and the anomalies from beyond.",
      body: `TFU's Creator is, quite literally, its writer or writers.

Below the Creator, power follows clear rules. [[angels]] hold true authority over reality itself. [[local-gods]] grow from local faith and can never challenge the higher angels. The demons of [[hell]] use powerful specialized magic but cannot rewrite reality. [[anomalies]] come from outside the universe entirely.

These kinds of power are kept strictly apart: native gods and demons are not anomalies, and faith-powered divinity is not angelic authority.`,
    },
    {
      id: "angels", parent: "cosmology", type: "cosmos", name: "Angels",
      image: "img/angels.jpg",
      tagline: "Authority over reality itself.",
      summary: "Beings with innate authority over reality. Not stronger magic, but something else entirely.",
      body: `Angels have innate authority over reality itself. Their power is not just a stronger form of ordinary magic.

Archangels, among them [[michael]] and [[lucifer]] before the Fall, are vastly stronger than a minor angel such as [[lucian-vayn]].`,
    },
    {
      id: "lucian-vayn", parent: "angels", type: "character", name: "Lucian Vayn",
      image: "img/lucian-vayn.jpg",
      tagline: "He rewrites one line at a time.",
      summary: "An angel who once recorded human history. Keeper of the Library Beyond Horizons.",
      body: `Lucian is an **angel, not an archangel**. He and his younger sister [[aurelia-vayn]] were created by God before the first human. He can hide his halo.

His former duty was recording human history. His reality alteration is minor: he can rewrite **one line of reality at a time**.

He is calm, thoughtful and compassionate, and deeply affected by Aurelia and [[oranjii]].`,
      facts: { Kind: "Angel", Power: "Rewrites one line of reality at a time", Sister: "[[aurelia-vayn]]", Look: "Silver-white hair with crimson streaks, halo, celestial jewelry" },
      related: ["oranjii"],
    },
    {
      id: "library-beyond-horizons", parent: "lucian-vayn", type: "realm", name: "Library Beyond Horizons",
      image: "img/library-beyond-horizons.jpg",
      tagline: "Vayn's Library.",
      summary: "Lucian's library among sky islands, in a world his mind created.",
      body: `The Library Beyond Horizons lies among sky islands, in a world created by [[lucian-vayn]]'s own mind.`,
    },
    {
      id: "aurelia-vayn", parent: "angels", type: "character", name: "Aurelia Vayn",
      image: "img/aurelia-vayn.jpg",
      tagline: "Halo off.",
      summary: "Lucian's younger sister: an angel travelling Earth with her halo hidden.",
      body: `Aurelia is [[lucian-vayn]]'s younger sister, also created before humanity. She can hide her halo, and her youthful look says nothing about her true age.

Her stories follow her travels on Earth: everyday encounters, all while keeping her celestial nature hidden. See [[halo-off]].`,
      facts: { Kind: "Angel", Brother: "[[lucian-vayn]]", Outfits: "Oversized black sweater, black beach outfit with gold stars, travel outfit" },
    },
    {
      id: "michael", parent: "angels", type: "character", name: "Archangel Michael",
      image: "img/michael.jpg",
      summary: "An archangel, vastly stronger than a minor angel such as Lucian.",
      facts: { Kind: "Archangel" },
    },

    {
      id: "local-gods", parent: "cosmology", type: "cosmos", name: "Local Gods",
      image: "img/local-gods.jpg",
      tagline: "Made by faith, kept by community.",
      summary: "Gods born from local faith. They grow stronger through worship, but can never challenge the higher angels.",
      body: `Local gods come from local faith and grow stronger through faith and worship. They can never become powerful enough to challenge the higher angels.

Gods can take part in ordinary life and keep local relationships, shrines and communities. [[oranjii]] is the central example.`,
    },
    {
      id: "oranjii", parent: "local-gods", type: "character", name: "Oranjii",
      image: "img/oranjii.jpg",
      tagline: "Shrine goddess. Pub owner. Menace.",
      summary: "A playful, smug fox goddess who loves humanity, but rarely admits it. Protagonist of Daily Goddess.",
      body: `Oranjii is a local fox and shrine goddess and the protagonist of [[daily-goddess]]. She is playful, mischievous and often smug. She loves humanity but rarely admits it to anyone except [[lucian-vayn]].

She enjoys sports and quiet nights, and she runs her own pub. **Kitsune Brews** is her favourite beer.

In a fight she summons a **katana of blue spiritual flame**, which she can summon again if it breaks. Her fighting style includes area and crowd control.`,
      facts: {
        Kind: "Fox goddess",
        Height: "156 cm",
        Look: "Short silver-white hair, orange fox ears, crimson eyes, one orange tail with a white tip",
        Weapon: "Blue-flame katana",
        Home: "[[oranjii-town]]",
        Sister: "[[akane]]",
      },
      related: ["lucian-vayn"],
    },
    {
      id: "akane", parent: "local-gods", type: "character", name: "Akane",
      image: "img/akane.jpg",
      tagline: "The wandering older sister.",
      summary: "Oranjii's older sister: a wandering, teasing fox goddess.",
      body: `Akane is [[oranjii]]'s older sister, a wandering fox goddess. She is taller and more mature than Oranjii, with an indulgent, flirtatious, teasing big-sister presence.

She wears weathered shrine-style layers in white, charcoal and deep red, with torn hems, a patterned haori, ropes, bells, beads and bottle charms.`,
      facts: { Kind: "Fox goddess", Look: "Long orange hair, blue eyes, white fox ears and tail" },
    },
    {
      id: "shizuka", parent: "local-gods", type: "character", name: "Shizuka",
      image: "img/shizuka.jpg",
      summary: "Modest goddess of a shrine near Oranjii's.",
      facts: { Kind: "Shrine goddess" },
    },

    {
      id: "hell", parent: "cosmology", type: "cosmos", name: "Hell",
      theme: "hell",
      image: "img/hell.jpg",
      tagline: "Seven tiers beneath the Fallen.",
      summary: "The infernal hierarchy, from Lucifer down to imps. Demons can't rewrite reality, but their magic is formidable.",
      body: `Hell's hierarchy, from the top down:

1. [[lucifer]], the fallen Archangel
2. Lords of Hell, each tied to one of the seven sins
3. Lower infernal royalty
4. Infernal knights
5. Soul collectors / crossroads demons
6. Normal demons
7. Lesser demons / imps

Demons do **not** have true reality-rewriting authority. Even the Lords of Hell use specialized demonic magic rather than rewriting reality's foundational rules. That magic can still affect outcomes, probability, perception, matter, souls and conditions, and its methods vary by demon type and lineage.

The seven sins tied to the Lords are Pride, Wrath, Greed, Envy, Lust, Gluttony and Sloth.`,
      facts: { Ruler: "[[lucifer]]", Tiers: "7" },
    },
    {
      id: "lucifer", parent: "hell", type: "character", name: "Lucifer",
      image: "img/lucifer.jpg",
      tagline: "The Fallen.",
      summary: "The fallen Archangel at Hell's summit.",
      body: `Lucifer stands at the top of [[hell]]. He is exceptional because he is a fallen archangel, not an ordinary demon who rose through the ranks. No other infernal being inherits his celestial authority.`,
      facts: { Kind: "Fallen Archangel", Rank: "Summit of Hell" },
    },

    {
      id: "anomalies", parent: "cosmology", type: "cosmos", name: "Anomalies",
      theme: "anomaly",
      image: "img/anomalies.jpg",
      tagline: "From outside. Wrong. Killable.",
      summary: "Things from outside TFU, entering through breaches in reality. They don't obey the universe's rules, but they can be defeated.",
      body: `Anomalies come from **outside TFU** and enter through breaches in reality. They do not obey the universe's native rules and can seem alien, illogical or incomprehensible.

Even so, they can be defeated: coming from outside does not make them invincible.

They are different from native species, ordinary magic, local gods, angels, demons and technology. The [[anomaly-division|Anomaly Division]] investigates and classifies them.`,
      related: ["anomaly-division"],
    },

    // =====================================================================
    // LORE TOPICS
    // =====================================================================
    {
      id: "mana", parent: "tfu", type: "topic", name: "Mana & Technology",
      theme: "elven",
      image: "img/mana.jpg",
      tagline: "Every being has mana. Every death returns it.",
      summary: "The mana cycle, mana crystals, magi-tech, solar-system colonies, and why FTL is impossible.",
      body: `**The mana cycle.** Every being has innate mana. When a being dies, its mana returns to the ground, and over hundreds of years it binds into **mana crystals**. Especially large deposits form at ancient battlefields, ritual-killing sites and slaughter sites.

Humans do have mana; what they lack is the natural ability to manipulate it directly.

**Resource economy.**

- Mana crystals are a major export of human nations, which can't use mana the way elves do.
- Elves export resource-rich materials.
- The [[elven-empire|Elven Empire]] runs its magi-tech, skyships and interdimensional infrastructure on mana crystals.
- Northern engineering combines conventional and magical technology, most visibly in the [[landships]].

**Space and dimensions.** Small, self-sufficient colonies exist on planets within the solar system. **Faster-than-light travel is impossible.** Elven interdimensional travel is a separate thing and does not allow FTL space travel.`,
      facts: { "Mana crystals": "Form over centuries from returned mana", FTL: "Impossible" },
    },
    {
      id: "timeline", parent: "tfu", type: "topic", name: "Timeline",
      tagline: "Anchors in deep time.",
      summary: "Key moments, from before the first human to the present day.",
      body: `- **Before the first human:** God creates [[lucian-vayn]] and [[aurelia-vayn]].
- **Before ancient human civilizations:** the [[emperor]] already exists.
- **Early elven history:** the separate elven tribes suffer expansion and war. The future Emperor learns from humans and demihumans and unites the elves.
- **The imperial rivalry:** competition with the [[imperium-austriacum]] over territory and resources speeds up unification.
- **Around the Fall of Rome:** [[lillith]] comes into existence.
- **Shortly before the Templars are founded:** [[victoria]] is born.
- **At least 300 years ago:** [[aurelian]] begins his seclusion in his workshop.
- **The present day:** no major international wars; internal feuds in three blocs; covert operations against anomalies; interdimensional elven activity; small solar-system colonies.`,
    },

    // =====================================================================
    // STORIES
    // =====================================================================
    {
      id: "emperors-blade", parent: "tfu", type: "story", name: "Emperor's Blade",
      theme: "elven",
      image: "img/emperors-blade.jpg",
      summary: "Lillith: battle planning, logistics, dimensional warfare, obsessive strategy and personal attachment.",
      facts: { Lead: "[[lillith]]" },
    },
    {
      id: "elven-eagle", parent: "tfu", type: "story", name: "Elven Eagle",
      theme: "elven",
      image: "img/elven-eagle.jpg",
      summary: "Victoria: drama, mystery, action, imperial diplomacy and skyship leadership.",
      body: `A story of drama, mystery and action that follows [[victoria]] through imperial diplomacy and skyship command. It also features [[lillith]], [[aurelian]] and the [[emperor]].`,
      facts: { Lead: "[[victoria]]" },
    },
    {
      id: "anomaly", parent: "tfu", type: "story", name: "Anomaly",
      theme: "anomaly",
      image: "img/anomaly.jpg",
      summary: "Ares and Stella: mystery, horror and action against threats from outside the universe.",
      body: `A mystery, horror and action manga following [[ares]] and [[stella]] of the [[anomaly-division|Anomaly Division]] as they face [[anomalies]], with help that arrives unseen.

[[pantheon|Pantheon]] operatives stay in the shadows. [[mercury]] might save the pair with a single sniper shot against an overwhelming threat, and [[anubis]] is only hinted at by corridors that are already cleared when they arrive.`,
      facts: { Leads: "[[ares]] & [[stella]]", Genre: "Mystery / horror / action" },
    },
    {
      id: "daily-goddess", parent: "tfu", type: "story", name: "Daily Goddess",
      theme: "eastern",
      image: "img/daily-goddess.jpg",
      summary: "Oranjii: everyday divine life, comedy and slice of life in a small coastal town.",
      body: `A slice-of-life comedy about the everyday life of [[oranjii]], her love of humanity, and her local community in [[oranjii-town]]. [[lucian-vayn]] drops by as an occasional guest.`,
      facts: { Lead: "[[oranjii]]", Genre: "Comedy / slice of life" },
    },
    {
      id: "halo-off", parent: "tfu", type: "story", name: "Halo Off",
      theme: "cosmos",
      summary: "Aurelia travels Earth with her halo hidden.",
      body: `[[aurelia-vayn]] travels Earth with her halo hidden and meets ordinary people along the way. The first one-shot follows her journey; the next chapter takes her to the beach.`,
      facts: { Lead: "[[aurelia-vayn]]", Format: "Full-color one-shots" },
    },
    {
      id: "wandering-knight-story", parent: "tfu", type: "story", name: "Wandering Knight Lucian Vayn",
      theme: "fantasy",
      image: "img/wandering-knight-story.jpg",
      summary: "A black-and-white fantasy manga, set in the TFU Fantasy AU.",
      body: `A separate manga continuity set in [[tfu-fantasy]], following [[wandering-knight]].`,
      facts: { Lead: "[[wandering-knight]]", Continuity: "[[tfu-fantasy]]" },
    },

    // =====================================================================
    // TFU FANTASY AU
    // =====================================================================
    {
      id: "tfu-fantasy", parent: "tfu", type: "continuity", name: "TFU Fantasy",
      theme: "fantasy",
      image: "img/tfu-fantasy.jpg",
      tagline: "The same souls, in another age.",
      summary: "A separate medieval-fantasy reimagining of TFU's factions and characters.",
      body: `TFU Fantasy reimagines the factions and characters in a medieval fantasy world. Guns, computers, modern vehicles and cybernetics give way to runecraft, relics, artificing, enchanted weapons and arcane vessels.

It is **a separate continuity**: nothing here automatically applies to the main universe.

**Reimagined characters**

- **[[lillith]]:** a medieval imperial commander in blackened plate and a crimson coat, still carrying Oathblade.
- **[[victoria]]:** a fantasy sky-fleet officer with the long enchanted bow **Starpiercer**.
- **[[aurelian]]:** an elven artificer with a rune gauntlet.
- **[[stella]]:** a Riftwarden runescribe, occult researcher and arcane analyst.
- **[[eric-berg]]:** a human warrior-king and practical traveling monarch, in steel plate and dark-blue wool and fur, with a battle circlet, wolf and mountain heraldry, and a rune-engraved longsword.`,
    },
    {
      id: "wandering-knight", parent: "tfu-fantasy", type: "character", name: "Lucian, the Wandering Knight",
      image: "img/wandering-knight.jpg",
      tagline: "No king. No banner. No contract.",
      summary: "A roaming swordsman who protects people by his own choice, then moves on.",
      body: `A roaming swordsman, somewhere between a ronin and a last-stand knight. He serves **no king, church, knightly order or mercenary company**, and has no liege, banner or contract. He travels between kingdoms, protects people because he chooses to, and moves on.

His story is lonely and somber: long journeys, interventions he chooses himself, and desperate last stands.

**Dynamic sight.** His eye colors change with what he perceives:

- **Both red:** travel and vigilance; danger, hostile intent, demonic residue.
- **One red, one blue:** engaging with people, or investigating the paranormal.
- **Blue-dominant:** mana, illusions, curses, magical traces, dimensional distortions.
- **Mixed red and blue:** the moment of decision, committing to action.

His journey passes through Greyhaven and **The Village Without Bells**, and a broken gateway connects it to [[lillith]]'s larger imperial and dimensional conflict.`,
      facts: { Weapon: "Two-handed greatsword", Look: "Silver-white hair with red streaks; black layered outfit, silver armor, black cape with gold celestial motifs", Story: "[[wandering-knight-story]]" },
      related: ["lucian-vayn"],
    },
    {
      id: "fantasy-pantheon", parent: "tfu-fantasy", type: "organization", name: "Pantheon (Fantasy)",
      image: "img/fantasy-pantheon.jpg",
      tagline: "Forbidden relics, borrowed divinity.",
      summary: "An elite secret human order enhanced by forbidden relics, alchemy, ancient runes and fragments of divine power.",
      body: `An elite, secret human order enhanced by forbidden relics, alchemy, ancient runes and fragments of divine power. They wear blackened steel, dark travelling cloaks, subtle gold runes, minimal heraldry and masks or symbolic helmets, with practical, battle-scarred gear.

- **[[thor]]:** armored breacher with a rune warhammer.
- **[[mercury]]:** extreme-range ranger with an enchanted bow.
- **[[anubis]]:** hooded, masked shadow with paired short blades and climbing gear.
- **[[artemis]]:** arcane hunter with a hybrid spear-bow and anti-magic relics.`,
      related: ["pantheon"],
    },
    {
      id: "fantasy-creatures", parent: "tfu-fantasy", type: "topic", name: "Creatures of the Fantasy Age",
      image: "img/fantasy-creatures.jpg",
      summary: "The monsters of the Wandering Knight's world.",
      body: `Creature concepts from the fantasy age:

- Lantern Wight
- Church Grim / Black Grim
- Waldschrat
- Rift Kelpie
- Gravehorn Draugr
- Ash-Troll
- Myrkulf
- Hollow Valkyrie
- Kitsunebi Revenant
- Pale Mara
- Rusalka of the Drowned Gate
- Ashen Huldra`,
    },
  ],
};
