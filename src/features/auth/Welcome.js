import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {

    const date = new Date()

    const today = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Xin chao</h1>
            <h1>Web & Database</h1>

            <p><Link to="/dash/notes">Note</Link></p>
            <p><Link to="/dash/notes/new">Them note</Link></p>

            <p><Link to="/dash/users">Nhan vien</Link></p>
            <p><Link to="/dash/users/new">Them nhan vien</Link></p>

        </section>
    )

    return content
}
export default Welcome