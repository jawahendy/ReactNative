import {
    ChelseaBelakang,
    ChelseaDepan,
    DortmundBelakang,
    DortmundDepan,
    JuveBelakang,
    JuveDepan,
    LeicesterBelakang,
    LeicesterDepan,
    LiverpoolBelakang,
    LiverpoolDepan,
    MadridBelakang,
    MadridDepan,
    MilanBelakang,
    MilanDepan,
    MunchenBelakang,
    MunchenDepan,
    Bundesliga,
    LaLiga,
    PremierLeague,
    SerieA,
} from '../../assets';

export const dummyJerseys = [
    {
        id: 1,
        nama: 'CHELSEA 3RD 2018-2019',
        gambar: [ChelseaDepan, ChelseaBelakang],
        liga: {
            id: 2,
            nama: 'Premier League',
            gambar: PremierLeague,
        },
        harga: 155000,
        berat: 0.25,
        jenis: 'Replika Top Quality',
        ukuran: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 2,
        nama: 'DORTMUND AWAY 2018-2019',
        gambar: [DortmundDepan, DortmundBelakang],
        liga: {
            id: 4,
            nama: 'Bundesliga',
            gambar: Bundesliga,
        },
        harga: 125000,
        berat: 0.25,
        jenis: 'Replika Top Quality',
        ukuran: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 3,
        nama: 'JUVENTUS AWAY 2018-2019',
        gambar: [JuveDepan, JuveBelakang],
        liga: {
            id: 3,
            nama: 'Serie A',
            gambar: SerieA,
        },
        harga: 125000,
        berat: 0.25,
        jenis: 'Replika Top Quality',
        ukuran: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 4,
        nama: 'LEICESTER CITY HOME 2018-2019',
        gambar: [LeicesterDepan, LeicesterBelakang],
        liga: {
            id: 2,
            nama: 'Premier League',
            gambar: PremierLeague,
        },
        harga: 105000,
        berat: 0.25,
        jenis: 'Replika Top Quality',
        ukuran: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 5,
        nama: 'LIVERPOOL AWAY 2018-2019',
        gambar: [LiverpoolDepan, LiverpoolBelakang],
        liga: {
            id: 2,
            nama: 'Premier League',
            gambar: PremierLeague,
        },
        harga: 125000,
        berat: 0.25,
        jenis: 'Replika Top Quality',
        ukuran: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 6,
        nama: 'REAL MADRID 3RD 2018-2019',
        gambar: [MadridDepan, MadridBelakang],
        liga: {
            id: 1,
            nama: 'La Liga',
            gambar: LaLiga,
        },
        harga: 115000,
        berat: 0.25,
        jenis: 'Replika Top Quality',
        ukuran: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 7,
        nama: 'AC MILAN HOME 2018 2019',
        gambar: [MilanDepan, MilanBelakang],
        liga: {
            id: 3,
            nama: 'Serie A',
            gambar: SerieA,
        },
        harga: 145000,
        berat: 0.25,
        jenis: 'Replika Top Quality',
        ukuran: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
    {
        id: 8,
        nama: 'BAYERN MUNCHEN 3RD 2018 2019',
        gambar: [MunchenDepan, MunchenBelakang],
        liga: {
            id: 4,
            nama: 'Bundesliga',
            gambar: Bundesliga,
        },
        harga: 135000,
        berat: 0.25,
        jenis: 'Replika Top Quality',
        ukuran: ["S", "M", "L", "XL", "XXL"],
        ready: true
    },
];
