
// Music History Part 2
// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the resources/js-101.js file, which contains an array of strings with song information.

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.

// {Song name} by {Artist} on the album {Album}

// .right_container will contain list of songs. 

/*
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

var contentElement = document.querySelector(".right_container"); 



for (var count=0; songs.length > count; count++){
 
var cleanSongOne = songs[count].replace(/>/g, "-");
var cleanSongTwo = cleanSongOne.replace(/\*|!|@|\(|/g, "");
  
  //console.log(contentElement);

contentElement.innerHTML += "<br>" + cleanSongTwo;

}
*/

var musicList;
var album;
var artist;
var song;

$(document).ready(function() {

    $.ajax({
        url: "music.json"
        }).done(function(music) {
       

 musicList = music; 

   // console.log(musicList.music[0]);
    
    console.log(musicList.music.length); 

   for(var i = 0; i < musicList.music.length; i++){   
   
    var listMusic;


    var output = $(".right_container");
    listMusic = musicList.music[i].album;

    output.html(listMusic);        

    }

   
  //       var output = $(".right_container");
    });


}); 
