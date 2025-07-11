export async function getAssetFileURL(assetFile) {
  try {
    const response = await fetch("assets.json");
    const assetsDirectory = "assets/";
    const assetsInfo = await response.json();
    let url = assetsInfo[assetFile].url;
    if (window.sparkLocalAssets || true) { // Always use local assets in standalone
      url = `${assetsDirectory}${assetsInfo[assetFile].directory}/${assetFile}`;
    }
    return url;
  } catch (error) {
    console.error("Failed to load asset file URL:", error);
    return null;
  }
}
