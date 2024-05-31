import "./App.css";

const mainuser = {
  name: "Hannah Nguyen",
  age: "21",
  university: "University of Michigan",
};

const buttons = [
  {
    imgUrl: "https://wallpapercave.com/wp/oEpySxa.jpg",
    ishello: false,
    imagesize: 90,
    id: 1,
  },
  {
    imgUrl:
      "https://cdn.britannica.com/98/163898-050-B2E2A704/British-sensation-Adele.jpg",
    ishello: true,
    imagesize: 90,
    id: 2,
  },
  {
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/662/242/353/katherine-langford-celebrities-girls-actress-wallpaper-preview.jpg",
    ishello: false,
    imagesize: 90,
    id: 3,
  },
  {
    imgUrl:
      "https://www.format.com/wp-content/uploads/kawai-matthews-kanye-west-1.jpg",
    ishello: false,
    imagesize: 90,
    id: 4,
  },
  {
    imgUrl: "https://images4.alphacoders.com/248/248358.jpg",
    ishello: false,
    imagesize: 90,
    id: 5,
  },
];

function HelloButton() {
  const handleButton = (button) => {
    if (button.ishello) {
      alert("Hello, it's me. You won, but do you?");
    } else {
      if (button.id === 1) {
        alert("When in doubt, look intelligent");
      }
      if (button.id === 3) {
        alert("When you look like your passport, it's time to go home");
      }
      if (button.id === 4) {
        alert("Do not take life seriously, you won't make it out alive anyway");
      }
      if (button.id === 5) {
        alert("This is so skibidi");
      }
    }
  };

  return (
    <ul>
      {buttons.map((button) => (
        <li key={button.id}>
          <button onClick={() => handleButton(button)}>
            <img
              src={button.imgUrl}
              style={{
                width: button.imagesize,
                height: button.imagesize,
              }}
              alt="button"
            />
          </button>
        </li>
      ))}
    </ul>
  );
}

function HelloWorld() {
  return (
    <>
      <h1>Hello everyone. My name is {mainuser.name}</h1>
      <p>
        I am {mainuser.age} and I am studying at {mainuser.university}
      </p>
      <p>Please have fun</p>
      <div>
        <h1>Hello World</h1>
        <HelloButton />
      </div>
    </>
  );
}

export default HelloWorld;
