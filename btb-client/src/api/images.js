
import imageCompression from "browser-image-compression";

export async function compressImage(imageFile) {

  const options = {
    maxSizeMB: .75,
    maxWidthOrHeight: 1920
  }
  
  return new Promise(async (resolve, reject) => {
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log(compressedFile.size/1024/1024);
      resolve(compressedFile);
    } catch (error) {
      console.log(error);
      resolve(null);
    }
  })

}
