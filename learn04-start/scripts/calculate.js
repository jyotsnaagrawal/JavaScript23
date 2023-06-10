function addDate() {
    let today = new Date();
    alert(today)
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
    document.getElementById("rm2length").value = "";
    document.getElementById("rm2width").value = "";
    document.getElementById("rm2height").value = "";
    document.getElementById("rm2cost").value = "";
    document.getElementById("rm3length").value = "";
    document.getElementById("rm3width").value = "";
    document.getElementById("rm3height").value = "";
    document.getElementById("rm3cost").value = "";
}

function estimate() {
    let name = document.getElementById("name").value;
    let selectedRooms = parseInt(document.getElementById("rooms").value);
    let totalCost = 0;

    for (let i = 1; i <= selectedRooms; i++) {
        let length = parseFloat(document.getElementById("rm" + i + "length").value);
        let width = parseFloat(document.getElementById("rm" + i + "width").value);
        let height = parseFloat(document.getElementById("rm" + i + "height").value);
        let totalSqFt = (length * height * 2) + (length * width * 2);
        let cost = totalSqFt * 0.65;
        totalCost += cost;
        document.getElementById("rm" + i + "cost").value = cost;
    }

    document.getElementById("estimate").innerHTML = name + ", your estimate is $" + totalCost;
}

function displayRoomDetails() {
    var roomsSelect = document.getElementById("rooms");
    var selectedRooms = parseInt(roomsSelect.value);

    // Hide all room sections
    var room1 = document.getElementById("room1");
    var room2 = document.getElementById("room2");
    var room3 = document.getElementById("room3");
    room1.style.display = "none";
    room2.style.display = "none";
    room3.style.display = "none";

    // Show selected room sections
    if (selectedRooms >= 1) {
        room1.style.display = "block";
    }
    if (selectedRooms >= 2) {
        room2.style.display = "block";
    }
    if (selectedRooms >= 3) {
        room3.style.display = "block";
    }
}
