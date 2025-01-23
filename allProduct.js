// initial code 

"use strict"
console.clear() ;

// main code 

let mobile = [
    {
        name: "iPhone 13",
        id: "mob1",
        price: 15000
    },
    {
        name: "Samsung S23",
        id: "mob2",
        price: 23000
    },
    {
        name: "Xiaomi Note 12",
        id: "mob3",
        price: 18000
    },
    {
        name: "OnePlus 11R",
        id: "mob4",
        price: 22000
    },
    {
        name: "Realme 60",
        id: "mob5",
        price: 17000
    },
    {
        name: "Vivo V29e",
        id: "mob6",
        price: 20000
    },
    {
        name: "Google Pixel 7",
        id: "mob7",
        price: 32000
    },
    {
        name: "Asus ROG Phone 7",
        id: "mob8",
        price: 45000
    },
    {
        name: "Oppo Reno 10",
        id: "mob9",
        price: 21000
    },
    {
        name: "Nokia XR21",
        id: "mob10",
        price: 16000
    },
    {
        name: "Motorola Edge 40",
        id: "mob11",
        price: 19000
    },
    {
        name: "Honor Magic 5",
        id: "mob12",
        price: 26000
    },
    {
        name: "Sony Xperia 1 V",
        id: "mob13",
        price: 50000
    },
    {
        name: "Huawei P60 Pro",
        id: "mob14",
        price: 29000
    },
    {
        name: "Lava Blaze 5G",
        id: "mob15",
        price: 14000
    }
];

let camera = [
    {
        name: "Canon EOS R5",
        id: "cam1",
        price: 350000
    },
    {
        name: "Nikon Z7 II",
        id: "cam2",
        price: 270000
    },
    {
        name: "Sony A7 IV",
        id: "cam3",
        price: 240000
    },
    {
        name: "Fujifilm X-T5",
        id: "cam4",
        price: 170000
    },
    {
        name: "Olympus E-M1 III",
        id: "cam6",
        price: 130000
    },
    {
        name: "Leica Q2",
        id: "cam7",
        price: 450000
    },
    {
        name: "DJI Pocket 2",
        id: "cam9",
        price: 35000
    },
    {
        name: "Sigma fp L",
        id: "cam12",
        price: 230000
    },
    {
        name: "Blackmagic Pocket",
        id: "cam14",
        price: 250000
    },
    {
        name: "Polaroid Now+",
        id: "cam15",
        price: 25000
    }
];

let home = [
    {
        name: "BedSheet",
        id: "home1",
        price: 60000
    },
    {
        name: "BedSheet",
        id: "home2",
        price: 45000
    },
    {
        name: "Curtain",
        id: "home3",
        price: 12000
    },
    {
        name: "Curtain",
        id: "home4",
        price: 75000
    },
    {
        name: "Curtain",
        id: "home5",
        price: 55000
    },
    {
        name: "Shoe Rack",
        id: "home6",
        price: 15000
    },
    {
        name: "Shoe Rack",
        id: "home7",
        price: 90000
    },
    {
        name: "Papos",
        id: "home8",
        price: 11000
    },
    {
        name: "Papos",
        id: "home9",
        price: 4000
    },
    {
        name: "Filter stand",
        id: "home10",
        price: 20000
    },
    {
        name: "Freez",
        id: "home12",
        price: 3500
    },
    {
        name: "Light",
        id: "home13",
        price: 3000
    },
    {
        name: "Electric ketli",
        id: "home14",
        price: 40000
    },
    {
        name: "Electric heater",
        id: "home15",
        price: 8000
    }
];

let kid = [
    {
        name: "LEGO Brick Set",
        id: "kid1",
        price: 2500
    },
    {
        name: "LEGO dress",
        id: "kid2",
        price: 1500
    },
    {
        name: "Barbie Set",
        id: "kid3",
        price: 10000
    },
    {
        name: "NERF Elite ",
        id: "kid4",
        price: 4000
    },
    {
        name: "Fisher Baby",
        id: "kid5",
        price: 5000
    },
    {
        name: "Crayola Art",
        id: "kid6",
        price: 2000
    },
    {
        name: "Disney Plush",
        id: "kid11",
        price: 1800
    },
    {
        name: "Disney dress",
        id: "kid14",
        price: 2500
    },
    {
        name: "NERF Disney",
        id: "kid15",
        price: 4500
    }
];

