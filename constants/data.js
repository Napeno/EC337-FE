import { useEffect, useState } from 'react';

const categories = [
    "Hotel",
    "Homestay",
    "Apart",
    "Renthouse",
    "Resort",
    "Villa",
];

const dataLocation = [
    {
        id: 1,
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/LocationPlace%2Fimg1.png?alt=media&token=5e968fb3-c07d-4039-ac6a-1a689b7bf715',
        name: 'The Aston Vill Hotel',
        address: '154 Bach Dang, Ben Nghe, District 1',
        price: '1,000,000 VND',
        stars: '4.8',
        favorite: true
    },

    {
        id: 2,
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/LocationPlace%2F22.png?alt=media&token=eb4c80c2-a306-4e5c-9d94-f1a39f629d33',
        name: 'Montcal Grand',
        address: '287a Pham Ngu Lao, District 1',
        price: '800,000 VND',
        stars: '4.5',
        favorite: false
    },
]

const message = [
    {
        id: 1,
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/Message%2FEllipse%20144.png?alt=media&token=0f9fbda9-80f8-4131-8dc3-d32658858875',
        name: 'Hanh',
        lastMsg: 'May I ask some more information about your apartment?',
        time: '4:45 PM',
        seen: false
    },

    {
        id: 2,
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/Message%2FEllipse%20144%20(1).png?alt=media&token=2ce2fa5b-1088-4be9-aea2-1acff900c2aa',
        name: 'Brian',
        lastMsg: 'Thank you so much. Next time, I will visit your place',
        time: '2:00 PM',
        seen: true
    },

    {
        id: 3,
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/Message%2FEllipse%20144%20(2).png?alt=media&token=b0c5e6dc-f824-4ee8-b15a-ca26b9622e10',
        name: 'Peter',
        lastMsg: 'Okay! I’ll be there soon.',
        time: '4:45 PM',
        seen: true
    },
]

const typeRoom = [
    { label: 'Standard Room', value: '1' },
    { label: 'Double Room', value: '2' },
    { label: 'Family Room', value: '3' },
    { label: 'Studio Room', value: '4' },
    { label: 'Sea View Room', value: '5' },
    { label: 'Suite Room', value: '6' },
    { label: 'Deluxe Room', value: '7' },
    { label: 'Junior Room', value: '8' },
];

export const data = {
    categories,
    dataLocation,
    message,
    typeRoom
}

