import React from "react";
import "./Events.css";
import PastEvents from '../../components/PastEvents/PastEvents'

import {getStorage, ref, getDownloadURL, listAll} from "firebase/storage";
import {app} from '../../utils/firebase'

const storage = getStorage(app)

const eventsRef = ref(storage, 'events');

const pastEventPosters = [];
// const upcomingEventPosters = [];

listAll(eventsRef)
  .then((res) => {
    res.items.forEach(itemRef => {
      return getDownloadURL(itemRef).then((url) => {
        pastEventPosters.push(url);
      })
    })
  }).catch(err => console.log(err))

const Events = () => {
  return (
    <div className="wrapper">
      {/*<section className="upcoming-events">
        <div className="title">
          Upcoming & <span className="title-span">Events</span>
        </div>
        <PastEventsSlider slides={upcomingEventPosters}/>
      </section> */}
      <section className="upcoming-events">
        <div className="title">
          Past Events & <span className="title-span">Workshops</span>
        </div>
        <PastEvents slides={pastEventPosters}/>
      </section>
    </div>
  );
};

export default Events;
