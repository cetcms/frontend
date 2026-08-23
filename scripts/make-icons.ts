import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

type IconifyJson = {
  icons: Record<string, unknown>;
  info?: unknown;
  aliases?: unknown;
  categories?: unknown;
  suffixes?: unknown;
  lastModified?: unknown;
};

const solarJsonUrl = import.meta.resolve('@iconify/json/json/solar.json');
const solarJsonPath = fileURLToPath(solarJsonUrl);
const solarIcons = JSON.parse(fs.readFileSync(solarJsonPath, 'utf8')) as IconifyJson;

const icons: Record<string, unknown> = {};
for (const iconName in solarIcons.icons) {
  if (iconName.endsWith('-line-duotone')) {
    icons[iconName] = solarIcons.icons[iconName];
  }
}

delete solarIcons.info;
delete solarIcons.aliases;
delete solarIcons.categories;
delete solarIcons.suffixes;
delete solarIcons.lastModified;
solarIcons.icons = icons;

const outputPath = path.resolve(import.meta.dirname, '../src/components/Iconify/icons/solar.json');
fs.writeFileSync(outputPath, JSON.stringify(solarIcons));
