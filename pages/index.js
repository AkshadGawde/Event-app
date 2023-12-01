import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import EventSearch from '@/components/events/event-search';
import { Fragment } from 'react';

function HomePage (){

  const featuredEvents = getFeaturedEvents();

  return (
   <Fragment>

        <EventSearch />
        <EventList items={featuredEvents} />
    
    </Fragment>
  )


}

export default HomePage;