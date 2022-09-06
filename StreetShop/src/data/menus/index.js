import React from 'react';
import { People, Lock, Tshirt, Logout } from "../../assets";

export const menus = [
    {
        id: 1,
        nama: 'Edit Profile',
        gambar: <People />,
        halaman: 'EditProfile'
    },
    {
        id: 2,
        nama: 'Change Password',
        gambar: <Lock />,
        halaman: 'ChangePassword'
    },
    {
        id: 3,
        nama: 'History Pemesanan',
        gambar: <Tshirt />,
        halaman: 'History'
    },
    {
        id: 4,
        nama: 'Sign Out',
        gambar: <Logout />,
        halaman: 'Login'
    },
];
