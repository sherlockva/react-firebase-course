import { db } from "../config/firebase-config";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, storage } from "../config/firebase-config";
import { ref, uploadBytes } from "firebase/storage"

export const Crud = () => {
  const [movieList, setMovieList] = useState([]);

  // New Movie States
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDate, setMovieDate] = useState(0);
  const [isMovieOscar, setIsMovieOscar] = useState(false);

  // New File Upload States
  const [uploadFile, setUploadFile] = useState(null);

  const movieCollectionRef = collection(db, "movies");

  const getmovieList = async () => {
    //Read the Data
    //Set the movie List
    try {
      const data = await getDocs(movieCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getmovieList();
  }, []);

  const onSubmitMovie = async () => {
    try {
      addDoc(movieCollectionRef, {
        title: movieTitle,
        releaseDate: movieDate,
        oscar: isMovieOscar,
        userId: auth?.currentUser?.uid,
      });
      setMovieTitle("");
    } catch (err) {
      console.error(err);
      alert("you are logged out. Please login first.");
    }
  };

  const onDeleteMovie = async (id) => {
    try {
      const movieDoc = doc(db, "movies", id);
      deleteDoc(movieDoc);
    } catch (err) {
      console.error(err);
    }
  };

  const fileUpload = async() => {  // to use multiple function from firebase we are using async function
    if(!uploadFile) return;
    else{
      const filesFolderRef = ref(storage, `projectFiles/${uploadFile.name}`);
      try{
        await uploadBytes(filesFolderRef, uploadFile);
      } catch(err){
        console.error(err);
      }

    }
  }

  return (
    <div>
      <div>
        <input
          placeholder="Movie Title"
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release Date"
          onChange={(e) => setMovieDate(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={isMovieOscar}
          onChange={(e) => setIsMovieOscar(e.target.checked)}
        />
        <label>Received an Oscar?</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>

      <br></br>
      <div>
        {movieList.map((movie) => (
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: movie.oscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p>Date: {movie.releaseDate}</p>
            <button onClick={() => onDeleteMovie(movie.id)}>
              Delete Movie
            </button>
          </div>
        ))}
      </div>

      <br></br>

      <div>
        <h4>Upload File</h4>
        <input onChange={(e) => setUploadFile(e.target.files[0])} type="file"/>
        <button onSubmit={fileUpload()}>Upload File</button>
      </div>
    </div>
  );
};
