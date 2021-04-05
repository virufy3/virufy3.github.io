// confirm that the different localizations have consistent structures and that all keys match

const fs = require("fs");
const path = require("path");

const intlFolderPath = path.join(__dirname, "../", "src", "intl");

let template;
function hasConsistentLocale(localeJSON, fileName) {
  // If no template exists, use the current localeJSON
  if (typeof template === "undefined") {
    template = localeJSON;
    return true;
  }

  // Otherwise check that the current localeJSON matches the template
  return keysAreEqual(template, localeJSON, fileName.replace(".json", ""));
}

function logWarning(typePrefix, location, property, message) {
  console.log(`[${typePrefix}] ${location}.${property} - ${message}.`);
}

function keysAreEqual(obj1, obj2, location) {
  // Use a flag instead of short-circuiting so that inconsistencies are logged for all keys
  let areEqual = true;

  // Forward comparison
  for (p in obj1) {
    switch (typeof obj1[p]) {
      case "object":
        if (typeof obj2[p] === "undefined") {
          areEqual = false;
          logWarning("-", location, p, "missing locale information");
        } else if (typeof obj2[p] !== "object") {
          areEqual = false;
          logWarning(
            "!",
            location,
            p,
            `key should be an object. Found ${typeof obj2[p]}`
          );
        } else if (!keysAreEqual(obj1[p], obj2[p], `${location}.${p}`)) {
          areEqual = false;
        }
        break;
      case "string":
        // If the other object has a property that is not a string
        if (typeof obj2[p] === "undefined") {
          areEqual = false;
          logWarning("-", location, p, "missing locale information");
        } else if (typeof obj2[p] !== "string") {
          areEqual = false;
          logWarning(
            "!",
            location,
            p,
            `key should be a string. Found ${typeof obj2[p]}`
          );
        }
        break;
      default:
        throw new Error("Locale files should be entirely objects or strings.");
    }
  }

  // Backward
  for (p in obj2) {
    if (typeof obj1[p] === "undefined") {
      logWarning("+", location, p, "extra locale information");
      areEqual = false;
    }
  }

  return areEqual;
}

const consistentLocalization = fs
  .readdirSync(intlFolderPath)
  .filter((fileName) => fileName != ".DS_Store")
  .map((fileName) => {
    const filePath = path.join(intlFolderPath, fileName);

    if (fs.lstatSync(filePath).isFile()) {
      try {
        const fileData = fs.readFileSync(filePath, "utf8");
        const fileDataObj = JSON.parse(fileData);

        return hasConsistentLocale(fileDataObj, fileName);
      } catch (err) {
        console.log(`${err} (${fileName})`);
        return false;
      }
    }

    return true;
  })
  // Use every after the map because `every` will short-circuit which is not the desired behavior
  .every((consistent) => consistent);

if (!consistentLocalization) {
  console.log("\n" + new Array(80).fill("-").join("") + "\n");
  throw new Error("Localization was not consistent between JSON files.");
}
