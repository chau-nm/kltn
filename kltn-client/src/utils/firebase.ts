import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJ38G24pc2zzbr5Yfnxs5WIycwi_XxzNg",
  authDomain: "kltn-4d455.firebaseapp.com",
  projectId: "kltn-4d455",
  storageBucket: "kltn-4d455.appspot.com",
  messagingSenderId: "354018432220",
  appId: "1:354018432220:web:c8e32f3c9396fe0faa9019",
  measurementId: "G-96XKSDS8ZM"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);


export const uploadFileToFirebase = async (file: File): Promise<string> => {
  try {
    const storageRef = ref(storage, `${Date.now()}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    throw error;
  }
};
