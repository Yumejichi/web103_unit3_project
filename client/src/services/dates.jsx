const getTimeRemaining = (date) => {
    const dateOnly = date.split('T')[0]
    const eventDateTime = new Date(dateOnly)
    const now = new Date()
    const timeDifference = eventDateTime - now

    const isPast = timeDifference < 0
    const absDiff = Math.abs(timeDifference)

    const days = Math.floor(absDiff / (1000 * 60 * 60 * 24))
    const months = Math.floor(days / 30)
    const remainingDays = days % 30

    return { isPast, months, remainingDays }
}

export default { getTimeRemaining }