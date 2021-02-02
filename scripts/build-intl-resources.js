// combine language json files for each page per language

const fs = require("fs");
const path = require("path");

const intlFolderPath = path.join(__dirname, "../", "src", "intl");

// objects to be written to language json files
const langFiles = {};

fs.readdirSync(intlFolderPath).map((folderName) => {
  const folderPath = path.join(intlFolderPath, folderName);

  if (fs.lstatSync(folderPath).isDirectory()) {
    // create object for language inside of langFiles object based on folder name
    langFiles[folderName] = {};

    fs.readdirSync(folderPath).map((fileName) => {
      const filePath = path.join(folderPath, fileName);

      if (fs.lstatSync(filePath).isFile()) {
        try {
          const fileData = fs.readFileSync(filePath, "utf8");
          const fileDataObj = JSON.parse(fileData);

          // remove file extension
          fileName = fileName.slice(0, fileName.length - 5);

          // create object inside of language object for each page
          langFiles[folderName][fileName] = {};

          // add attribute to language object
          for (key in fileDataObj) {
            langFiles[folderName][fileName][key] = fileDataObj[key];
          }
        } catch (err) {
          console.log(`${err} (${fileName})`);
        }
      }
    });
  }
});

for (lang in langFiles) {
  try {
    fs.writeFileSync(
      path.join(intlFolderPath, lang) + ".json",
      JSON.stringify(langFiles[lang], undefined, 2) + "\n"
    );
  } catch (err) {
    console.log(err);
  }
}
