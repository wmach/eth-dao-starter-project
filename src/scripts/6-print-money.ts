import sdk from "./1-initialize-sdk.js";

// これは、前のステップで取得した私たちの ERC-20 コントラクトのアドレスです。
//const token = sdk.getContract("0x0166614A5F65A7F1930c7Ef584305f1c071A275e", "token");
const token = sdk.getContract("0x587D7a11c39a998Ed861De0d342c0fAD05057Ce9", "token");

(async () => {
  try {
    // // 設定したい最大供給量を設定
    const amount = 1000000;
    // デプロイされた ERC-20 コントラクトを通して、トークンをミント
    await (await token).mint(amount);
    const totalSupply = await (await token).totalSupply();

    // 今、私たちのトークンがどれだけあるかを表示
    console.log(
      "✅ There now is",
      totalSupply.displayValue,
      "$CFF in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
