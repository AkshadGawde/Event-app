import { Fragment } from 'react';
import { useRouter } from 'next/router.js';
import {getAllEvents} from '../../dummy-data.js';
import EventList from '../components/events/event-list';
import EventsSearch from '@/components/events/event-search.js';

function AllEventPage (){
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month){
    const fullPath = '/events/${year}/${month}';
    router.push(fullPath);

  }

    return (
      <Fragment>
        <EventsSearch onSearch={findEventHandler} />
        <EventList items = {events}/>
        </Fragment>
    );
  
  
  }
  
  export default AllEventPage;