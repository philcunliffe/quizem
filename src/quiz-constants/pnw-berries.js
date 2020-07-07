const berries = [
  {
    name: "Bearberry",
    otherNames: ["Kinnikinnick"],
    images: [
      "bearberry1.jpg",
      "bearberry2.jpg",
      "bearberry3.jpg",
      "bearberry4.jpg",
      "bearberry5.jpg",
      "bearberry6.jpg",
    ],
    wikiLink: {
      text: "Arctostaphylos spp.",
      href: "http://en.wikipedia.org/wiki/arctostaphylos"
    },
    bullets: [
      { text: 'Berries have thick skin and a mealy taste.' , isWarning: false },
      { text: 'Berries can be dried for storage.' , isWarning: false },
      { text: 'Dried berries can be ground and cooked into a porridge.' , isWarning: false },
      { text: 'Dried berries can be popped when fried in grease over low flame.' , isWarning: false },
      { text: 'Grows in dry open woods and gravelly or sandy soils in arctic and alpine regions.' , isWarning: false },
      { text: 'Warning: may cause nausea or constipation if eaten in quantity.' , isWarning: true },
      { text: 'Warning: prolonged use may case stomach and liver problems and should be avoided by children and pregnant or breast-feeding women.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Black Currant",
    otherNames: [],
    images: [
      "blackcurrant1.jpg",
      "blackcurrant2.jpg",
      "blackcurrant3.jpg",
      "blackcurrant4.jpg",
      "blackcurrant5.jpg",
      "blackcurrant6.jpg",
    ],
    wikiLink: {
      text: "Ribes spp.",
      href: "http://en.wikipedia.org/wiki/ribes"
    },
    bullets: [
      { text: 'Berries contain seeds dense in nutrients.' , isWarning: false },
      { text: 'Raw berries tend to be tart.' , isWarning: false },
      { text: 'Berries contain high levels of pectin, which benefits making jams.' , isWarning: false },
      { text: 'Plant is a small shrub growing 1-2 m tall.' , isWarning: false },
      { text: 'Leaves and stem have strong fragrance.' , isWarning: false },
      { text: 'Grows in moist foothill and montane woods.' , isWarning: false },
      { text: 'Warning: Northern black currants may cause diarrhea and stomach upset if eaten in quantity.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Black Huckleberry",
    otherNames: [],
    images: [
      "blackhuckleberry1.jpg",
      "blackhuckleberry2.jpg",
      "blackhuckleberry3.jpg",
      "blackhuckleberry4.jpg",
      "blackhuckleberry5.jpg",
      "blackhuckleberry6.jpg",
      "blackhuckleberry7.jpg",
      "blackhuckleberry8.jpg",
      "blackhuckleberry9.jpg",
    ],
    wikiLink: {
      text: "Vaccinium spp.",
      href: "http://en.wikipedia.org/wiki/vaccinium"
    },
    bullets: [
      { text: 'Berry is sweeter than the Red huckleberry.' , isWarning: false },
      { text: 'Berry is high in vitamin C.' , isWarning: false },
      { text: 'Plant is a deciduous or evergreen shrub.' , isWarning: false },
      { text: 'Grows in forests in montane and subalpine areas.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Blackberry",
    otherNames: [],
    images: [
      "blackberry1.jpg",
      "blackberry2.jpg",
      "blackberry3.jpg",
      "blackberry4.jpg",
      "blackberry5.jpg",
    ],
    wikiLink: {
      text: "Rubus spp.",
      href: "http://en.wikipedia.org/wiki/blackberry"
    },
    bullets: [
      { text: 'Mature berry is very sweet.' , isWarning: false },
      { text: 'Berry can be dried for storage.' , isWarning: false },
      { text: 'Bush has formidable thorns.' , isWarning: false },
      { text: 'Tip: the blackberry is an example of a compound berry, since it consists of a tight cluster of smaller parts, resembling a raspberry. Compound berries are generally edible.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Blueberry",
    otherNames: ["Bilberry"],
    images: [
      "blueberry1.jpg",
      "blueberry2.jpg",
      "blueberry3.jpg",
      "blueberry4.jpg",
      "blueberry5.jpg",
      "blueberry6.jpg",
      "blueberry7.jpg",
      "blueberry8.jpg",
      "blueberry9.jpg",
      "blueberry10.jpg",
    ],
    wikiLink: {
      text: "Vaccinium spp.",
      href: "http://en.wikipedia.org/wiki/vaccinium"
    },
    bullets: [
      { text: 'Mature berry is very sweet.' , isWarning: false },
      { text: 'Berry can be dried for storage.' , isWarning: false },
      { text: 'Berries can be boiled in water and spread to dry as a cake.' , isWarning: false },
      { text: 'Grows in both wooded and open moist areas.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Bunchberry",
    otherNames: [],
    images: [
      "bunchberry1.jpg",
      "bunchberry2.jpg",
      "bunchberry3.jpg",
      "bunchberry4.jpg",
      "bunchberry5.jpg",
    ],
    wikiLink: {
      text: "Cornus canadensis",
      href: "http://en.wikipedia.org/wiki/cornus_canadensis"
    },
    bullets: [
      { text: 'Berries have mild taste.' , isWarning: false },
      { text: 'Berries have hard/crunchy central seed, which is edible.' , isWarning: false },
      { text: 'Plant can be found in foothills and montane regions.' , isWarning: false },
      { text: 'Warning: unripe berries can cause stomach cramps.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Chokecherry",
    otherNames: [],
    images: [
      "chokecherry1.jpg",
      "chokecherry2.jpg",
      "chokecherry3.jpg",
      "chokecherry4.jpg",
      "chokecherry5.jpg",
    ],
    wikiLink: {
      text: "Prunus virginiana",
      href: "http://en.wikipedia.org/wiki/prunus_virginiana"
    },
    bullets: [
      { text: 'Raw berry has bitter/sour taste.' , isWarning: false },
      { text: 'Berry can be cooked to improve taste.' , isWarning: false },
      { text: 'Berry can be crushed or dried whole for storage, with or without pit.' , isWarning: false },
      { text: 'Grows in open areas in plains, foothills, and montane regions.' , isWarning: false },
      { text: 'Warning: do not eat raw or undried seeds; they contain amygdalin which breaks down into cyanide.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Cloudberry",
    otherNames: [],
    images: [
      "cloudberry1.jpg",
      "cloudberry2.jpg",
      "cloudberry3.jpg",
      "cloudberry4.jpg",
      "cloudberry5.jpg",
      "cloudberry6.jpg",
    ],
    wikiLink: {
      text: "Rubus chamaemorus",
      href: "http://en.wikipedia.org/wiki/rubus_chamaemorus"
    },
    bullets: [
      { text: 'Berries are somewhat sour/bitter.' , isWarning: false },
      { text: 'Unripe berries are hard and reddish.' , isWarning: false },
      { text: 'Ripe berries are salmon-colored.' , isWarning: false },
      { text: 'Berry has high vitamin C content.' , isWarning: false },
      { text: 'Berry has high benzoic acid content, which acts as a natural preservative.' , isWarning: false },
      { text: 'Stems are unbranched, slender and wiry.' , isWarning: false },
      { text: 'Leaves are broader than long, and have five lobes.' , isWarning: false },
      { text: 'Plant grows in peat bogs and peaty forests.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Cranberry",
    otherNames: [],
    images: [
      "cranberry1.jpg",
      "cranberry2.jpg",
      "cranberry3.jpg",
    ],
    wikiLink: {
      text: "Vaccinium spp.",
      href: "http://en.wikipedia.org/wiki/vaccinium_oxycoccus"
    },
    bullets: [
      { text: 'Raw berry has a tart, sour flavour.' , isWarning: false },
      { text: 'Berry can be dried for storage and reconstituted in boiling water.' , isWarning: false },
      { text: 'Berry can be boiled and mixed with grease/oil for storage.' , isWarning: false },
      { text: 'Berry has improved flavour when cooked or after freezing.' , isWarning: false },
      { text: 'Berries remain on the shrub all year' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Crowberry",
    otherNames: [],
    images: [
      "crowberry1.jpg",
      "crowberry2.jpg",
      "crowberry3.jpg",
    ],
    wikiLink: {
      text: "Empetrum nigrum",
      href: "http://en.wikipedia.org/wiki/empetrum_nigrum"
    },
    bullets: [
      { text: 'Berries have a bland, modest taste.' , isWarning: false },
      { text: 'Taste of the berry improves with cooking or freezing.' , isWarning: false },
      { text: 'Berries have a glossy black color and are about 1/3 inch in diameter.' , isWarning: false },
      { text: 'Berries often stay on the shrub over winter.' , isWarning: false },
      { text: 'Grows in shady dry areas, tundra, muskeg and forests.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Elderberry",
    otherNames: [],
    images: [
      "elderberry1.jpg",
      "elderberry2.jpg",
      "elderberry3.jpg",
      "elderberry4.jpg",
      "elderberry5.jpg",
      "elderberry6.jpg",
      "elderberry7.jpg",
      "elderberry8.jpg",
      "elderberry9.jpg",
    ],
    wikiLink: {
      text: "Prunus virginiana",
      href: "http://en.wikipedia.org/wiki/prunus_virginiana"
    },
    bullets: [
      { text: 'Berries are tiny and powder-blue, growing in clusters.' , isWarning: false },
      { text: 'Berries are edible if cooked or dried.' , isWarning: false },
      { text: 'Plant is a large, tree-like shrub.' , isWarning: false },
      { text: 'Warning: berries may cause nausea if eaten in quantity. Red varieties of the berry are poisonous.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Fairy Bell",
    otherNames: [],
    images: [
      "fairybell1.jpg",
      "fairybell2.jpg",
      "fairybell3.jpg",
      "fairybell4.jpg",
    ],
    wikiLink: {
      text: "Prosartes spp.",
      href: "http://en.wikipedia.org/wiki/prosartes"
    },
    bullets: [
      { text: 'Berries are bright red and large (~0.5 inches in diameter).' , isWarning: false },
      { text: 'Berries occur at tips of branches in clusters.' , isWarning: false },
      { text: 'Taste is blandish/sweet.' , isWarning: false },
      { text: 'Plant grows in moist forested areas.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "False Solomon's-seal",
    otherNames: [],
    images: [
      "falsesolomansseal1.jpg",
      "falsesolomansseal2.jpg",
      "falsesolomansseal3.jpg",
      "falsesolomansseal4.jpg",
      "falsesolomansseal5.jpg",
      "falsesolomansseal6.jpg",
      "falsesolomansseal7.jpg",
      "falsesolomansseal8.jpg",
    ],
    wikiLink: {
      text: "Maianthemum spp.",
      href: "http://en.wikipedia.org/wiki/maianthemum"
    },
    bullets: [
      { text: 'Berry is edible.' , isWarning: false },
      { text: 'Berry transitions from green to mottled/dark red.' , isWarning: false },
      { text: 'Berry was traditionally stored in cooled grease.' , isWarning: false },
      { text: 'Berry is high in vitamin C.' , isWarning: false },
      { text: 'Young shoots and green parts of young plants are edible, and best when cooked.' , isWarning: false },
      { text: 'Rhizome is edible when cooked.' , isWarning: false },
      { text: 'Grows in thickets, forests, and moist open areas.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Golden Currant",
    otherNames: [],
    images: [
      "goldencurrant1.jpg",
      "goldencurrant2.jpg",
      "goldencurrant3.jpg",
      "goldencurrant4.jpg",
      "goldencurrant5.jpg",
      "goldencurrant6.jpg",
      "goldencurrant7.jpg",
      "goldencurrant8.jpg",
    ],
    wikiLink: {
      text: "Ribes aureum",
      href: "http://en.wikipedia.org/wiki/ribes_aureum"
    },
    bullets: [
      { text: 'Berries are very flavourful.' , isWarning: false },
      { text: 'Ripe berries range from dark red to golden yellow.' , isWarning: false },
      { text: 'Berries contain high levels of pectin, which benefits making jams.' , isWarning: false },
      { text: 'Plant is a shrub growing 1-3 m tall.' , isWarning: false },
      { text: 'Grows in prairies, grasslands and on slopes.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Gooseberry",
    otherNames: [],
    images: [
      "gooseberry1.jpg",
      "gooseberry2.jpg",
      "gooseberry3.jpg",
      "gooseberry4.jpg",
      "gooseberry5.jpg",
      "gooseberry6.jpg",
      "gooseberry7.jpg",
    ],
    wikiLink: {
      text: "Ribes spp.",
      href: "http://en.wikipedia.org/wiki/ribes"
    },
    bullets: [
      { text: 'Berries have modest taste, tart if picked too early.' , isWarning: false },
      { text: 'Berries can be collected and left to ripen.' , isWarning: false },
      { text: 'Berries can be dried for storage.' , isWarning: false },
      { text: 'Berries can be cooked and then spread to dry into cakes.' , isWarning: false },
      { text: 'Berries contains high levels of pectin, which benefits making jams.' , isWarning: false },
      { text: 'Warning: eating gooseberries in quantity may cause stomach upset.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Hairy Manzanita",
    otherNames: [],
    images: [
      "hairymanzanita1.jpg",
      "hairymanzanita2.jpg",
      "hairymanzanita3.jpg",
      "hairymanzanita4.jpg",
      "hairymanzanita5.jpg",
    ],
    wikiLink: {
      text: "Arctostaphylos columbiana",
      href: "http://en.wikipedia.org/wiki/arctostaphylos_columbiana"
    },
    bullets: [
      { text: 'Berries have thick skin and are mealy.' , isWarning: false },
      { text: 'Berries can be dried for storage.' , isWarning: false },
      { text: 'Berry is suitable for occassional use.' , isWarning: false },
      { text: 'Plant is a tall shrub, 1-3 meters tall.' , isWarning: false },
      { text: 'Grows in open coniferous forests and other open areas.' , isWarning: false },
      { text: 'Warning: may cause constipation if eaten in quantity, prolonged used may case stomach and liver problems.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Hawthorn",
    otherNames: [],
    images: [
      "hawthorn1.jpg",
      "hawthorn2.jpg",
      "hawthorn3.jpg",
      "hawthorn4.jpg",
      "hawthorn5.jpg",
      "hawthorn6.jpg",
    ],
    wikiLink: {
      text: "Crataegus spp.",
      href: "http://en.wikipedia.org/wiki/crataegus"
    },
    bullets: [
      { text: 'Berries are called "haws".' , isWarning: false },
      { text: 'Haws are tastless, with a texture that is mealy/seedy.' , isWarning: false },
      { text: 'Haws can be dried for storage.' , isWarning: false },
      { text: 'Haws can be mashed into a pulp, cooked and then spread to dry into cakes once the seeds have been strained out.' , isWarning: false },
      { text: 'Haws contains high levels of pectin, which benefits making jams.' , isWarning: false },
      { text: 'Plant is a shrub or small tree, 6-11 meters tall with long sturdy thorns.' , isWarning: false },
      { text: 'Grows in open woodland, forest edges and road-sides in lowland and montane regions.' , isWarning: false },
      { text: 'Warning: thorn scratches to the eyes usually results in blindness. Blood pressure and heartrate may be affected by consuming berries.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Indian Strawberry",
    otherNames: [],
    images: [
      "indianstrawberry1.jpg",
      "indianstrawberry2.jpg",
      "indianstrawberry3.jpg",
      "indianstrawberry4.jpg",
      "indianstrawberry5.jpg", // Leaf / flower
      "indianstrawberry6.jpg",
    ],
    wikiLink: {
      text: "Duchesnea indica",
      href: "http://en.wikipedia.org/wiki/duchesnea_indica"
    },
    bullets: [
      { text: 'Berry is bland with no taste.' , isWarning: false },
      { text: 'Plant is a trailing herb.' , isWarning: false },
      { text: 'Grows in open woodland, forest edges and road-sides in lowland and montane regions.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Mulberry",
    otherNames: [],
    images: [
      "mulberry1.jpg",
      "mulberry2.jpg",
      "mulberry3.jpg",
      "mulberry4.jpg", // Leaf / flower
      "mulberry5.jpg", // Leaf / flower
      "mulberry6.jpg",
    ],
    wikiLink: {
      text: "Morus spp.",
      href: "http://en.wikipedia.org/wiki/blackberry"
    },
    bullets: [
      { text: 'Berry is juicy and sweet when ripe.' , isWarning: false },
      { text: 'Berry turns ripe in midsummer.' , isWarning: false },
      { text: 'Plant is a deciduous bush or small tree.' , isWarning: false },
      { text: 'Tip: the mulberry is an example of a compound berry, since it consists of a tight cluster of smaller parts, resembling a raspberry. Compound berries are generally edible.' , isWarning: false },
      { text: 'Warning: unripe mulberries cause stomache upset and are considered poisonous.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Oregon Grape",
    otherNames: [],
    images: [
      "oregongrape1.jpg",
      "oregongrape2.jpg",
      "oregongrape3.jpg",
      "oregongrape4.jpg", // Leaf / flower
      "oregongrape5.jpg", // Leaf / flower
      "oregongrape6.jpg", // Leaf / flower
    ],
    wikiLink: {
      text: "Mahonia spp.",
      href: "http://en.wikipedia.org/wiki/mahonia"
    },
    bullets: [
      { text: 'Berries taste sour.' , isWarning: false },
      { text: 'Berries are about 1cm long.' , isWarning: false },
      { text: 'Berries are suitable for casual foraging and flavouring food or drink.' , isWarning: false },
      { text: 'Plant grows dry and/or open forests in low to montane areas.' , isWarning: false },
      { text: 'Warning: berries may be toxic and even deadly if eaten in large quantities.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Pacific Crabapple",
    otherNames: [],
    images: [
      "pacificcrabapple1.jpg",
      "pacificcrabapple2.jpg",
      "pacificcrabapple3.jpg",
      "pacificcrabapple4.jpg", // Leaf / flower
      "pacificcrabapple5.jpg",
      "pacificcrabapple6.jpg", // Leaf / flower
      "pacificcrabapple7.jpg",
      "pacificcrabapple8.jpg", // Leaf / flower
    ],
    wikiLink: {
      text: "Malus fusca",
      href: "http://en.wikipedia.org/wiki/malus_fusca"
    },
    bullets: [
      { text: 'Fruits grow in clusters and are yellow to reddish purple.' , isWarning: false },
      { text: 'Fruits are ~15mm in length.' , isWarning: false },
      { text: 'Taste of raw fruit is sour/tart.' , isWarning: false },
      { text: 'Plant is a small tree.' , isWarning: false },
      { text: 'Plant grows in open coniferous forests and forested wetlands.' , isWarning: false },
      { text: 'Warning: raw seeds are toxic.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Prickly-pear Cactus",
    otherNames: [],
    images: [
      "pricklypear1.jpg",
      "pricklypear2.jpg",
      "pricklypear3.jpg",
      "pricklypear4.jpg",
      "pricklypear5.jpg",
      "pricklypear6.jpg",
    ],
    wikiLink: {
      text: "Opuntia spp.",
      href: "http://en.wikipedia.org/wiki/opuntia"
    },
    bullets: [
      { text: 'Flesh of the plant is edible raw, after removing spines and inner seeds.' , isWarning: false },
      { text: 'Taste of plant is bland or sweet to sour.' , isWarning: false },
      { text: 'Flesh can be dried for storage.' , isWarning: false },
      { text: 'Berries are edible.' , isWarning: false },
      { text: 'Seeds can be dried for storage.' , isWarning: false },
      { text: 'Dried seeds can be ground into a flour.' , isWarning: false },
      { text: 'Grows in dry open areas in prairies and foothills.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Raspberry",
    otherNames: [],
    images: [
      "raspberry1.jpg",
      "raspberry2.jpg",
      "raspberry3.jpg",
      "raspberry4.jpg", // Leaf / flower
      "raspberry5.jpg", // Leaf / flower
      "raspberry6.jpg",
    ],
    wikiLink: {
      text: "Rubus spp.",
      href: "http://en.wikipedia.org/wiki/rubus"
    },
    bullets: [
      { text: 'Berry is sweet.' , isWarning: false },
      { text: 'Berry is best eaten fresh, since it does not preserve well.' , isWarning: false },
      { text: 'Plant may have prickles or bristles.' , isWarning: false },
      { text: 'Tip: the raspberry is an example of a compound berry, since it consists of a tight cluster of smaller parts. Compound berries are generally edible.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Red Currant",
    otherNames: [],
    images: [
      "redcurrant1.jpg",
      "redcurrant2.jpg",
      "redcurrant3.jpg",
      "redcurrant4.jpg",
      "redcurrant5.jpg",
      "redcurrant6.jpg",
    ],
    wikiLink: {
      text: "Ribes spp.",
      href: "http://en.wikipedia.org/wiki/ribes"
    },
    bullets: [
      { text: 'Berries are bright translucent red.' , isWarning: false },
      { text: 'Berries are sour but palatable.' , isWarning: false },
      { text: 'Berry is more sour than black currant berry.' , isWarning: false },
      { text: 'Plant is waist high.' , isWarning: false },
      { text: 'Shrub grows in swamps, moist coniferous forests and rocky montane slopes.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Red Huckleberry",
    otherNames: [],
    images: [
      "redhuckleberry1.jpg",
      "redhuckleberry2.jpg",
      "redhuckleberry3.jpg",
      "redhuckleberry4.jpg",
      "redhuckleberry5.jpg",
      "redhuckleberry6.jpg",
    ],
    wikiLink: {
      text: "Vaccinium parvifolium",
      href: "http://en.wikipedia.org/wiki/vaccinium_parvifolium"
    },
    bullets: [
      { text: 'Raw berry has a sweet/tart taste.' , isWarning: false },
      { text: 'Berry is high in vitamin C.' , isWarning: false },
      { text: 'Berry can mashed and spread out for drying, either in the sun or using smoke. After storage, berries can be reconstituted in boiling water.' , isWarning: false },
      { text: 'Berry can be stored in grease or oil.' , isWarning: false },
      { text: 'Berry was traditionally used as fish bait.' , isWarning: false },
      { text: 'Plant is a deciduous shrub.' , isWarning: false },
      { text: 'Grows in forests in lowland and montane areas, frequently on nurse logs and rotting stumps.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Salal",
    otherNames: [],
    images: [
      "salal1.jpg",
      "salal2.jpg",
      "salal3.jpg", // Leaf / flower
    ],
    wikiLink: {
      text: "Gaultheria shallon",
      href: "http://en.wikipedia.org/wiki/gaultheria_shallon"
    },
    bullets: [
      { text: 'berries are mildly sweet with good flavour.' , isWarning: false },
      { text: 'berries can be dried into cakes.' , isWarning: false },
      { text: 'plant grows in coastal areas and forms deep thickets.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Salmonberry",
    otherNames: [],
    images: [
      "salmonberry1.jpg",
      "salmonberry2.jpg",
      "salmonberry3.jpg",
      "salmonberry4.jpg", // Leaf / flower
      "salmonberry5.jpg", // Leaf / flower
      "salmonberry6.jpg",
    ],
    wikiLink: {
      text: "Rubus spectabilis",
      href: "http://en.wikipedia.org/wiki/rubus_spectabilis"
    },
    bullets: [
      { text: 'Mature berry is yellow-red.' , isWarning: false },
      { text: 'Berry is mildly sweet to neutral.' , isWarning: false },
      { text: 'Young plant/shoot is edible raw.' , isWarning: false },
      { text: 'Grows in moist coastal forests.' , isWarning: false },
      { text: 'Tip: the salmonberry is an example of a compound berry, since it consists of a tight cluster of smaller parts, resembling a raspberry. Compound berries are generally edible.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Saskatoon Berry",
    otherNames: ["Service Berry", "Juneberry"],
    images: [
      "saskatoonberry1.jpg",
      "saskatoonberry2.jpg",
      "saskatoonberry3.jpg",
      "saskatoonberry4.jpg", // Leaf / flower
      "saskatoonberry5.jpg",
      "saskatoonberry6.jpg",
    ],
    wikiLink: {
      text: "Arctostaphylos spp.",
      href: "http://en.wikipedia.org/wiki/arctostaphylos"
    },
    bullets: [
      { text: 'Purple berry is mildly sweet to neutral.' , isWarning: false },
      { text: 'Cooked/steamed berries can be mashed, formed into cakes and dried over a low intensity fire.' , isWarning: false },
      { text: 'Dried berries can be mixed with meat and fat to make pemmican.' , isWarning: false },
      { text: 'Dried berries can be added to soups.' , isWarning: false },
      { text: 'Plant is a shrub or small tree.' , isWarning: false },
      { text: 'Grows in forested areas in plains, foothills, and montane regions' , isWarning: false },
      { text: 'Warning: pits contain cyanide-like toxins, which are destroyed by cooking or drying.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Strawberry",
    otherNames: [],
    images: [
      "strawberry1.jpg",
      "strawberry2.jpg",
      "strawberry3.jpg",
      "strawberry4.jpg",
      "strawberry5.jpg",
      "strawberry6.jpg",
      "strawberry7.jpg", // Leaf / flower
      "strawberry8.jpg",
      "strawberry9.jpg", // Leaf / flower
    ],
    wikiLink: {
      text: "Fragaria spp.",
      href: "http://en.wikipedia.org/wiki/fragaria"
    },
    bullets: [
      { text: 'Berry is sweet.' , isWarning: false },
      { text: 'Berry can be mashed an spread out into cakes and sundried.' , isWarning: false },
      { text: 'Flowers, leaves and stems can be used for flavouring.' , isWarning: false },
      { text: 'Warning: wilted or partly wilted leaves contain toxins.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Sumac",
    otherNames: [],
    images: [
      "sumac1.jpg",
      "sumac2.jpg",
      "sumac3.jpg",
      "sumac4.jpg", // Leaf / flower
    ],
    wikiLink: {
      text: "Rhus",
      href: "http://en.wikipedia.org/wiki/rhus"
    },
    bullets: [
      { text: 'Berry is reddish, hairy, and has lemony taste.' , isWarning: false },
      { text: 'Berry can be eaten raw to quench thirst.' , isWarning: false },
      { text: 'Berry can be crushed in water to make refreshing drink.' , isWarning: false },
      { text: 'Grows in plains and foothills on dry slopes.' , isWarning: false },
    ],
    edible: true
  },
  {
    name: "Thimbleberry",
    otherNames: [],
    images: [
      "thimbleberry1.jpg",
      "thimbleberry2.jpg",
      "thimbleberry3.jpg",
      "thimbleberry4.jpg",
      "thimbleberry5.jpg", // Leaf / flower
    ],
    wikiLink: {
      text: "Rubus parviflorus",
      href: "http://en.wikipedia.org/wiki/rubus_parviflorus"
    },
    bullets: [
      { text: 'Mature berry is thin, coarse, seedy and has neutral taste.' , isWarning: false },
      { text: 'Plant has no thorns.' , isWarning: false },
      { text: 'Plant has large, maple-like leaves.' , isWarning: false },
      { text: 'Young shoots can be peeled and eaten raw.' , isWarning: false },
      { text: 'Grows in foothill and montane regions.' , isWarning: false },
      { text: 'Tip: the thimbleberry is an example of a compound berry, since it consists of a tight cluster of smaller parts, resembling a raspberry. Compound berries are generally edible.' , isWarning: false },
      { text: 'Warning: avoid eating wilted leaves, which can contain toxins.' , isWarning: true },
    ],
    edible: true
  },
  {
    name: "Twisted Stalk",
    otherNames: [],
    images: [
      "twistedstalk1.jpg",
      "twistedstalk2.jpg", // Leaf / flower
      "twistedstalk3.jpg",
      "twistedstalk4.jpg", // Leaf / flower
      "twistedstalk5.jpg", // Leaf / flower
      "twistedstalk6.jpg",
      "twistedstalk7.jpg",
      "twistedstalk8.jpg", // Leaf / flower
    ],
    wikiLink: {
      text: "Streptopus spp.",
      href: "http://en.wikipedia.org/wiki/streptopus"
    },
    bullets: [
      { text: 'Berry has bland, cucumber-like taste.' , isWarning: false },
      { text: 'Stem has distinct sharp kinks that make it look crooked.' , isWarning: false },
      { text: 'Grows in dense, moist undergrowth.' , isWarning: false },
      { text: 'Warning: berries eaten in quantity can have a laxative effect.' , isWarning: true },
    ],
    edible: true
  },
  // {
  //   "name": "Baneberry",
  //   "image": "baneberry.jpg",
  //   "description": "Baneberry description",
  //   "edible": false
  // }
];

export default berries;