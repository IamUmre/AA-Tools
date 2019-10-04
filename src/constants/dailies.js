export const ZONE = Object.freeze({
  ARCUM_IRIS: 'Arcum Iris',
  FALCORTH_PLAINS: 'Falcorth Plains',
  SUNBITE_WILDS: 'Sunbite Wilds',
  TIGERSPINE_MOUNTAINS: 'Tigerspine Mountains',
  MAHADEVI: 'Mahadevi',
  SOLIS_HEADLANDS: 'Solis Headlands',
  VILLANELLE: 'Villanelle',
  SILENT_FOREST: 'Silent Forest',
  YNYSTERE: 'Ynystere',

  SOLZREED_PENINSULA: 'Solzreed Peninsula',
  GWEONID_FOREST: 'Gweonid Forest',
  AIRAIN_ROCK: 'Airain Rock',
  LILYUT_HILLS: 'Lilyut Hills',
  AUBRE_CRADLE: 'Aubre Cradle',
  DEWSTONE_PLAINS: 'Dewstone Plains',
  WHITE_ARDEN: 'White Arden',
  MARIANOPLE: 'Marianople',
  TWO_CROWNS: 'Two Crowns',
  CINDERSTONE_MOOR: 'Cinderstone Moor',

  HALCYONA: 'Halcyona',
  HELLSWAMP: 'Hellswamp',
  SANDDEEP: 'Sanddeep',

  ROOKBORNE_BASIN: 'Rookborne Basin',
  WINDSCOUR_SAVANNAH: 'Windscour Savannah',
  PERINOOR_RUINS: 'Perinoor Ruins',
  HASLA: 'Hasla',

  KARKASSE_RIDGELANDS: 'Karkasse Ridgelands',

  ROKHALA_MOUNTAINS: 'Rokhala Mountains',
  ANHIMAR: 'Anhimar',

  DIAMOND_SHORES: 'Diamond Shores',
  GOLDEN_RUINS: 'Golden Ruins',
  WHALESONG_HARBOR: 'Whalesong Harbor',
  REEDWIND: 'Reedwind',
  WESTERN_HIRAM_MOUNTAINS: 'Western Hiram Mountains',
  EASTERN_HIRAM_MOUNTAINS: 'Eastern Hiram Mountains',

  SUNGOLD_FIELDS: 'Sungold Fields',
  CALMLANDS: 'Calmlands',
  MARCALA: 'Marcala',
  HEEDMAR: 'Heedmar',
  NUIMARI: 'Nuimari',
  EXELOCH: 'Exeloch',

  FREEDICH_ISLAND: 'Freedich Island',
  GROWLGATE_ISLE: 'Growlgate Isle',
  AEGIS_ISLAND: 'Aegis Island',
});

export const CONTINENT = Object.freeze({
  NUIA: {
    name: 'Nuia',
    zones: [
      ZONE.SOLZREED_PENINSULA,
      ZONE.GWEONID_FOREST,
      ZONE.LILYUT_HILLS,
      ZONE.AIRAIN_ROCK,
      ZONE.AUBRE_CRADLE,
      ZONE.DEWSTONE_PLAINS,
      ZONE.WHITE_ARDEN,
      ZONE.MARIANOPLE,
      ZONE.TWO_CROWNS,
      ZONE.CINDERSTONE_MOOR,
      ZONE.HALCYONA,
      ZONE.HELLSWAMP,
      ZONE.SANDDEEP,
      ZONE.KARKASSE_RIDGELANDS,
      ZONE.ANHIMAR,
    ],
  },
  HARANYA: {
    name: 'Haranya',
    zones: [
      ZONE.ARCUM_IRIS,
      ZONE.FALCORTH_PLAINS,
      ZONE.SUNBITE_WILDS,
      ZONE.TIGERSPINE_MOUNTAINS,
      ZONE.MAHADEVI,
      ZONE.SOLIS_HEADLANDS,
      ZONE.VILLANELLE,
      ZONE.SILENT_FOREST,
      ZONE.YNYSTERE,
      ZONE.ROOKBORNE_BASIN,
      ZONE.WINDSCOUR_SAVANNAH,
      ZONE.PERINOOR_RUINS,
      ZONE.HASLA,
      ZONE.ROKHALA_MOUNTAINS,
    ],
  },
  ARCADIAN_SEA: {
    name: 'Arcadian Sea',
    zones: [
      ZONE.FREEDICH_ISLAND,
      ZONE.GROWLGATE_ISLE,
      ZONE.AEGIS_ISLAND,
    ],
  },
  AURORIA: {
    name: 'Auroria',
    zones: [
      ZONE.DIAMOND_SHORES,
      ZONE.GOLDEN_RUINS,
      ZONE.WHALESONG_HARBOR,
      ZONE.REEDWIND,
      ZONE.WESTERN_HIRAM_MOUNTAINS,
      ZONE.EASTERN_HIRAM_MOUNTAINS,
      ZONE.SUNGOLD_FIELDS,
      ZONE.CALMLANDS,
      ZONE.MARCALA,
      ZONE.HEEDMAR,
      ZONE.NUIMARI,
      ZONE.EXELOCH,
    ],
  },
});

export const FACTION = Object.freeze({
  NUIA: 'Nuia',
  HARANYA: 'Haranya',
});

export const TYPE = Object.freeze({
  BLUE_SALT: 'Blue Salt Brotherhood',
  HUNTING_REQUEST: 'Hunting Request',
  WORLD_BOSS: 'World Boss',
  DUNGEON: 'Dungeon',
  FAMILY: 'Family Quest',
});

export const DIFFICULTY = Object.freeze({
  ELITE: 'Elite',
  EPIC: 'Epic',
  LEGENDARY: 'Legendary',
  MYTHIC: 'Mythic',
});

export const REWARD = Object.freeze({
  COIN: 'Coin',
  GILDA: 'Gilda Stars',
  HONOR: 'Honor Points',
  VOCATION: 'Vocation Badges',
  PRESTIGE: 'Prestige',
  LEADERSHIP: 'Leadership',
  GUILD_XP: 'Guild XP',
  FAMILY_XP: 'Family XP',
  ITEM: 'Item',
});

export const QUALITY = Object.freeze({
  POOR: 'Poor',
  BASIC: 'Basic',
  GRAND: 'Grand',
  RARE: 'Rare',
  CELESTIAL: 'Celestial',
});

