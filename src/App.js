import './App.css';

const mainuser = {
    name: 'Hannah Nguyen',
    age: '21',
    university: 'University of Michigan',
}

const buttons = [
    { imgUrl: 'https://wallpapercave.com/wp/oEpySxa.jpg', ishello: false, imagesize: 90, id: 1},
    { imgUrl: 'https://cdn.britannica.com/98/163898-050-B2E2A704/British-sensation-Adele.jpg', ishello: true, imagesize: 90, id: 2},
    { imgUrl: 'https://c4.wallpaperflare.com/wallpaper/662/242/353/katherine-langford-celebrities-girls-actress-wallpaper-preview.jpg', ishello: false, imagesize: 90, id: 3},
    { imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgtwallpaper.org%2Fother%2Fcelebrity-hd-wallpapers&psig=AOvVaw0aCG_M3V7p7fPTo5eONodH&ust=1717142007231000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNil1c7ytIYDFQAAAAAdAAAAABAQ', ishello: false, imagesize: 90, id: 4},
    { imgUrl: 'https://images4.alphacoders.com/248/248358.jpg', ishello: false, imagesize: 90, id: 5},
];

function HelloButton() {
    const listButtons = buttons.map(buttons =>
        <li
            key={buttons.id}
            function handleButton() {
                if (buttons.ishello) {
                    alert("Hello, it's me. You won, but do you?");
                }
                else {
                    if (buttons.id == 1) {
                        alert("When in doubt, look intelligent");
                    }
                    if (buttons.id == 3) {
                        alert("When you look like your passport, it's time to go home");
                    }
                    if (buttons.id == 4) {
                        alert("Do not take life seriously, you won't make it out alive anyway");
                    }
                    if (buttons.id = 5) {
                        alert("This is so skibidi");
                    }
                }
            }
            <img
                src={buttons.imgUrl}
                style={{
                    width: buttons.imagesize,
                    height: buttons.imagesize
                }}
            />
        </li>
    );
    return (
            <button onClick={handleButton}> </button>
    );
}

function HelloWorld() {
  return (
    <>
          <h> Hello everyone. My name is {mainuser.name} </h>
          <p> I am {mainuser.age} and I am studying at {mainuser.university}</p>
          <p> Please have fun </p>
        <div>
            <h1> Hello World </h1>
            <HelloButton/>
        </div>
    </>
  );
}

export default HelloWorld;
