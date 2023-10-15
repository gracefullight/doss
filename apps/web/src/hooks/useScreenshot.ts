import html2canvas from "html2canvas";
import { useState } from "react";

// ? https://github.com/vre2h/use-react-screenshot/blob/master/src/index.js
export default function useScreenshot() {
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);

  const takeScreenShot = async (node: HTMLElement | null) => {
    if (!node) {
      throw new Error("You should provide correct html node.");
    }

    try {
      const canvas = await html2canvas(node, { backgroundColor: null });
      const croppedCanvas = document.createElement("canvas");
      const croppedCanvasContext = croppedCanvas.getContext("2d");

      const cropPositionTop = 0;
      const cropPositionLeft = 0;
      const cropWidth = canvas.width;
      const cropHeight = canvas.height;

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeight;

      croppedCanvasContext?.drawImage(
        canvas,
        cropPositionLeft,
        cropPositionTop,
      );

      const imageBlob = await new Promise<Blob | null>((resolve) =>
        croppedCanvas.toBlob(resolve),
      );
      setImageBlob(imageBlob);

      return imageBlob;
    } catch (error) {
      console.error(error);
      setImageBlob(null);
      return null;
    }
  };

  return [imageBlob, takeScreenShot] as const;
}
