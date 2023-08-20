//Zeke 2023

/* Michael Jackson's Discography:
- Got to Be There (1972), 10 songs
- Ben (1972), 10 songs
- Music & Me (1973), 10 songs
- Forever, Michael (1975), 10 songs
- Off the Wall (1979), 10 songs
- Thriller (1982), 9 songs
- Bad (1987), 10 songs (bonus song on CD realease aka 11 songs)
- Dangerous (1991), 14 songs
- HIStory: Past, Present and Future, Book 1 (1995), 30 songs (15 on each Disc)
- Invincible (2001), 16 songs
*/

let id = 0;

document.getElementById('add').addEventListener('click', () => { //adding data with a click
    let table = document.getElementById('list');
    let row = table.insertRow(1); //starting at 1 since 0 has already been taken by headers
    row.setAttribute('id', `item-${id}`);
    //creating rows for each column/header used
    row.insertCell(0).innerHTML = document.getElementById('new-album-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-release-year').value;
    row.insertCell(2).innerHTML = document.getElementById('new-number-songs').value;

    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++)); //each row that gets added will have its own id. When clicked, it'll say which id is deleted in the console
    document.getElementById('new-album-name').value = ''; //clearing the different input boxes soon as after an input has been submitted
    document.getElementById('new-release-year').value = '';
    document.getElementById('new-number-songs').value = '';
});

//Creating the Actions Function, which will delete each row of task based on their id
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => { //instead of using event listener, using onclick here
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}