let man = [
    {
        name: "Aviator pant",
        id: "man1",
        price: 12000
    },
    {
        name: "Nike pant",
        id: "man2",
        price: 8000
    },
    {
        name: "Levi's Fit Jeans",
        id: "man3",
        price: 15000
    },
    {
        name: "Tommy Shirt",
        id: "man4",
        price: 3000
    },
    {
        name: "Hilfiger Shirt",
        id: "man5",
        price: 2000
    },
    {
        name: "Adidas T-Shirt",
        id: "man6",
        price: 2500
    },
    {
        name: "Sports T-Shirt",
        id: "man7",
        price: 1800
    },
    {
        name: "Fossil T-Shirt",
        id: "man8",
        price: 1500
    },
    {
        name: "Woodland Hiking",
        id: "man9",
        price: 6000
    },
    {
        name: "Woodland jacket",
        id: "man10",
        price: 3500
    },
    {
        name: "Allen Formal jacket",
        id: "man11",
        price: 2500
    },
    {
        name: "Panjabi",
        id: "man12",
        price: 3000
    },
    {
        name: "Jack panjabi",
        id: "man13",
        price: 4000
    },
    {
        name: "Avenue Shirt",
        id: "man14",
        price: 1200
    },
    {
        name: "Formal Shirt",
        id: "man15",
        price: 25000
    }
];

let woman = [
    {
        name: "Fit Foundation",
        id: "wom1",
        price: 750
    },
    {
        name: "Lakme",
        id: "wom2",
        price: 250
    },
    {
        name: "Fossil Women's",
        id: "wom3",
        price: 12000
    },
    {
        name: "Floral Dress",
        id: "wom4",
        price: 3000
    },
    {
        name: "Zara Handbag",
        id: "wom5",
        price: 5000
    },
    {
        name: "Nike Zara Floral Women's ",
        id: "wom6",
        price: 8000
    },
    {
        name: "Tanishq",
        id: "wom7",
        price: 50000
    },
    {
        name: "L'Oreal Serum",
        id: "wom8",
        price: 600
    },
    {
        name: "MAC Lipstick",
        id: "wom9",
        price: 1500
    },
    {
        name: "Forever Top",
        id: "wom10",
        price: 1200
    },
    {
        name: "Calvin",
        id: "wom11",
        price: 25000
    },
    {
        name: "Calvin Jeans",
        id: "wom12",
        price: 4000
    },
    {
        name: "Silk Saree",
        id: "wom13",
        price: 7000
    },
    {
        name: "Biba Kurta",
        id: "wom14",
        price: 2500
    },
    {
        name: "Clovia Set",
        id: "wom15",
        price: 1800
    }
];

let medicine = [
    {
        name: "Napa",
        id: "med1",
        price: 50
    },
    {
        name: "MoniMix",
        id: "med2",
        price: 120
    },
    {
        name: "Monas",
        id: "med3",
        price: 80
    },
    {
        name: "Ace",
        id: "med4",
        price: 30
    },
    {
        name: "FimoXYL",
        id: "med5",
        price: 100
    },
    {
        name: "Sergel",
        id: "med6",
        price: 150
    },
    {
        name: "Tufnil",
        id: "med7",
        price: 200
    },
    {
        name: "Etorix",
        id: "med8",
        price: 120
    },
    {
        name: "Xink",
        id: "med9",
        price: 50
    },
    {
        name: "Tofen",
        id: "med10",
        price: 150
    },
    {
        name: "Alatrol",
        id: "med11",
        price: 90
    },
    {
        name: "Lctogen",
        id: "med12",
        price: 40
    },
    {
        name: "Toracef",
        id: "med13",
        price: 180
    },
    {
        name: "Doxiva",
        id: "med14",
        price: 60
    },
    {
        name: "Cef-3",
        id: "med15",
        price: 250
    }
];

let computer = [
    {
        name: "m15 R6",
        id: "com10",
        price: 280000
    },
    {
        name: "LG Gram",
        id: "com11",
        price: 150000
    },
    {
        name: "Samsung Galaxy",
        id: "com12",
        price: 130000
    },
    {
        name: "Google Go",
        id: "com13",
        price: 100000
    },
    {
        name: "Huawei Pro",
        id: "com14",
        price: 170000
    },
    {
        name: "Apple s23",
        id: "com15",
        price: 200000
    }
];




