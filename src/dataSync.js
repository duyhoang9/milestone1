import fs from "fs/promises"; // Use fs.promises for asynchronous file operations
import Data from "./Data.js"; // Specify the file extension

const filePath = "./Data.js";

const readFile = async (filePath) => {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return fileContent;
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    throw error;
  }
};

const writeFile = async (filePath, data) => {
  try {
    await fs.writeFile(filePath, data);
    console.log(`File "${filePath}" updated successfully.`);
  } catch (error) {
    console.error(`Error writing file: ${error.message}`);
    throw error;
  }
};

const updateArray = async () => {
  // read the content of the text file
  const fileContent = await readFile("weather_log.txt");

  // split the content into lines
  const lines = fileContent.split("\n");

  // process each line and append to the existing array
  lines.forEach((line) => {
    const [wdate, wtime, wtemp, whumid, wpressure] = line.split(/\s+/);

    // check if data with the same wdate already exists in the array
    const existingDataIndex = Data.findIndex(
      (item) => item.wdate === `${wdate} ${wtime || ""}`
    );

    if (existingDataIndex === -1) {
      // data with the same wdate doesn't exist, so add it to the array
      Data.push({
        wdate: `${wdate} ${wtime || ""}`, // Combine date and time, handle empty time
        wtemp,
        whumid,
        wpressure,
      });
    } else {
      // data with the same wdate already exists, you can choose to update or skip it
      console.log(
        `Data with wdate ${wdate} ${wtime || ""} already exists. Skipping...`
      );
    }
  });

  // convert the array to a string
  const updatedDataString = `const Data = ${JSON.stringify(Data, null, 2)};\n`;

  // add a custom line to the end of the string
  const customLine = "// This is a custom line added to the end of the file.";
  const finalUpdatedDataString = `${updatedDataString}\n${"export default Data;"}\n`;

  // write the updated array back to the file
  await writeFile("Data.js", finalUpdatedDataString);
};

// Run the updateArray function
updateArray();

//  old stuff

/*import { readFileSync } from "fs";

import { Data } from "./Data.js";

// Read the content of the text file
const fileContent = readFileSync("weather_log.txt", "utf-8");

// Split the content into lines
const lines = fileContent.split("\n");

// Process each line and create an array of objects
const dataArray = lines.map((line) => {
  const [wdate, wtime, wtemp, whumid, wpressure] = line.split(/\s+/);

  // Create an object with attributes
  Data.push({
    wdate: `${wdate} ${wtime || ""}`,
    wtemp,
    whumid,
    wpressure,
  });
});

console.log(Data);*/
