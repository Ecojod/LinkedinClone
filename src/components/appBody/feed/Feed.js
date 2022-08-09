import React, { useState, useEffect } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from '../../../firebase';
import firebase from "firebase/compat/app"
import { selectUser } from '../../../features/userSlice';
import { useSelector } from 'react-redux/es/exports';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser)
  const [input, setInput] = useState("")
  // Imagine we have bunch of messages in our feed in order to capture that what we gonna say that is post
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timeStamp', 'desc').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = e => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: '',
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }
  return (
    <div className='feed'>
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed-inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
        </div>
      </div>
      {/* +++++++++++ Feed ++++++++++++++++++ */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed