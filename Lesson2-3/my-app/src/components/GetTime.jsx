import React from 'react'

const GetTime = () => {
    const data = new Date();
    const hours = data.getHours();
    let timeOfDay;
    const styles = {
        fontSize: 20
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "green"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "grey"
    } else {
        timeOfDay = "night"
        styles.color = "red"
    }

    return (
        <h1 style={styles}>Good { timeOfDay}!</h1>
    )
}

export default GetTime
