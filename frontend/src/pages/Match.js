import React, { useState, useMemo, useEffect } from "react";
import TinderCard from "react-tinder-card";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ThumbDownIcon from "@material-ui/icons/ThumbDown";
// import Button from "@material-ui/core/Button";
import "./Match.css";

const db = [
  {
    name: "Random Guy",
    url: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
    description: "lorem ipsum",
  },
  {
    name: "Short guy",
    url: "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
    description: "lorem ipsum",
  },
  {
    name: "Test guy",
    url: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    description: "lorem ipsum",
  },
];

const alreadyRemoved = [];
let peopleState = db;

const Match = () => {

    // const [users, setUsers] = useState(null)

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const response = await fetch('http://localhost:4000/api/user/all-users')
    //         const json = await response.json()

    //         if (response.ok) {
    //             setUsers(json)
    //         }
    //     }

    //     fetchUsers()
    // }, [])

    // console.log(users)

  const [people, setPeople] = useState(db);

  const childRefs = useMemo(
    () =>
      Array(db?.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swipe = (dir) => {
    const cardsLeft = people.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name;
      const index = db.map((person) => person.name).indexOf(toBeRemoved);
      alreadyRemoved.push(toBeRemoved);
      childRefs[index].current.swipe(dir);
    }
  };

  return (
    <div>
      <div className="card_container">
        {people.map((person, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: "img" }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="swipe_Buttons">
        <button
          variant="contained"
          color="secondary"
        //   startIcon={<ThumbDownIcon />}
          onClick={() => swipe("left")}
        >
          Freeze
        </button>
        <button
          variant="contained"
          color="primary"
        //   startIcon={<FavoriteIcon />}
          onClick={() => swipe("right")}
        >
          Break
        </button>
      </div>
      <button variant="contained">View Profile</button>
    </div>
  );
};

export default Match;
