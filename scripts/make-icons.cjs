const solarIcons = require('@iconify/json/json/solar.json');
const fs = require("node:fs");
const path = require("node:path");

const icons = {}
for (let iconsKey in solarIcons.icons) {
  if (iconsKey.endsWith('-line-duotone')) {
    icons[iconsKey] = solarIcons.icons[iconsKey];
  }
}
delete solarIcons.info;
delete solarIcons.aliases;
delete solarIcons.categories;
delete solarIcons.suffixes;
delete solarIcons.lastModified;
solarIcons.icons = icons;

const solarPath = path.resolve(__dirname, "../src/components/Iconify/icons/solar.json");
fs.writeFileSync(solarPath, JSON.stringify(solarIcons))