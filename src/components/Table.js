import React from 'react'

const Table = ({ restaurants }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>City</td>
                    <td>State</td>
                    <td>Telephone</td>
                    <td>Genre</td>
                </tr>
            </thead>
            <tbody>
                {
                    restaurants.map((restaurant, i ) => (
                        <tr key={i}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.city}</td>
                            <td>{restaurant.state}</td>
                            <td>{restaurant.telephone}</td>
                            <td>{restaurant.genre}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table
