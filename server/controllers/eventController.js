import pool from '../config/database.js'

const getEvents = async (req, res) => {
    try {
        const events = await pool.query('SELECT * FROM events')
        res.json(events.rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

const getEventsByLocation = async (req, res) => {
    const locationId = req.params.locationId
    try {
        const events = await pool.query('SELECT * FROM events WHERE location_id = $1', [locationId])
        res.status(200).json(events.rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'server error' })
    }
}

export  default { 
    getEvents,
    getEventsByLocation
}