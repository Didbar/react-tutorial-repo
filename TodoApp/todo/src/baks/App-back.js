import React from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

function App() {
    return (
        <div className=" todo-list">
            <ContactCard contact={{
                imgUrl: "https://www.wallpino.com/images/avatars/393443_thumb.jpg",
                name: "Mr. Kolia",
                email: "kolia@koshka.com",
                phone: "222-222-2222"
            }} />
            <ContactCard contact={{
                imgUrl: "https://www.wallpino.com/images/avatars/423187_thumb.jpg",
                name: "Mr. Murka",
                email: "Murka@koshka.com",
                phone: "333-333-3333"
            }} />
        </div>
    );
}

export default App;
