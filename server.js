const express = require("express");
const cors = require("cors");
const entry = require("./entry")
const api = require("./api")
const bodyParser = require("body-parser");



const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/",entry)
app.use("/api",api)


// function convertApi(apiString, format) {
//   const endpoint = apiString.split("://")[1];
//   if (!endpoint.includes("/api/")) {
//     throw new Error("Endpoint is not in expected format");
//   }
//   const protocol = apiString.split(":")[0];
//   const host = endpoint.split("/api/")[0];
//   const restEndpoint = `/${endpoint.split("/")[2]}`;

//   switch (format) {
//     case "SOAP":
//       return `<?xml version="1.0" encoding="utf-8"?>
//         <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//           <soap:Body>
//             <${endpoint.split("/")[3]} xmlns="${protocol}://${host}">
//               <!-- request data here -->
//             </${endpoint.split("/")[3]}>
//           </soap:Body>
//         </soap:Envelope>`;
//     case "REST":
//       return `${protocol}://${host}${restEndpoint}`;
//     case "GraphQL":
//       return `query {
//         ${endpoint.split("/")[3]} {
//           # fields to retrieve
//         }
//       }`;
//     default:
//       throw new Error("Invalid format");
//   }
// }



// app.get("/api/clients", async (req, res) => {
//   const clientRef = collection(db, "clients"); //Change to client to whatever you want the collection to
//   const docsSnap = await getDocs(clientRef);
//   docsSnap.forEach((doc) => {
//     console.log(doc.id, "=>", doc.data());
//   });
//   res.send("Console loged data");
//   res.send(convertApi("https://api.github.com/","GraphQl"))
// });

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
