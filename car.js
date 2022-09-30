canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
roverWidth = 100
roverHeight = 90
roverX = 10
roverY = 10
ArrayNasa = ["https://img.freepik.com/premium-vector/car-parking-top-view-cartoon-empty-street-road-vector-illustration_543062-1482.jpg?w=2000", "https://img.freepik.com/premium-vector/car-parking-top-view-cartoon-empty-street-road-vector-illustration_543062-1482.jpg?w=2000", "https://img.freepik.com/premium-vector/car-parking-top-view-cartoon-empty-street-road-vector-illustration_543062-1482.jpg?w=2000", "https://img.freepik.com/premium-vector/car-parking-top-view-cartoon-empty-street-road-vector-illustration_543062-1482.jpg?w=2000"]
RandomNumber = Math.floor(Math.random() * 4)
backgroundImage = ArrayNasa[RandomNumber]
roverImage = "https://media.istockphoto.com/vectors/retro-car-vector-id1202536880?k=20&m=1202536880&s=612x612&w=0&h=4XfPgG3QImX4q4g1_iYcoKgLYks8hxkbjizp9NxaS9E="

function add() {
    bgImg = new Image()
    bgImg.onload = uploadBackground
    bgImg.src = backgroundImage

    roverImg = new Image()
    roverImg.onload = uploadRover
    roverImg.src = roverImage
}

function uploadBackground() {
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height)
}

function uploadRover() {
    ctx.drawImage(roverImg, roverX, roverY, roverWidth, roverHeight)

}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    var keyPressed = e.keyCode
    console.log(keyPressed)
    if (keyPressed == 37) {
        left()
        console.log("left key is pressed")
    }
    if (keyPressed == 38) {
        up()
        console.log("up key is pressed")
    }
    if (keyPressed == 39) {
        right()
        console.log("right key is pressed")
    }
    if (keyPressed == 40) {
        down()
        console.log("down key is pressed")
    }
}

function up() {
    if (roverY >= 0) {
        roverY = roverY -10
        console.log("up arrow is pressed!,x=" + roverX + ",y=" + roverY)
        uploadBackground()
        uploadRover()
    }


}


function down() {
    if (roverY<=500 ) {
        roverY = roverY + 10
        console.log("down arrow is pressed!,x=" + roverX + ",y=" + roverY)
        uploadBackground()
        uploadRover()
    }


}


function    left() {
    if (roverX >= 0) {
        roverX = roverX - 10
        console.log("left arrow is pressed!,x=" + roverX + ",y=" + roverY)
        uploadBackground()
        uploadRover()
    }



}



function right() {
    if (roverX <= 700) {
        roverX = roverX + 10
        console.log("right arrow is pressed!,x=" + roverX + ",y=" + roverY)
        uploadBackground()
        uploadRover() 

    }
}