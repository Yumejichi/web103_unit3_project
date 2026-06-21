import pool from '../config/database.js'

const getLocations = async (req, res) => {
    try {
        const locations = await pool.query('SELECT * FROM locations')
        res.status(200).json(locations.rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'server error' })
    }
}


const getLocationById = async (req, res) => {
    const { id } = req.params
    try {
        const location = await pool.query('SELECT * FROM locations WHERE id = $1', [id])
        res.status(200).json(location.rows[0])
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'server error' })
    }
}


export default { getLocations, getLocationById }