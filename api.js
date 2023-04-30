const express = require("express");
const { setDoc } = require("firebase/firestore");
const router = express.Router

const initializeApp = require("firebase/app").initializeApp;
const getFirestore = require("firebase/firestore").getFirestore;
const collection = require("firebase/firestore").collection;
const doc = require("firebase/firestore").doc;
const getDocs = require("firebase/firestore").getDocs;

const firebaseConfig = {
  apiKey: "AIzaSyDEay3inzNHh5VEKWvObbICHpgM9jRtZPU",
  authDomain: "hacknuthon-7ef2e.firebaseapp.com",
  projectId: "hacknuthon-7ef2e",
  storageBucket: "hacknuthon-7ef2e.appspot.com",
  messagingSenderId: "214841840008",
  appId: "1:214841840008:web:63aa40bb8ef8b435a1aa3d",
  measurementId: "G-Q48P52CJZN",
};

const firebase = initializeApp(firebaseConfig)
const db= getFirestore(firebase)

router.use((req, res, next) => {
  const time = new Date();
  console.log(
      `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${
          req.method
      } ${req.url}`
  );
  next();
});

router.get("/client/get", async(req,res)=>{
  const ID = req.url.split("/")[3]
  if(!ID){
    res.json({error : "Client ID not provided"})
    return;
  }
  const clientRef = collection(db, "clients",ID); //Change to client to whatever you want the collection to
  const docsSnap = await getDocs(clientRef);
  if (docsSnap.exists()){
    res.json({data : docsSnap.data()})
  }
  else{
    res.json({error: "ID not found"})
  }
   
})

router.post("/client/post", async(req,res)=>{
  const body = req.body;
  console.log("some posted to client")
  if (!body){
    res.json({error : "No parser provided"});
    return;
  }
  const allDocs = await collection(db,"clients");
  const allDocsSnap = await getDocs(allDocs);
  const data = allDocsSnap.docs.length;
  console.log("Total data:", data)
  await setDoc(doc(db,"clients",(data+1).toString()), body)
  res.json({
    clientID : data+1,
    message : "Data written successfully to the database",
    data : body,
  })
})

module.exports=router