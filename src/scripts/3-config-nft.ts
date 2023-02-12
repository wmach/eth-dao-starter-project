import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// 先ほどメモして残していた editionDrop のコントラクトアドレスをこちらに記載してください
const editionDrop = sdk.getContract("0x0166614A5F65A7F1930c7Ef584305f1c071A275e", "edition-drop");

(async () => {
  try {
    await (await editionDrop).createBatch([
      {
        name: "Member's Limited Sauna Hat",
        description:
          "code for free にアクセスすることができる限定アイテムです",
        image: readFileSync("src/scripts/assets/cf2logo.svg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
