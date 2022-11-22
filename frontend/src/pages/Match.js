import React, { useState, useMemo, useEffect, useRef } from "react";
import TinderCard from "react-tinder-card";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ThumbDownIcon from "@material-ui/icons/ThumbDown";
// import Button from "@material-ui/core/Button";
import "./Match.css";
import { useAuthContext } from "../hooks/useAuthContext";

const alreadyRemoved = [];
// let peopleState = db;

const Match = () => {
  const { user } = useAuthContext()

    const [users, setUsers] = useState(null)


    useEffect(() => {
      
        const fetchUsers = async () => {
          console.log(user.id, user.categories)
          let link = null
          if (user.categories === 'sports') {
             link = 'http://localhost:4000/api/user/getSports/' + user.id
          } else if (user.categories === 'movies') {
             link = 'http://localhost:4000/api/user/getMovies/' + user.id
          } else if (user.categories === 'music') {
             link = 'http://localhost:4000/api/user/getMusic/' + user.id
          }
            const response = await fetch(link)
            const json = await response.json()

            if (response.ok) {
                setUsers(json)
            }
        }

        fetchUsers()
    }, [])


  const childRefs = useMemo(
    () =>
      Array(users?.length)
        .fill(0)
        .map((i) => React.createRef()),
    [users]
  );


  // const updateCurrentIndex = (val) => {
  //   setCurrentIndex(val)
  //   currentIndexRef.current = val
  // }

  // const swiped = (direction, nameToDelete, index) => {
  //   setLastDirection(direction)
  //   updateCurrentIndex(index - 1)
  // }
  // const canSwipe = currentIndex >= 0

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
            // onSwipe={(dir) => swiped(dir, user.firstName, index)}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: 'url(' + user.image + ')' }}
              className="card"
            >
              <h3>{user.firstName}</h3>
              <h4 style={{ bottom: "30px" }}>Email: {user.email}</h4>
              <h4 style={{ bottom: "10px" }}>Bio: I am Awesome</h4>
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
