import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule("0x09F1BC12bB1C513F7832534bA8a11077548ee3AC");

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Glosseta G-Brain",
        description: "This NFT will give you access to GlossetaDAO (🔎, 🧠)",
        image: readFileSync("scripts/assets/glosseta_brain_nft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
