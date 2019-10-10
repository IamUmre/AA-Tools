import SKILLSET from 'constants/skillsets';

const classes = [];

const getSkillsetKey = (skillset) => Object.keys(SKILLSET).find(key => SKILLSET[key] === skillset);

const add = (name, skillSet1, skillSet2, skillSet3) => {
  classes.push({ name, skillSets: [getSkillsetKey(skillSet1), getSkillsetKey(skillSet2), getSkillsetKey(skillSet3)] });
};

add('Bonestalker', SKILLSET.ARCHERY, SKILLSET.AURAMANCY, SKILLSET.BATTLERAGE);
add('Bastion', SKILLSET.ARCHERY, SKILLSET.AURAMANCY, SKILLSET.DEFENSE);
add('Astral Ranger', SKILLSET.ARCHERY, SKILLSET.AURAMANCY, SKILLSET.OCCULTISM);
add('Primeval', SKILLSET.ARCHERY, SKILLSET.AURAMANCY, SKILLSET.SHADOWPLAY);
add('Howler', SKILLSET.ARCHERY, SKILLSET.AURAMANCY, SKILLSET.SONGCRAFT);
add('Stormchaser', SKILLSET.ARCHERY, SKILLSET.AURAMANCY, SKILLSET.SORCERY);
add('Oracle', SKILLSET.ARCHERY, SKILLSET.AURAMANCY, SKILLSET.VITALISM);
add('Arcane Hunter', SKILLSET.ARCHERY, SKILLSET.AURAMANCY, SKILLSET.WITCHCRAFT);
add('Visonary', SKILLSET.ARCHERY, SKILLSET.AURAMANCY, SKILLSET.MALEDICTION);
add('Liberator', SKILLSET.ARCHERY, SKILLSET.BATTLERAGE, SKILLSET.DEFENSE);
add('Dreadbow', SKILLSET.ARCHERY, SKILLSET.BATTLERAGE, SKILLSET.OCCULTISM);
add('Outrider', SKILLSET.ARCHERY, SKILLSET.BATTLERAGE, SKILLSET.SHADOWPLAY);
add('Bloodskald', SKILLSET.ARCHERY, SKILLSET.BATTLERAGE, SKILLSET.SONGCRAFT);
add('Destroyer', SKILLSET.ARCHERY, SKILLSET.BATTLERAGE, SKILLSET.SORCERY);
add('Warpriest', SKILLSET.ARCHERY, SKILLSET.BATTLERAGE, SKILLSET.VITALISM);
add('Dreadhunter', SKILLSET.ARCHERY, SKILLSET.BATTLERAGE, SKILLSET.WITCHCRAFT);
add('Windseeker', SKILLSET.ARCHERY, SKILLSET.BATTLERAGE, SKILLSET.MALEDICTION);
add('Dreadstone', SKILLSET.ARCHERY, SKILLSET.DEFENSE, SKILLSET.OCCULTISM);
add('Stone Arrow', SKILLSET.ARCHERY, SKILLSET.DEFENSE, SKILLSET.SHADOWPLAY);
add('Honorguard', SKILLSET.ARCHERY, SKILLSET.DEFENSE, SKILLSET.SONGCRAFT);
add('Farslayer', SKILLSET.ARCHERY, SKILLSET.DEFENSE, SKILLSET.SORCERY);
add('Druid', SKILLSET.ARCHERY, SKILLSET.DEFENSE, SKILLSET.VITALISM);
add('Archon', SKILLSET.ARCHERY, SKILLSET.DEFENSE, SKILLSET.WITCHCRAFT);
add('Corrupter', SKILLSET.ARCHERY, SKILLSET.DEFENSE, SKILLSET.MALEDICTION);
add('Shadehunter', SKILLSET.ARCHERY, SKILLSET.OCCULTISM, SKILLSET.SHADOWPLAY);
add('Gravesinger', SKILLSET.ARCHERY, SKILLSET.OCCULTISM, SKILLSET.SONGCRAFT);
add('Spellbow', SKILLSET.ARCHERY, SKILLSET.OCCULTISM, SKILLSET.SORCERY);
add('Blood Arrow', SKILLSET.ARCHERY, SKILLSET.OCCULTISM, SKILLSET.VITALISM);
add('Shadestriker', SKILLSET.ARCHERY, SKILLSET.OCCULTISM, SKILLSET.WITCHCRAFT);
add('Wildclaw', SKILLSET.ARCHERY, SKILLSET.OCCULTISM, SKILLSET.MALEDICTION);
add('Ebonsong', SKILLSET.ARCHERY, SKILLSET.SHADOWPLAY, SKILLSET.SONGCRAFT);
add('Infiltrator', SKILLSET.ARCHERY, SKILLSET.SHADOWPLAY, SKILLSET.SORCERY);
add('Ranger', SKILLSET.ARCHERY, SKILLSET.SHADOWPLAY, SKILLSET.VITALISM);
add('Trickster', SKILLSET.ARCHERY, SKILLSET.SHADOWPLAY, SKILLSET.WITCHCRAFT);
add('Fanborn', SKILLSET.ARCHERY, SKILLSET.SHADOWPLAY, SKILLSET.MALEDICTION);
add('Evoker', SKILLSET.ARCHERY, SKILLSET.SONGCRAFT, SKILLSET.SORCERY);
add('Soulsong', SKILLSET.ARCHERY, SKILLSET.SONGCRAFT, SKILLSET.VITALISM);
add('Hex Ranger', SKILLSET.ARCHERY, SKILLSET.SONGCRAFT, SKILLSET.WITCHCRAFT);
add('Feversong', SKILLSET.ARCHERY, SKILLSET.SONGCRAFT, SKILLSET.MALEDICTION);
add('Naturalist', SKILLSET.ARCHERY, SKILLSET.SORCERY, SKILLSET.VITALISM);
add('Stormcaster', SKILLSET.ARCHERY, SKILLSET.SORCERY, SKILLSET.WITCHCRAFT);
add('Blinkshot', SKILLSET.ARCHERY, SKILLSET.SORCERY, SKILLSET.MALEDICTION);
add('Soulbow', SKILLSET.ARCHERY, SKILLSET.VITALISM, SKILLSET.WITCHCRAFT);
add('Doomshot', SKILLSET.ARCHERY, SKILLSET.VITALISM, SKILLSET.MALEDICTION);
add('Voidstalker', SKILLSET.ARCHERY, SKILLSET.MALEDICTION, SKILLSET.WITCHCRAFT);
add('Abolisher', SKILLSET.AURAMANCY, SKILLSET.BATTLERAGE, SKILLSET.DEFENSE);
add('Bloodreaver', SKILLSET.AURAMANCY, SKILLSET.BATTLERAGE, SKILLSET.OCCULTISM);
add('Darkrunner', SKILLSET.AURAMANCY, SKILLSET.BATTLERAGE, SKILLSET.SHADOWPLAY);
add('Herald', SKILLSET.AURAMANCY, SKILLSET.BATTLERAGE, SKILLSET.SONGCRAFT);
add('Enforcer', SKILLSET.AURAMANCY, SKILLSET.BATTLERAGE, SKILLSET.SORCERY);
add('Argent', SKILLSET.AURAMANCY, SKILLSET.BATTLERAGE, SKILLSET.VITALISM);
add('Hex Warden', SKILLSET.AURAMANCY, SKILLSET.BATTLERAGE, SKILLSET.WITCHCRAFT);
add('Ghostblade', SKILLSET.AURAMANCY, SKILLSET.BATTLERAGE, SKILLSET.MALEDICTION);
add('Skullknight', SKILLSET.AURAMANCY, SKILLSET.DEFENSE, SKILLSET.OCCULTISM);
add('Nightblade', SKILLSET.AURAMANCY, SKILLSET.DEFENSE, SKILLSET.SHADOWPLAY);
add('Tomb Warden', SKILLSET.AURAMANCY, SKILLSET.DEFENSE, SKILLSET.SONGCRAFT);
add('Thaumaturge', SKILLSET.AURAMANCY, SKILLSET.DEFENSE, SKILLSET.SORCERY);
add('Templar', SKILLSET.AURAMANCY, SKILLSET.DEFENSE, SKILLSET.VITALISM);
add('Dreambreaker', SKILLSET.AURAMANCY, SKILLSET.DEFENSE, SKILLSET.WITCHCRAFT);
add('Pit Fighter', SKILLSET.AURAMANCY, SKILLSET.DEFENSE, SKILLSET.MALEDICTION);
add('Planeshifter', SKILLSET.AURAMANCY, SKILLSET.OCCULTISM, SKILLSET.SHADOWPLAY);
add('Phantasm', SKILLSET.AURAMANCY, SKILLSET.OCCULTISM, SKILLSET.SONGCRAFT);
add('Revenant', SKILLSET.AURAMANCY, SKILLSET.OCCULTISM, SKILLSET.SORCERY);
add('Edgewalker', SKILLSET.AURAMANCY, SKILLSET.OCCULTISM, SKILLSET.VITALISM);
add('Nightcloak', SKILLSET.AURAMANCY, SKILLSET.OCCULTISM, SKILLSET.WITCHCRAFT);
add('Emissary', SKILLSET.AURAMANCY, SKILLSET.OCCULTISM, SKILLSET.MALEDICTION);
add('Exorcist', SKILLSET.AURAMANCY, SKILLSET.SHADOWPLAY, SKILLSET.SONGCRAFT);
add('Enigmatist', SKILLSET.AURAMANCY, SKILLSET.SHADOWPLAY, SKILLSET.SORCERY);
add('Soothsayer', SKILLSET.AURAMANCY, SKILLSET.SHADOWPLAY, SKILLSET.VITALISM);
add('Eidolon', SKILLSET.AURAMANCY, SKILLSET.SHADOWPLAY, SKILLSET.WITCHCRAFT);
add('Dreadrunner', SKILLSET.AURAMANCY, SKILLSET.SHADOWPLAY, SKILLSET.MALEDICTION);
add('Spellsong', SKILLSET.AURAMANCY, SKILLSET.SONGCRAFT, SKILLSET.SORCERY);
add('Cleric', SKILLSET.AURAMANCY, SKILLSET.SONGCRAFT, SKILLSET.VITALISM);
add('Enchantrix', SKILLSET.AURAMANCY, SKILLSET.SONGCRAFT, SKILLSET.WITCHCRAFT);
add('Instigator', SKILLSET.AURAMANCY, SKILLSET.SONGCRAFT, SKILLSET.MALEDICTION);
add('Boneweaver', SKILLSET.AURAMANCY, SKILLSET.SORCERY, SKILLSET.VITALISM);
add('Arcanist', SKILLSET.AURAMANCY, SKILLSET.SORCERY, SKILLSET.WITCHCRAFT);
add('Spiritualist', SKILLSET.AURAMANCY, SKILLSET.SORCERY, SKILLSET.MALEDICTION);
add('Hierophant', SKILLSET.AURAMANCY, SKILLSET.VITALISM, SKILLSET.WITCHCRAFT);
add('Darkseer', SKILLSET.AURAMANCY, SKILLSET.VITALISM, SKILLSET.MALEDICTION);
add('Equalizer', SKILLSET.AURAMANCY, SKILLSET.MALEDICTION, SKILLSET.WITCHCRAFT);
add('Doomlord', SKILLSET.BATTLERAGE, SKILLSET.DEFENSE, SKILLSET.OCCULTISM);
add('Blighter', SKILLSET.BATTLERAGE, SKILLSET.DEFENSE, SKILLSET.SHADOWPLAY);
add('Dawncaller', SKILLSET.BATTLERAGE, SKILLSET.DEFENSE, SKILLSET.SONGCRAFT);
add('Crusader', SKILLSET.BATTLERAGE, SKILLSET.DEFENSE, SKILLSET.SORCERY);
add('Paladin', SKILLSET.BATTLERAGE, SKILLSET.DEFENSE, SKILLSET.VITALISM);
add('Hexblade', SKILLSET.BATTLERAGE, SKILLSET.DEFENSE, SKILLSET.WITCHCRAFT);
add('Dourguard', SKILLSET.BATTLERAGE, SKILLSET.DEFENSE, SKILLSET.MALEDICTION);
add('Executioner', SKILLSET.BATTLERAGE, SKILLSET.OCCULTISM, SKILLSET.SHADOWPLAY);
add('Lorebreaker', SKILLSET.BATTLERAGE, SKILLSET.OCCULTISM, SKILLSET.SONGCRAFT);
add('Ravager', SKILLSET.BATTLERAGE, SKILLSET.OCCULTISM, SKILLSET.SORCERY);
add('Blackguard', SKILLSET.BATTLERAGE, SKILLSET.OCCULTISM, SKILLSET.VITALISM);
add('Hordebreaker', SKILLSET.BATTLERAGE, SKILLSET.OCCULTISM, SKILLSET.WITCHCRAFT);
add('Soulthief', SKILLSET.BATTLERAGE, SKILLSET.OCCULTISM, SKILLSET.MALEDICTION);
add('Blade Dancer', SKILLSET.BATTLERAGE, SKILLSET.SHADOWPLAY, SKILLSET.SONGCRAFT);
add('Hellweaver', SKILLSET.BATTLERAGE, SKILLSET.SHADOWPLAY, SKILLSET.SORCERY);
add('Inquisitor', SKILLSET.BATTLERAGE, SKILLSET.SHADOWPLAY, SKILLSET.VITALISM);
add('Shadowblade', SKILLSET.BATTLERAGE, SKILLSET.SHADOWPLAY, SKILLSET.WITCHCRAFT);
add('Ragebinder', SKILLSET.BATTLERAGE, SKILLSET.SHADOWPLAY, SKILLSET.MALEDICTION);
add('Spellsword', SKILLSET.BATTLERAGE, SKILLSET.SONGCRAFT, SKILLSET.SORCERY);
add('Bloodthrall', SKILLSET.BATTLERAGE, SKILLSET.SONGCRAFT, SKILLSET.VITALISM);
add('Dirgeweaver', SKILLSET.BATTLERAGE, SKILLSET.SONGCRAFT, SKILLSET.WITCHCRAFT);
add('Oathsworn', SKILLSET.BATTLERAGE, SKILLSET.SONGCRAFT, SKILLSET.MALEDICTION);
add('Fleshshaper', SKILLSET.BATTLERAGE, SKILLSET.SORCERY, SKILLSET.VITALISM);
add('Harbinger', SKILLSET.BATTLERAGE, SKILLSET.SORCERY, SKILLSET.WITCHCRAFT);
add('Shadow Prophet', SKILLSET.BATTLERAGE, SKILLSET.SORCERY, SKILLSET.MALEDICTION);
add('Dervish', SKILLSET.BATTLERAGE, SKILLSET.VITALISM, SKILLSET.WITCHCRAFT);
add('Marrowblade', SKILLSET.BATTLERAGE, SKILLSET.VITALISM, SKILLSET.MALEDICTION);
add('Conjuror', SKILLSET.BATTLERAGE, SKILLSET.MALEDICTION, SKILLSET.WITCHCRAFT);
add('Dreadnaught', SKILLSET.DEFENSE, SKILLSET.OCCULTISM, SKILLSET.SHADOWPLAY);
add('Dark Aegis', SKILLSET.DEFENSE, SKILLSET.OCCULTISM, SKILLSET.SONGCRAFT);
add('Battlemage', SKILLSET.DEFENSE, SKILLSET.OCCULTISM, SKILLSET.SORCERY);
add('Justicar', SKILLSET.DEFENSE, SKILLSET.OCCULTISM, SKILLSET.VITALISM);
add('Defiler', SKILLSET.DEFENSE, SKILLSET.OCCULTISM, SKILLSET.WITCHCRAFT);
add('Mindslaver', SKILLSET.DEFENSE, SKILLSET.OCCULTISM, SKILLSET.MALEDICTION);
add('Nightbearer', SKILLSET.DEFENSE, SKILLSET.SHADOWPLAY, SKILLSET.SONGCRAFT);
add('Swiftstone', SKILLSET.DEFENSE, SKILLSET.SHADOWPLAY, SKILLSET.SORCERY);
add('Death Warden', SKILLSET.DEFENSE, SKILLSET.SHADOWPLAY, SKILLSET.VITALISM);
add('Shadowknight', SKILLSET.DEFENSE, SKILLSET.SHADOWPLAY, SKILLSET.WITCHCRAFT);
add('Shadowguard', SKILLSET.DEFENSE, SKILLSET.SHADOWPLAY, SKILLSET.MALEDICTION);
add('Earthsinger', SKILLSET.DEFENSE, SKILLSET.SONGCRAFT, SKILLSET.SORCERY);
add('Caretaker', SKILLSET.DEFENSE, SKILLSET.SONGCRAFT, SKILLSET.VITALISM);
add('Poxbane', SKILLSET.DEFENSE, SKILLSET.SONGCRAFT, SKILLSET.WITCHCRAFT);
add('Deceiver', SKILLSET.DEFENSE, SKILLSET.SONGCRAFT, SKILLSET.MALEDICTION);
add('Scion', SKILLSET.DEFENSE, SKILLSET.SORCERY, SKILLSET.VITALISM);
add('Cabalist', SKILLSET.DEFENSE, SKILLSET.SORCERY, SKILLSET.WITCHCRAFT);
add('Ebonshield', SKILLSET.DEFENSE, SKILLSET.SORCERY, SKILLSET.MALEDICTION);
add('Shadowbane', SKILLSET.DEFENSE, SKILLSET.VITALISM, SKILLSET.WITCHCRAFT);
add('Invader', SKILLSET.DEFENSE, SKILLSET.VITALISM, SKILLSET.MALEDICTION);
add('Ironsoul', SKILLSET.DEFENSE, SKILLSET.MALEDICTION, SKILLSET.WITCHCRAFT);
add('Nocturne', SKILLSET.OCCULTISM, SKILLSET.SHADOWPLAY, SKILLSET.SONGCRAFT);
add('Reaper', SKILLSET.OCCULTISM, SKILLSET.SHADOWPLAY, SKILLSET.SORCERY);
add('Doombringer', SKILLSET.OCCULTISM, SKILLSET.SHADOWPLAY, SKILLSET.VITALISM);
add('Shroudmaster', SKILLSET.OCCULTISM, SKILLSET.SHADOWPLAY, SKILLSET.WITCHCRAFT);
add('Saboteur', SKILLSET.OCCULTISM, SKILLSET.SHADOWPLAY, SKILLSET.MALEDICTION);
add('Requiem', SKILLSET.OCCULTISM, SKILLSET.SONGCRAFT, SKILLSET.SORCERY);
add('Sorrowsong', SKILLSET.OCCULTISM, SKILLSET.SONGCRAFT, SKILLSET.VITALISM);
add('Tombcaller', SKILLSET.OCCULTISM, SKILLSET.SONGCRAFT, SKILLSET.WITCHCRAFT);
add('Banesong', SKILLSET.OCCULTISM, SKILLSET.SONGCRAFT, SKILLSET.MALEDICTION);
add('Cultist', SKILLSET.OCCULTISM, SKILLSET.SORCERY, SKILLSET.VITALISM);
add('Demonologist', SKILLSET.OCCULTISM, SKILLSET.SORCERY, SKILLSET.WITCHCRAFT);
add('Zealot', SKILLSET.OCCULTISM, SKILLSET.SORCERY, SKILLSET.MALEDICTION);
add('Necromancer', SKILLSET.OCCULTISM, SKILLSET.VITALISM, SKILLSET.WITCHCRAFT);
add('Evangelist', SKILLSET.OCCULTISM, SKILLSET.VITALISM, SKILLSET.MALEDICTION);
add('Witch Doctor', SKILLSET.OCCULTISM, SKILLSET.MALEDICTION, SKILLSET.WITCHCRAFT);
add('Spellsinger', SKILLSET.SHADOWPLAY, SKILLSET.SONGCRAFT, SKILLSET.SORCERY);
add('Confessor', SKILLSET.SHADOWPLAY, SKILLSET.SONGCRAFT, SKILLSET.VITALISM);
add('Nightwitch', SKILLSET.SHADOWPLAY, SKILLSET.SONGCRAFT, SKILLSET.WITCHCRAFT);
add('Shadowsong', SKILLSET.SHADOWPLAY, SKILLSET.SONGCRAFT, SKILLSET.MALEDICTION);
add('Animist', SKILLSET.SHADOWPLAY, SKILLSET.SORCERY, SKILLSET.VITALISM);
add('Daggerspell', SKILLSET.SHADOWPLAY, SKILLSET.SORCERY, SKILLSET.WITCHCRAFT);
add('Fanatic', SKILLSET.SHADOWPLAY, SKILLSET.SORCERY, SKILLSET.MALEDICTION);
add('Assassin', SKILLSET.SHADOWPLAY, SKILLSET.VITALISM, SKILLSET.WITCHCRAFT);
add('Spellweaver', SKILLSET.SHADOWPLAY, SKILLSET.VITALISM, SKILLSET.MALEDICTION);
add('Fury Mage', SKILLSET.SHADOWPLAY, SKILLSET.MALEDICTION, SKILLSET.WITCHCRAFT);
add('Gypsy', SKILLSET.SONGCRAFT, SKILLSET.SORCERY, SKILLSET.VITALISM);
add('Lamentor', SKILLSET.SONGCRAFT, SKILLSET.SORCERY, SKILLSET.WITCHCRAFT);
add('Spectre', SKILLSET.SONGCRAFT, SKILLSET.SORCERY, SKILLSET.MALEDICTION);
add('Athame', SKILLSET.SONGCRAFT, SKILLSET.VITALISM, SKILLSET.WITCHCRAFT);
add('Fatespinner', SKILLSET.SONGCRAFT, SKILLSET.VITALISM, SKILLSET.MALEDICTION);
add('Shaman', SKILLSET.SORCERY, SKILLSET.VITALISM, SKILLSET.WITCHCRAFT);
add('Doomspeaker', SKILLSET.SORCERY, SKILLSET.VITALISM, SKILLSET.MALEDICTION);
add('Blightcaster', SKILLSET.SORCERY, SKILLSET.MALEDICTION, SKILLSET.WITCHCRAFT);
add('Gloomspell', SKILLSET.SORCERY, SKILLSET.SWIFTBLADE, SKILLSET.MALEDICTION);
add('Blightcaster', SKILLSET.VITALISM, SKILLSET.MALEDICTION, SKILLSET.WITCHCRAFT);
add('Arachnomancer', SKILLSET.WITCHCRAFT, SKILLSET.OCCULTISM, SKILLSET.SWIFTBLADE);
add('Twistedshot', SKILLSET.WITCHCRAFT, SKILLSET.ARCHERY, SKILLSET.SWIFTBLADE);
add('Wildmage', SKILLSET.WITCHCRAFT, SKILLSET.SORCERY, SKILLSET.SWIFTBLADE);
add('Fearstalker', SKILLSET.WITCHCRAFT, SKILLSET.SHADOWPLAY, SKILLSET.SWIFTBLADE);
add('Bonechiller', SKILLSET.WITCHCRAFT, SKILLSET.SONGCRAFT, SKILLSET.SWIFTBLADE);
add('Jinxmender', SKILLSET.WITCHCRAFT, SKILLSET.VITALISM, SKILLSET.SWIFTBLADE);
add('Nullweaver', SKILLSET.WITCHCRAFT, SKILLSET.MALEDICTION, SKILLSET.SWIFTBLADE);
add('Hellshield', SKILLSET.DEFENSE, SKILLSET.MALEDICTION, SKILLSET.SWIFTBLADE);
add('Legionnaire', SKILLSET.DEFENSE, SKILLSET.VITALISM, SKILLSET.SWIFTBLADE);
add('Barricade', SKILLSET.DEFENSE, SKILLSET.AURAMANCY, SKILLSET.SWIFTBLADE);
add('Forsaker', SKILLSET.DEFENSE, SKILLSET.OCCULTISM, SKILLSET.SWIFTBLADE);
add('Windsoul', SKILLSET.DEFENSE, SKILLSET.ARCHERY, SKILLSET.SWIFTBLADE);
add('Demolisher', SKILLSET.DEFENSE, SKILLSET.SORCERY, SKILLSET.SWIFTBLADE);
add('Eviscerator', SKILLSET.DEFENSE, SKILLSET.SHADOWPLAY, SKILLSET.SWIFTBLADE);
add('Vanguard', SKILLSET.DEFENSE, SKILLSET.SONGCRAFT, SKILLSET.SWIFTBLADE);
add('Anchorite', SKILLSET.AURAMANCY, SKILLSET.OCCULTISM, SKILLSET.SWIFTBLADE);
add('Realmshifter', SKILLSET.AURAMANCY, SKILLSET.SORCERY, SKILLSET.SWIFTBLADE);
add('Blinkhunter', SKILLSET.AURAMANCY, SKILLSET.ARCHERY, SKILLSET.SWIFTBLADE);
add('Augmentor', SKILLSET.AURAMANCY, SKILLSET.SHADOWPLAY, SKILLSET.SWIFTBLADE);
add('Synergist', SKILLSET.AURAMANCY, SKILLSET.SONGCRAFT, SKILLSET.SWIFTBLADE);
add('Adept', SKILLSET.AURAMANCY, SKILLSET.VITALISM, SKILLSET.SWIFTBLADE);
add('Fatemark', SKILLSET.AURAMANCY, SKILLSET.MALEDICTION, SKILLSET.SWIFTBLADE);
add('Gravebow', SKILLSET.OCCULTISM, SKILLSET.ARCHERY, SKILLSET.SWIFTBLADE);
add('Immortalist', SKILLSET.OCCULTISM, SKILLSET.SHADOWPLAY, SKILLSET.SWIFTBLADE);
add('Breathstealer', SKILLSET.OCCULTISM, SKILLSET.SONGCRAFT, SKILLSET.SWIFTBLADE);
add('Doomcaller', SKILLSET.OCCULTISM, SKILLSET.VITALISM, SKILLSET.SWIFTBLADE);
add('Mindslayer', SKILLSET.OCCULTISM, SKILLSET.MALEDICTION, SKILLSET.SWIFTBLADE);
add('Blastfuse', SKILLSET.OCCULTISM, SKILLSET.SORCERY, SKILLSET.SWIFTBLADE);
add('Windshaper', SKILLSET.ARCHERY, SKILLSET.SORCERY, SKILLSET.SWIFTBLADE);
add('Lightsoul', SKILLSET.ARCHERY, SKILLSET.VITALISM, SKILLSET.SWIFTBLADE);
add('Avatar', SKILLSET.ARCHERY, SKILLSET.SHADOWPLAY, SKILLSET.SWIFTBLADE);
add('Grimshot', SKILLSET.ARCHERY, SKILLSET.MALEDICTION, SKILLSET.SWIFTBLADE);
add('Zephyr', SKILLSET.ARCHERY, SKILLSET.SONGCRAFT, SKILLSET.SWIFTBLADE);
add('Gloomspell', SKILLSET.SORCERY, SKILLSET.MALEDICTION, SKILLSET.SWIFTBLADE);
add('Edgeripper', SKILLSET.SORCERY, SKILLSET.SHADOWPLAY, SKILLSET.SWIFTBLADE);
add('Shroudsong', SKILLSET.SORCERY, SKILLSET.SONGCRAFT, SKILLSET.SWIFTBLADE);
add('Mentalist', SKILLSET.SORCERY, SKILLSET.VITALISM, SKILLSET.SWIFTBLADE);
add('Duskdirge', SKILLSET.SHADOWPLAY, SKILLSET.SONGCRAFT, SKILLSET.SWIFTBLADE);
add('Cryptwalker', SKILLSET.SHADOWPLAY, SKILLSET.MALEDICTION, SKILLSET.SWIFTBLADE);
add('Disciple', SKILLSET.SHADOWPLAY, SKILLSET.VITALISM, SKILLSET.SWIFTBLADE);
add('Deathchord', SKILLSET.SONGCRAFT, SKILLSET.MALEDICTION, SKILLSET.SWIFTBLADE);
add('Dreamspinner', SKILLSET.SONGCRAFT, SKILLSET.VITALISM, SKILLSET.SWIFTBLADE);
add('Reincarnator', SKILLSET.VITALISM, SKILLSET.MALEDICTION, SKILLSET.SWIFTBLADE);

export default classes;
