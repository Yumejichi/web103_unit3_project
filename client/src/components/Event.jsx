import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import dates from '../services/dates'

const Event = (event) => {

    // const [event, setEvent] = useState({})
    // // const [time, setTime] = useState([])
    // // const [remaining, setRemaining] = useState([])

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const eventData = await EventsAPI.getEventsById(props.id)
    //             setEvent(eventData)
    //         }
    //         catch (error) {
    //             throw error
    //         }
    //     }) ()
    // }, [props.id])

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const result = await dates.formatTime(event.time)
    //             setTime(result)
    //         }
    //         catch (error) {
    //             throw error
    //         }
    //     }) ()
    // }, [event])

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const timeRemaining = await dates.formatRemainingTime(event.remaining)
    //             setRemaining(timeRemaining)
    //             dates.formatNegativeTimeRemaining(remaining, event.id)
    //         }
    //         catch (error) {
    //             throw error
    //         }
    //     }) ()
    // }, [event])
  const { isPast, months, remainingDays } = dates.getTimeRemaining(event.date)
    return (
        <article className={`event-information`}>
        <img src={event.image} />
        <div className='event-information-overlay'>
            <div className='text'>
                <h3>{event.title}</h3>
                <p><i className="fa-regular fa-calendar fa-bounce"></i> {new
                Date(`${event.date.split('T')[0]}T${event.time}`).toLocaleString('en-US', { month: 'short', day: 'numeric', year:
                'numeric', hour: 'numeric', minute: '2-digit', hour12: true })}</p>
                <p>{isPast
                ? `${months ? `-${months} ${months === 1 ? 'month' : 'months'} ` : ''}${remainingDays ? `-${remainingDays}
            ${remainingDays === 1 ? 'day' : 'days'}` : ''}`
                : `${months ? `${months} ${months === 1 ? 'month' : 'months'} ` : ''}${remainingDays ? `${remainingDays}
            ${remainingDays === 1 ? 'day' : 'days'} ` : ''}`}
            </p>

            </div>
        </div>
    </article>
    )
}

export default Event