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


function findByArtist(artist) {
    resultArray0 = [];
    for (let i = 0; i < collection.length; i++) {
        if (artist === collection[i].artist) {
            resultArray0.push(collection[i]);
        }
    }
    return resultArray0;
}

console.log(findByArtist('Broncho'));
console.log(findByArtist('Joni Mitchell'));
console.log(findByArtist('Derek'));

// function search(artist, year) {
//     resultArray1 = [];
//     if (artist === "" || year === "" || artist.length === 0 || year.length === 0) {
//         return collection;
//     for (let i = 0; i < collection.length; i++) {
//         if (artist === collection[i].artist && year === collection[i].yearPublished) {
//             resultArray1.push(collection[i]);
//         }
//     }
//     return resultArray1;
//     } else {
//         return resultArray1;
//     }
// }
   


// console.log(search("Broncho", ))




//let artist =[]
// let artist = "abc"
//let year = "rdx"
//console.log(artist === "" || year === "" || artist.length === 0 || year.length === 0)







