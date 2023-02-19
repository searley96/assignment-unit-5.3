console.log('***** Music Collection *****')

const collection = [];


function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    console.log(album);
    return collection.push(album);

}
addToCollection('Bad Behavior', 'Broncho', 2018);

addToCollection('Blue', 'Joni Mitchell', 1971);
addToCollection('Just Enough Hip to Be a Woman', 'Broncho', 2014);
addToCollection('My Woman', 'Angel Olsen', 2016);
addToCollection('Electric Warrior', 'T.Rex', 1971);
addToCollection('Out of Blue', 'Electric Light Orchestra', 1977);

//console.log(collection);

// function showCollection([]) {
//     console.log(collection.length);
//     for (let i = 0; i < collection.length; i++) {
//         console.log(album.title + 'by' + album.artist + 'published in' + album.yearPublished);

//     }
// }

function showCollection(x) {
    console.log(x.length);
    for (let i = 0; i < x.length; i++) {
        t = collection[i].title;
        a = collection[i].artist;
        y = collection[i].yearPublished;
        console.log(t + ' by ' + a + ', published in ' + y);
    }
}

showCollection(collection);







