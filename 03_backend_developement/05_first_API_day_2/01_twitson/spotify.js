const request = require("request");

// faire la cde "export" dans le terminal pour ramener la clé en variable globale
// la cde "process" permet ensuite de lire cette valeur globale
const spotifyId = process.env.spotifyId;
const spotifySecret = process.env.spotifySecret;


/* ceci fonctionne en ligne de commande :
curl -X "POST" -H "Authorization: Basic YzBhY2JkMGFjYzI0NDU0MTkzZDlkMDk2MDdjMWJkZTA6OTQ3NTBjYmZmYjQwNGY4Y2I4ODYyZGJkNjUwNWY1NWQ=" -d grant_type=client_credentials https://accounts.spotify.com/api/token
*/

let spotifyToken;

function getToken(){
  // console.log(spotifyId+":"+spotifySecret);
  const clientSecretEncoded = new Buffer(spotifyId + ":" +spotifySecret).toString("base64");

  const headers = {"Authorization": `Basic ${clientSecretEncoded}`};
  // console.log( headers );


  request(
    {
      url: "https://accounts.spotify.com/api/token",
      method: "POST",
      headers: headers,
      form: {"grant_type" : "client_credentials"}
    },
    function(error, response, result) {
      // console.log (result );
      spotifyToken= JSON.parse(result).access_token;
      // console.log( `token à utiliser = ${spotifyToken}` );


      // genesis = 3CkvROUTQ6nRi9yQOcsB50
      // pink floyd = 0k17h0D3J5VfsdmQ1iZtE9
      searchAlbumsArtist("3CkvROUTQ6nRi9yQOcsB50");

    }
  );




}

function searchAlbumsArtist(artistId){

  const headers = {"Authorization": `Bearer ${spotifyToken}`};
  // console.log( headers );
  return request(
    {
      url: `https://api.spotify.com/v1/artists/${artistId}/albums?album_type=album&market=FR&limit=50`,
      method: "GET",
      headers: headers,
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      // console.log("result:", result); // Print the HTML for the Google homepage.

      const reponseJSON = JSON.parse(result);
      // console.log( reponseJSON.items );

      // rechercher le detail de chaque album
      reponseJSON.items.map(searchAlbum);



    }
  );

}

function searchAlbum(album){
  const headers = {"Authorization": `Bearer ${spotifyToken}`};
  // console.log( headers );
  return request(
    {
      url: `https://api.spotify.com/v1/albums/${album.id}`,
      method: "GET",
      headers: headers,
    },
    function(error, response, result) {
      // console.log("error:", error); // Print the error if one occurred
      // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      // console.log("result:", result); // Print the HTML for the Google homepage.

      const reponseAlbumJSON = JSON.parse(result);
      // console.log( reponseAlbumJSON.popularity );

      displayAlbumDetail(reponseAlbumJSON);



    }
  );
}

function displayAlbumDetail(album){

  console.log( `album : ${album.id} - ${album.release_date} - ${album.popularity} -  ${album.name}` );

}

getToken();
