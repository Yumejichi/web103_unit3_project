const getEventsById = async (id) => {
    try {
        const response = await fetch(`/api/events/${id}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

const getAllEvents = async () => {
    try {
        const response = await fetch('/api/events')
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

const getAllEventsByLocation = async (locationId) => {
    try {
        const response = await fetch(`/api/events/${locationId}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

export default { 
    getEventsById,
    getAllEvents,
    getAllEventsByLocation
}