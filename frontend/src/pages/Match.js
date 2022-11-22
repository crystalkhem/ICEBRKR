import React, { useState, useMemo, useEffect, useRef } from "react";
import TinderCard from "react-tinder-card";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ThumbDownIcon from "@material-ui/icons/ThumbDown";
// import Button from "@material-ui/core/Button";
import "./Match.css";

// const db = [
//   {
//     name: "Random Guy",
//     url: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
//     description: "lorem ipsum",
//   },
//   {
//     name: "Short guy",
//     url: "https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg",
//     description: "lorem ipsum",
//   },
//   {
//     name: "Test guy",
//     url: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
//     description: "lorem ipsum",
//   },
// ];

const alreadyRemoved = [];
// let peopleState = db;

const Match = () => {

  
  
  const [users, setUsers] = useState(null)
  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:4000/api/user/all-users')
      const json = await response.json()
      
      if (response.ok) {
        setUsers(json)
      }
    }
    
    fetchUsers()
  }, [])
  
  const [currentIndex, setCurrentIndex] = useState(users?.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(users?.length)
        .fill(0)
        .map((i) => React.createRef()),
    [users]
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }
  const canSwipe = currentIndex >= 0

  const swipe = (dir) => {
    const cardsLeft = users.filter(
      (user) => !alreadyRemoved.includes(user.firstName)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].firstName;
      const index = users.map((user) => user.firstName).indexOf(toBeRemoved);
      alreadyRemoved.push(toBeRemoved);
      childRefs[index].current.swipe(dir);
    }
  };

  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <div className="align_buttons">
      <h1>Match</h1>
      <div className="card_container">
        {users && users.map((user, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={user.firstName}
            onSwipe={(dir) => swiped(dir, user.firstName, index)}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: 'url(' + user.image + ')' }}
              className="card"
            >
              <h3>{user.firstName}</h3>
              <h4 style={{ bottom: "30px" }}>Email: {user.email}</h4>
              <h4 style={{ bottom: "10px" }}>Bio: I am fuckin Awesome</h4>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="swipe_Buttons">
        <button style={{backgroundColor: '#AF3E4D'}}
        //   startIcon={<ThumbDownIcon />}
          onClick={() => swipe("left")}
        >
          Freeze
        </button>
        <button
        //   startIcon={<FavoriteIcon />}
          onClick={() => swipe("right")}
        >
          Break
        </button>
      </div>
      {/* <button variant="contained" onClick={handleClick}>View Profile</button> */}
    </div>
  );
};

export default Match;
