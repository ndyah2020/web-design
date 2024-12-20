// khởi tạo list sản phẩm
let listProducts =
    localStorage.getItem("listProducts") ? JSON.parse(localStorage.getItem("listProducts"))
        : [
            {
                id: 1,
                name: "Acer Nitro 5",
                img: "./asset/images/Product_Gaming/Acer/Acer_Nitro_5.webp",
                rate: 5.0,
                brand: "Acer",
                type: "Gaming",
                model: [
                    {
                        cpu: "i5-13420H",
                        price: 20000000

                    },
                    {
                        cpu: "i7-13700H",
                        price: 25000000
                    },
                ]
            },
            {
                id: 2,
                name: "Laptop ASUS Gaming ViviBook K3605ZU-RP296W",
                img: "./asset/images/Product_Gaming/ASUS/Laptop ASUS Gaming ViviBook K3605ZU-RP296W.webp",
                rate: 5.0,
                brand: "ASUS",
                type: "Gaming",
                model: [
                    {
                        cpu: "i5-12500H",
                        price: 20000000

                    },
                ]
            },
            {
                id: 3,
                name: "Laptop Dell Vostro 3520",
                price: 18000000,
                img: "./asset/images/Product_VP/Dell/Laptop Dell Vostro 3520.webp",
                rate: 4.0,
                brand: "Dell",
                type: "Office",
                model: [
                    {
                        cpu: "i7-1255U",
                        price: 18000000

                    },
                ]
            },
            {
                id: 4,
                name: "Laptop ASUS Gaming VivoBook K3605ZC-RP564W",
                img: "./asset/images/Product_Gaming/ASUS/Laptop ASUS Gaming VivoBook K3605ZC-RP564W.webp",
                rate: 5.0,
                brand: "ASUS",
                type: "Gaming",
                model: [
                    {
                        cpu: "i5-12500H",
                        price: 21000000

                    },
                ]
            },
            {
                id: 5,
                name: "Laptop ASUS ROG Zephyrus G16 GA605WI-QR090WS",
                img: "./asset/images/Product_VP/ASUS/Laptop ASUS ROG Zephyrus G16 GA605WI-QR090WS.webp",
                rate: 4.0,
                brand: "ASUS",
                type: "Office",
                model: [
                    {
                        cpu: "R9-HX370",
                        price: 26500000
                    },
                ]
            },
            {
                id: 6,
                name: "Laptop ASUS TUF Gaming A15 FA506NC-HN011W",
                img: "./asset/images/Product_Gaming/ASUS/Laptop ASUS TUF Gaming A15 FA506NC-HN011W.webp",
                rate: 5.0,
                brand: "ASUS",
                type: "Gaming",
                model: [
                    {
                        cpu: "R7-7535HS",
                        price: 20000000

                    },
                ]
            },
            {
                id: 7,
                name: "Laptop Gaming Acer Nitro 5 Tiger AN515-58-50D2",
                img: "./asset/images/Product_Gaming/Acer/Laptop Gaming Acer Nitro 5 Tiger AN515-58-50D2.webp",
                rate: 5.0,
                brand: "Acer",
                type: "Gaming",
                model: [
                    {
                        cpu: "i5-12500H",
                        price: 22990000

                    },
                    {
                        cpu: "i7-12700H",
                        price: 21790000

                    },
                ]
            },
            {
                id: 8,
                name: "Laptop Lenovo IdeaPad Slim 3 14IAH8 83EQ0009VN",
                img: "./asset/images/Product_VP/Lenovo/Laptop Lenovo IdeaPad Slim 3 14IAH8 83EQ0009VN.webp",
                rate: 5.0,
                brand: "Lenovo",
                type: "Office",
                model: [
                    {
                        cpu: "i5-12450H",
                        price: 15290000

                    },
                    {
                        cpu: "i7-13620H",
                        price: 18000000

                    },
                ]
            },
            {
                id: 9,
                name: "Laptop Acer Aspire 3 A315-59-381E",
                img: "./asset/images/Product_VP/Acer/Laptop Acer Aspire 3 A315-59-381E.webp",
                rate: 4.0,
                brand: "Acer",
                type: "Office",
                model: [
                    {
                        cpu: "i3-1215U",
                        price: 9490000

                    },
                    {
                        cpu: "R7-5700U",
                        price: 11990000

                    },
                ]
            },
            {
                id: 10,
                name: "Laptop ASUS TUF Gaming A15 FA506NF-HN005W",
                img: "./asset/images/Product_Gaming/ASUS/Laptop ASUS TUF Gaming A15 FA506NF-HN005W.webp",
                rate: 5.0,
                brand: "ASUS",
                type: "Gaming",
                model: [
                    {
                        cpu: "R5-7535HS",
                        price: 16000000

                    },
                    {
                        cpu: "R7-7435HS",
                        price: 21000000

                    },
                ]
            },
            {
                id: 11,
                name: "Laptop MSI Cyborg 15 A12UCX-281VN",
                img: "./asset/images/Product_Gaming/MSI/Laptop MSI Cyborg 15 A12UCX-281VN.webp",
                rate: 5.0,
                brand: "MSI",
                type: "Gaming",
                model: [
                    {
                        cpu: "i5-12450H",
                        price: 15490000

                    },
                ]
            },
            {
                id: 12,
                name: "Laptop Lenovo Legion 5 16IRX9-83DG004YVN",
                img: "./asset/images/Product_Gaming/Lenovo/Laptop Lenovo Gaming Legion 5 16IRX9 83DG004YVN.webp",
                rate: 5.0,
                brand: "Lenovo",
                type: "Gaming",
                model: [
                    {
                        cpu: "i7-13650HX",
                        price: 39990000

                    },
                ]
            },
            {
                id: 13,
                name: "Laptop ASUS ROG Strix G16 G614JU-N3135W",
                img: "./asset/images/Product_Gaming/Asus/Laptop ASUS ROG Strix G16 G614JU-N3135W.webp",
                rate: 5.0,
                brand: "ASUS",
                type: "Gaming",
                model: [
                    {
                        cpu: "i5-13450HX",
                        price: 29990000

                    },
                ]
            },
            {
                id: 14,
                name: "Laptop Acer Gaming Aspire 5 A515-58GM-53PZ",
                img: "./asset/images/Product_Gaming/Acer/Laptop Acer Gaming Aspire 5 A515-58GM-53PZ.webp",
                rate: 4.0,
                brand: "Acer",
                type: "Gaming",
                model: [
                    {
                        cpu: "i5-13420H",
                        price: 15490000

                    },
                ]
            },
            {
                id: 15,
                name: "Laptop Acer gaming Aspire 7 A715-76G-73FM",
                img: "./asset/images/Product_Gaming/Acer/Laptop Acer gaming Aspire 7 A715-76G-73FM.webp",
                rate: 4.0,
                brand: "Acer",
                type: "Gaming",
                model: [
                    {
                        cpu: "i7-12650H",
                        price: 17790000

                    },
                    {
                        cpu: "i5-12450H",
                        price: 18490000

                    },

                ]
            },
            {
                id: 16,
                name: "Laptop Lenovo LOQ 15IAX9 83GS001RVN",
                img: "./asset/images/Product_Gaming/Lenovo/Laptop Lenovo LOQ 15IAX9 83GS001RVN.webp",
                rate: 5.0,
                brand: "Lenovo",
                type: "Gaming",
                model: [
                    {
                        cpu: "i5-12450HX",
                        price: 21490000

                    },
                    {
                        cpu: "R5-7235HS",
                        price: 20990000

                    },
                    {
                        cpu: "i7-13650HX",
                        price: 32990000

                    },
                ]
            },
            {
                id: 17,
                name: "Laptop MSI Gaming Thin 15 B13UC-1411VN",
                img: "./asset/images/Product_Gaming/MSI/Laptop MSI Gaming Thin 15 B13UC-1411VN.webp",
                rate: 5.0,
                brand: "MSI",
                type: "Gaming",
                model: [
                    {
                        cpu: "i7-13620H",
                        price: 18990000

                    },
                    {
                        cpu: "i5-12450H",
                        price: 15490000

                    },
                ]
            },
            {
                id: 18,
                name: "Laptop MSI Gaming Bravo 15 C7VFK-275VN",
                img: "./asset/images/Product_Gaming/MSI/Laptop MSI Gaming Bravo 15 C7VFK-275VN.webp",
                rate: 5.0,
                brand: "MSI",
                type: "Gaming",
                model: [
                    {
                        cpu: "R7-7735HS",
                        price: 24490000

                    },
                    {
                        cpu: "R5-7535HS",
                        price: 15490000

                    },
                ]
            },
            {
                id: 19,
                name: "Laptop Acer Aspire 5 Spin 14 A5SP14-51MTN-78JHZ",
                img: "./asset/images/Product_VP/Acer/Laptop Acer Aspire 5 Spin 14 A5SP14-51MTN-78JH.webp",
                rate: 5.0,
                brand: "Acer",
                type: "Office",
                model: [
                    {
                        cpu: "i7-1355U",
                        price: 16990000

                    },
                ]
            },
            {
                id: 20,
                name: "Laptop ASUS Vivobook S 15 S5507QA-MA089WS Copilot+ X Elite",
                img: "./asset/images/Product_VP/Asus/Laptop ASUS Vivobook S 15 S5507QA-MA089WS Copilot+ X Elite.webp",
                rate: 5.0,
                brand: "ASUS",
                type: "Office",
                model: [
                    {
                        cpu: "Snapdragon X1E 78 100",
                        price: 32990000

                    },
                ]
            },
            {
                id: 21,
                name: "Laptop ASUS Vivobook 15 X1504ZA-NJ582W",
                img: "./asset/images/Product_VP/Asus/Laptop ASUS Vivobook 15 X1504ZA-NJ582W.webp",
                rate: 5.0,
                brand: "ASUS",
                type: "Office",
                model: [
                    {
                        cpu: "i3-1215U",
                        price: 10190000

                    },
                    {
                        cpu: "i3-1315U",
                        price: 10690000

                    },
                    {
                        cpu: "i5-1335U",
                        price: 15790000

                    },
                ]
            },
            {
                id: 22,
                name: "Laptop Dell Inspiron 15 3520 6HD73",
                img: "./asset/images/Product_VP/Dell/Laptop Dell Inspiron 15 3520 6HD73.webp",
                rate: 4.0,
                brand: "Dell",
                type: "Office",
                model: [
                    {
                        cpu: "i7-1255U",
                        price: 17990000

                    },
                    {
                        cpu: "i5-1235U",
                        price: 13990000

                    },
                ]
            },
            {
                id: 23,
                name: "Laptop Dell Latitude 5550 71047019",
                img: "./asset/images/Product_VP/Dell/Laptop Dell Latitude 5550 71047019.webp",
                rate: 5.0,
                brand: "Dell",
                type: "Office",
                model: [
                    {
                        cpu: "U7-165U",
                        price: 31490000

                    },
                ]
            },
            {
                id: 24,
                name: "Laptop Dell Inspiron 7506-5903SLV",
                img: "./asset/images/Product_VP/Dell/Laptop Dell Inspiron 7506-5903SLV.webp",
                rate: 5.0,
                brand: "Dell",
                type: "Office",
                model: [
                    {
                        cpu: "i5-1135G7",
                        price: 17990000

                    },
                ]
            },
            {
                id: 25,
                name: "Laptop Dell Inspiron 5425",
                img: "./asset/images/Product_VP/Dell/Laptop Dell Inspiron 5425.webp",
                rate: 5.0,
                brand: "Dell",
                type: "Office",
                model: [
                    {
                        cpu: "R5-5625U",
                        price: 18000000

                    },
                ]
            },
            {
                id: 26,
                name: "Laptop Lenovo ThinkPad E14 GEN 5 21JK00H5VN",
                img: "./asset/images/Product_VP/Lenovo/Laptop Lenovo ThinkPad E14 GEN 5 21JK00H5VN.webp",
                rate: 5.0,
                brand: "Lenovo",
                type: "Office",
                model: [
                    {
                        cpu: "i5-13420H",
                        price: 19490000

                    },
                ]
            },
            {
                id: 27,
                name: "Laptop Lenovo IdeaPad Flex 5 14IAU7 82R700JQVN",
                img: "./asset/images/Product_VP/Lenovo/Laptop Lenovo IdeaPad Flex 5 14IAU7 82R700JQVN.webp",
                rate: 4.0,
                brand: "Lenovo",
                type: "Office",
                model: [
                    {
                        cpu: "i3-1215U",
                        price: 11490000

                    },
                    {
                        cpu: "i5-1235U",
                        price: 16990000

                    },
                ]
            },
            {
                id: 28,
                name: "Laptop Lenovo Yoga Slim 7 14IMH9 83CV001UVN",
                img: "./asset/images/Product_VP/Lenovo/Laptop Lenovo Yoga Slim 7 14IMH9 83CV001UVN.webp",
                rate: 5.0,
                brand: "Lenovo",
                type: "Office",
                model: [
                    {
                        cpu: "U7-155H",
                        price: 29990000

                    },
                ]
            },
            {
                id: 29,
                name: "Laptop Lenovo Yoga 9 2IN1 14IMH9 83AC000SVN",
                img: "./asset/images/Product_VP/Lenovo/Laptop Lenovo Yoga 9 2IN1 14IMH9 83AC000SVN.webp",
                rate: 5.0,
                brand: "Lenovo",
                type: "Office",
                model: [
                    {
                        cpu: "U7-155H",
                        price: 43990000

                    },
                ]
            },
            {
                id: 30,
                name: "Laptop Lenovo ThinkBook 14 G6 ABP 21KJ005HVN",
                img: "./asset/images/Product_VP/Lenovo/Laptop Lenovo ThinkBook 14 G6 ABP 21KJ005HVN.webp",
                rate: 5.0,
                brand: "Lenovo",
                type: "Office",
                model: [
                    {
                        cpu: "R7-7730U",
                        price: 18490000

                    },
                    {
                        cpu: "i5-13420H",
                        price: 17990000

                    },
                    {
                        cpu: "i7-1355U",
                        price: 20490000

                    },
                ]
            },
        ]


let listOrders = localStorage.getItem("listOrders") ? JSON.parse(localStorage.getItem("listOrders"))
    : [
        {
            id: 1,
            userId: 2,
            email: "nguyenduyanhh2020@gmail.com",
            nameCustomer: "Nguyễn Duy Anh",
            check: 0,
            order: [
                {
                    id: "LapTop-3-i7-1255U",
                    name: "Laptop Dell Vostro 3520",
                    price: 18000000,
                    cpu: "i7-1255U",
                    img: "./asset/images/Product_VP/Dell/Laptop Dell Vostro 3520.webp",
                    brand: "Dell",
                    type: "Office",
                    quantity: 1
                },
                {
                    id: "LapTop-2-i5-12500H",
                    name: "Laptop ASUS Gaming ViviBook K3605ZU-RP296W",
                    price: 20000000,
                    cpu: "i5-12500H",
                    img: "./asset/images/Product_Gaming/ASUS/Laptop ASUS Gaming ViviBook K3605ZU-RP296W.webp",
                    brand: "ASUS",
                    type: "Gaming",
                    quantity: 1
                }
            ],
            time: "12/13/2024, 5:27:39 PM"
        },
        {
            id: 2,
            userId: 3,
            email: "john.doe@example.com",
            nameCustomer: "John Doe",
            check: 1,
            order: [
                {
                    id: "LapTop-1-i5-13420H",
                    name: "Acer Nitro 5",
                    price: 20000000,
                    cpu: "i5-13420H",
                    img: "./asset/images/Product_Gaming/Acer/Acer_Nitro_5.webp",
                    brand: "Acer",
                    type: "Gaming",
                    quantity: 2
                },
                {
                    id: "LapTop-1-i7-13700H",
                    name: "Acer Nitro 5",
                    price: 25000000,
                    cpu: "i7-13700H",
                    img: "./asset/images/Product_Gaming/Acer/Acer_Nitro_5.webp",
                    brand: "Acer",
                    type: "Gaming",
                    quantity: 1
                }
            ],
            time: "12/14/2024, 3:15:25 PM"
        },
        {
            id: 3,
            userId: 4,
            email: "janedoe@example.com",
            nameCustomer: "Jane Doe",
            check: 0,
            order: [
                {
                    id: "LapTop-9-i3-1215U",
                    name: "Laptop Acer Aspire 3 A315-59-381E",
                    price: 9490000,
                    cpu: "i3-1215U",
                    img: "./asset/images/Product_VP/Acer/Laptop Acer Aspire 3 A315-59-381E.webp",
                    brand: "Acer",
                    type: "Office",
                    quantity: 1
                },
                {
                    id: "LapTop-9-R7-5700U",
                    name: "Laptop Acer Aspire 3 A315-59-381E",
                    price: 11990000,
                    cpu: "R7-5700U",
                    img: "./asset/images/Product_VP/Acer/Laptop Acer Aspire 3 A315-59-381E.webp",
                    brand: "Acer",
                    type: "Office",
                    quantity: 2
                }
            ],
            time: "12/15/2024, 9:05:43 AM"
        },
        {
            id: 4,
            userId: 5,
            email: "michael.jones@example.com",
            nameCustomer: "Michael Jones",
            check: 1,
            order: [
                {
                    id: "LapTop-3-i7-1255U",
                    name: "Laptop Dell Vostro 3520",
                    price: 18000000,
                    cpu: "i7-1255U",
                    img: "./asset/images/Product_VP/Dell/Laptop Dell Vostro 3520.webp",
                    brand: "Dell",
                    type: "Office",
                    quantity: 1
                }
            ],
            time: "12/16/2024, 4:50:30 PM"
        },
        {
            id: 5,
            userId: 6,
            email: "alice.smith@example.com",
            nameCustomer: "Alice Smith",
            check: 1,
            order: [
                {
                    id: "LapTop-2-i5-12500H",
                    name: "Laptop ASUS Gaming ViviBook K3605ZU-RP296W",
                    price: 20000000,
                    cpu: "i5-12500H",
                    img: "./asset/images/Product_Gaming/ASUS/Laptop ASUS Gaming ViviBook K3605ZU-RP296W.webp",
                    brand: "ASUS",
                    type: "Gaming",
                    quantity: 1
                }
            ],
            time: "12/17/2024, 11:20:12 AM"
        },
        {
            id: 6,
            userId: 7,
            email: "steven.wilson@example.com",
            nameCustomer: "Steven Wilson",
            check: 0,
            order: [
                {
                    id: "LapTop-1-i7-13700H",
                    name: "Acer Nitro 5",
                    price: 25000000,
                    cpu: "i7-13700H",
                    img: "./asset/images/Product_Gaming/Acer/Acer_Nitro_5.webp",
                    brand: "Acer",
                    type: "Gaming",
                    quantity: 1
                }
            ],
            time: "12/18/2024, 2:40:18 PM"
        },
        {
            id: 7,
            userId: 8,
            email: "susan.davis@example.com",
            nameCustomer: "Susan Davis",
            check: 0,
            order: [
                {
                    id: "LapTop-3-i7-1255U",
                    name: "Laptop Dell Vostro 3520",
                    price: 18000000,
                    cpu: "i7-1255U",
                    img: "./asset/images/Product_VP/Dell/Laptop Dell Vostro 3520.webp",
                    brand: "Dell",
                    type: "Office",
                    quantity: 2
                }
            ],
            time: "12/19/2024, 7:15:00 AM"
        },
        {
            id: 8,
            userId: 9,
            email: "robert.johnson@example.com",
            nameCustomer: "Robert Johnson",
            check: 1,
            order: [
                {
                    id: "LapTop-1-i5-13420H",
                    name: "Acer Nitro 5",
                    price: 20000000,
                    cpu: "i5-13420H",
                    img: "./asset/images/Product_Gaming/Acer/Acer_Nitro_5.webp",
                    brand: "Acer",
                    type: "Gaming",
                    quantity: 1
                }
            ],
            time: "12/20/2024, 3:10:40 PM"
        },
        {
            id: 9,
            userId: 10,
            email: "linda.martin@example.com",
            nameCustomer: "Linda Martin",
            check: 1,
            order: [
                {
                    id: "LapTop-9-i3-1215U",
                    name: "Laptop Acer Aspire 3 A315-59-381E",
                    price: 9490000,
                    cpu: "i3-1215U",
                    img: "./asset/images/Product_VP/Acer/Laptop Acer Aspire 3 A315-59-381E.webp",
                    brand: "Acer",
                    type: "Office",
                    quantity: 1
                }
            ],
            time: "12/21/2024, 9:30:50 AM"
        },
        {
            id: 10,
            userId: 11,
            email: "emily.white@example.com",
            nameCustomer: "Emily White",
            check: 0,
            order: [
                {
                    id: "LapTop-2-i5-12500H",
                    name: "Laptop ASUS Gaming ViviBook K3605ZU-RP296W",
                    price: 20000000,
                    cpu: "i5-12500H",
                    img: "./asset/images/Product_Gaming/ASUS/Laptop ASUS Gaming ViviBook K3605ZU-RP296W.webp",
                    brand: "ASUS",
                    type: "Gaming",
                    quantity: 2
                }
            ],
            time: "12/22/2024, 12:45:12 PM"
        },
    ];

let dataUsers = JSON.parse(localStorage.getItem("DataUsers"));
let login = JSON.parse(localStorage.getItem("currentLogin"));

//Lưu mảng vào localStore để các file js khác có thể sử dụng không cần coppy sang
if (!localStorage.getItem("listProducts")) {
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
}

if (!localStorage.getItem("listOrders")) {
    localStorage.setItem("listOrders", JSON.stringify(listOrders));
}
// lọc sản phẩm theo hãng
let acerProducts = [],
    asusProducts = [],
    lenovoProducts = [],
    msiProducts = [],
    dellProducts = [];

// lọc sản phẩm theo loại
let gamingProducts = [],
    officeProducts = [];

function fillProducts() {
    listProducts.forEach(function (product) {
        if (product.brand === "Acer") {
            acerProducts.push(product);
        }
        else if (product.brand === "ASUS") {
            asusProducts.push(product);
        }
        else if (product.brand === "Lenovo") {
            lenovoProducts.push(product);
        }
        else if (product.brand === "MSI") {
            msiProducts.push(product);
        }
        else if (product.brand === "Dell") {
            dellProducts.push(product);
        }
        if (product.type === "Gaming") {
            gamingProducts.push(product);
        }
        else if (product.type === "Office") {
            officeProducts.push(product);
        }
    })
}

fillProducts();


// render sản phẩm theo loại, hãng

var acerBtn = document.querySelector(".btn-acer");
var asusBtn = document.querySelector(".btn-asus");
var lenovoBtn = document.querySelector(".btn-lenovo");
var msiBtn = document.querySelector(".btn-msi");
var dellBtn = document.querySelector(".btn-dell");
var gamingBtn = document.querySelector(".btn-gaming");
var officeBtn = document.querySelector(".btn-office");

acerBtn.addEventListener("click", function () {
    getProduct(acerProducts);
    renderPageNumber(acerProducts, perPage);
    handleMoveButton();
});

asusBtn.addEventListener("click", function () {
    getProduct(asusProducts);
    renderPageNumber(asusProducts, perPage);
    handleMoveButton();
});

lenovoBtn.addEventListener("click", function () {
    getProduct(lenovoProducts);
    renderPageNumber(lenovoProducts, perPage);
    handleMoveButton();
});

msiBtn.addEventListener("click", function () {
    getProduct(msiProducts);
    renderPageNumber(msiProducts, perPage);
    handleMoveButton();
});

dellBtn.addEventListener("click", function () {
    getProduct(dellProducts);
    renderPageNumber(dellProducts, perPage);
    handleMoveButton();
});
if (gamingBtn) {
    gamingBtn.addEventListener("click", function () {
        getProduct(gamingProducts);
        renderPageNumber(gamingProducts, perPage);
        handleMoveButton();
    });
}
if (officeBtn) {
    officeBtn.addEventListener("click", function () {
        getProduct(officeProducts);
        renderPageNumber(officeProducts, perPage);
        handleMoveButton();
    });
}



// phân trang
var currentPage = 1,
    perPage = 8,
    totalPage = 0;

function renderProduct(products) {
    var productList = document.querySelector(".list-show-product");
    if (productList) {
        productList.innerHTML = "";

        products.forEach(function (product) {
            var productSection = document.createElement("div");
            productSection.classList.add("cart");
            var formattedPrice = product.model[0].price.toLocaleString("vi-VN") + "đ";

            productSection.innerHTML = `
                <div class="wrap-img-cart">
                    <img src="${product.img}" alt="${product.name}" class="img-cart" 
                    onclick="window.location = './details.html?id=${product.id}'"/>
                </div>
                <h3 class="title">${product.name}</h3>
                <span class="brand">${product.brand}</span>
                <span class="type">${product.type}</span>
                <div class="row">
                    <span class="price">${formattedPrice}</span>
                    <div class="row-price-star">
                        <img src="./asset/images/main-star.svg" alt="" class="star" />
                        <span class="star-num">${product.rate}</span>
                    </div>
                </div>
            `;

            productList.appendChild(productSection);
        })
    }
    // cartHover();
}

let perProduct = [];
function getProduct(arr) {
    perProduct = arr.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
    );
    renderProduct(perProduct);
}

getProduct(listProducts);
//
function renderPageNumber(arr, perPage) {
    totalPage = Math.ceil(arr.length / perPage);
    const pagination = document.querySelector(".pagination-ul");
    if (pagination) {
        pagination.innerHTML = ""

        document.querySelector(".pagination-ul").innerHTML += `
        <a href="#recommend">
            <li class="move-btn move-prev" onclick="prevPage()"><</li>
        </a>
    `;

        for (let i = 1; i <= totalPage; i++) {
            document.querySelector(".pagination-ul").innerHTML += `
            <a href="#recommend">
                <li class="list-index li${i}" onclick="activePageIndex(event, ${i})">${i}</li>
            </a>
        `;
        }

        document.querySelector(".pagination-ul").innerHTML += `
        <a href="#recommend">
            <li class="move-btn move-next" onclick="nextPage()">></li>
        </a>
    `;

        document.querySelector(".li1").classList.add("active");

        // if (totalPage > 1) {
        //     document.querySelector(".li1").classList.add("active");
        // } else if (totalPage <= 1) {
        //     document.querySelector(".li1").style.display = "none";
        // }
    }
}

let currentProductList = listProducts;

function handleMoveButton() {
    let prevBtn = document.querySelector(".move-prev");
    let nextBtn = document.querySelector(".move-next");

    if (prevBtn && nextBtn) {
        if (totalPage === 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            return;
        }

        if (currentPage === 1) {
            prevBtn.style.display = 'none';
        }
        else {
            prevBtn.style.display = 'block';
        }

        if (currentPage === totalPage) {
            nextBtn.style.display = 'none';
        }
        else {
            nextBtn.style.display = 'block';
        }
    }
}

function activePageIndex(event, num) {
    let listPageIndex = document.querySelectorAll(".list-index");
    for (l of listPageIndex) {
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentPage = num;

    getProduct(currentProductList);
    handleMoveButton();
}

function prevPage() {
    let listPageIndex = document.querySelectorAll(".list-index");
    if (currentPage > 1) {
        for (l of listPageIndex) {
            l.classList.remove("active");
        }
        currentPage = currentPage - 1;
        listPageIndex[currentPage - 1].classList.add("active");
        getProduct(currentProductList);
        handleMoveButton();
    }
}

function nextPage() {
    let listPageIndex = document.querySelectorAll(".list-index");
    if (currentPage < totalPage) {
        for (l of listPageIndex) {
            l.classList.remove("active");
        }
        currentPage = currentPage + 1;
        listPageIndex[currentPage - 1].classList.add("active");
        getProduct(currentProductList);
        handleMoveButton();
    }
}

renderPageNumber(listProducts, perPage);
handleMoveButton();

// Hiển thị và đóng about
const showAndCloseAbout = () => {
    const btnOpenAbout = document.getElementById('aboutLink')
    const btnCloseAbout = document.querySelector('.btn-close-about')
    const showAbout = document.querySelector('.popup').classList

    btnOpenAbout.addEventListener('click', function () {
        showAbout.add('active')
    })

    btnCloseAbout.addEventListener('click', function () {
        showAbout.remove('active')
    })
}



//_________________________Chuyển động banner_______________________//
// Khai báo phần tử
const slides = document.querySelectorAll(".slide"); // Chứa tất cả phần tử của class slide
const btnLeft = document.querySelector(".btn-left"); // Nút điều hướng
const btnRight = document.querySelector(".btn-right"); // Nút điều hướng
const dotContainer = document.querySelector(".dots"); // Chứa nút để chỉ thị và điều khiển slide

let curSlide = 0; // Biến vị trí hiện tại của slide đầu tiên

const goToSlide = function (slide) { // Dịch chuyển silde
    slides.forEach( // Lặp qua các slide 
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`) // Slide hiện tại sẽ có vị trí 0%, slide tiếp theo là 100%, và slide trước đó là -100%
    );
};

const nextSlide = function () { // Chuyển sang slide tiếp theo
    if (curSlide === slides.length - 1) { // Kiểm tra xem slide ở vị trí cuối cùng
        curSlide = 0; // Đặt vị trí 0
    } else {
        curSlide++; // Nếu không tăng 1
    }
    goToSlide(curSlide); // Cập nhật vị trí hiện tại
    activateDot(curSlide); // Cập nhật dot của slide hiện tại.
};
const prevSlide = function () { // Quay lại slide trước đó hoạt động ngược lại với nextSlide
    if (curSlide == 0) {
        curSlide = slides.length - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
};
// Nhấn quay lại slide
if (btnRight && btnRight) {
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);
}

// Nhấn mũi tên của bàn phím để chuyển qua lại slide
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
});
// Dot
const createDots = function () { //Tạo các dot tương ứng với số lượng slide
    slides.forEach(function (_, i) { // Lặp qua slide và tạo dot
        dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>` // Gán giá trị để xác định vị trí tương ứng
        );
    });
};
const activateDot = function (slide) { // Đánh dấu dot tương ứng với slide đang hiển thị
    document.querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active")); // Lặp qua các dot và loại bỏ class

    document
        .querySelector(`.dots__dot[data-slide="${slide}"]`) //Dot tương ứng với giá trị slide thêm vào class
        .classList.add("dots__dot--active");
};

const init = function () { //Khởi tạo và thiết lập trình chiếu
    goToSlide(0); //Đặt slide đầu tiên (slide 0) ở vị trí trung tâm
    createDots();
    activateDot(0);
};
init();
dotContainer.addEventListener("click", function (e) { //Cho phép người dùng nhấn vào dot để chuyển đến slide tương ứng.
    if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
    }
});
const startAutoSilde = function () {
    setInterval(nextSlide, 2000);
};
startAutoSilde();

//__________________________Back to top________________________//
window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
    ) {
        // Hiển thị nút khi người dùng cuộn xuống 30px
        document.querySelector(".backToTop").style.display = "block";
    } else {
        // Ẩn nút khi người dùng ở đầu trang
        document.querySelector(".backToTop").style.display = "none";
    }
}

// Xử lý quay trở lên top
document.querySelector(".backToTop").onclick = function () {
    document.body.scrollTop = 0; // Cho trình duyệt Chrome, Safari, Edge
    document.documentElement.scrollTop = 0; // Cho trình duyệt Firefox,IE
}

//____________________Ẩn hiện filter_____________________//
let isFormVisible = false;
const btnForm = document.querySelector(".filter-toggle");
btnForm.addEventListener("click", function () {
    if (isFormVisible == false) {
        btnForm.classList.add("active")
        isFormVisible = true;
    } else {
        btnForm.classList.remove("active");
        isFormVisible = false;
    }
});

// tìm kiếm cơ bản
var searchField = document.querySelector(".search-field");

function search() {
    var noProduct = document.querySelector(".no-product-search");
    if (searchField.value.trim() === "") {
        getProduct(listProducts);
        renderPageNumber(listProducts, perPage);
        handleMoveButton();
        return;
    }

    let productSearch = listProducts.filter((value) => {
        return value.name
            .toLowerCase()
            .trim()
            .includes(searchField.value.trim().toLowerCase());
    });



    getProduct(productSearch);
    renderPageNumber(productSearch, perPage);
    handleMoveButton();
    return;

    // if (productSearch.length == 0) {
    //     // noProduct.classList.remove("hidden");
    //     getProduct(productSearch);
    //     renderPageNumber(productSearch, perPage);
    //     return;
    // }
    // else if (productSearch.length > 0) {
    //     // noProduct.classList.add("hidden");
    //     getProduct(productSearch);
    //     renderPageNumber(productSearch, perPage);
    //     return;
    // }

}

searchField.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        search();
    }
});

// tìm kiếm nâng cao
const productName = document.querySelector("#product-name");
const brand = document.querySelector("#product-brand");
const type = document.querySelector("#product-type");
const minPrice = document.querySelector("#minPrice");
const maxPrice = document.querySelector("#maxPrice");

var minPriceValue = document.querySelector("#minPriceValue");
var maxPriceValue = document.querySelector("#maxPriceValue");

minPrice.addEventListener("input", function () {
    var minValue = Number(minPrice.value).toLocaleString("vi-VN") + " Đ";
    minPriceValue.textContent = minValue;
})

maxPrice.addEventListener("input", function () {
    var maxValue = Number(maxPrice.value).toLocaleString("vi-VN") + " Đ";
    maxPriceValue.textContent = maxValue;
})

function searchAdvanced(productName, brand, type, minPriceForSearch, maxPriceForSearch) {
    if (minPriceForSearch > maxPriceForSearch) {
        alert("Khoảng tiền lọc không hợp lệ!");
        return;
    }

    let productSearch = listProducts.filter((product) => {
        if (productName && !product.name.trim().toLowerCase().includes(productName.trim().toLowerCase())) {
            return false;
        }
        if (brand && product.brand !== brand) {
            return false;
        }
        if (type && product.type !== type) {
            return false;
        }
        if (minPriceForSearch <= product.model[0].price && maxPriceForSearch >= product.model[0].price) {
            return true;
        }
        else return false;
        return true;
    });

    if (productSearch) {
        getProduct(productSearch);
        renderPageNumber(productSearch, perPage);
        handleMoveButton();
        console.log(productSearch);
        console.log(minPriceForSearch + " " + maxPriceForSearch);
        console.log(typeof (minPriceForSearch) + " " + typeof (maxPriceForSearch));
        console.log(typeof (listProducts[0].model[0].price));
    }
    else { console.log("Khong co product") }
    return;
}

const searchAdvancedBtn = document.querySelector(".btn-show-result");

searchAdvancedBtn.addEventListener("click", function (e) {
    e.preventDefault();
    searchAdvanced(
        productName.value, brand.value, type.value, Number(minPrice.value), Number(maxPrice.value)
    );
});


document.addEventListener('DOMContentLoaded', () => {
    showAndCloseAbout();
    renderCartUI();
})

// xem lịch sử mua hàng
function displayHideHistory() {
    const history = document.querySelector(".historyOrder");
    history.classList.toggle("active");
}
function hideHistoryOrder1() {
    const btnHistory = document.querySelector(".menu-history");
    console.log(btnHistory);

    if (btnHistory) {
        btnHistory.addEventListener("click", () => {
            displayHideHistory();
        });
    } else {
        setTimeout(hideHistoryOrder1, 100);
    }
}
function hideHistoryOrder2() {
    const btnCloseHistory = document.querySelector(".close-history");
    btnCloseHistory.addEventListener("click", () => {
        displayHideHistory();
    });
}

function handleRenderHistoryOrder() {
    if (login == null) return;
    const historyOrder = document.querySelector(".historyOrder");
    historyOrder.innerHTML = `
        <div class="table-header">
            <h2 class="title">History Order</h2>
        </div>
        <div class="container">
            <img class="close-history" src="./asset/images/bx-x.svg" alt="">
            <table>
                <thead class = "tableHistoryHead"> 
            
                </thead>
                <tbody class = "tableHistoryBody">

                </tbody>
            </table>
        </div>
    `;
    const tableHead = document.querySelector(".tableHistoryHead");
    tableHead.innerHTML = `
        <tr>
            <th>STT</th>
            <th>Order time</th>
            <th>Total Price</th>
            <th>Status</th>
            <th></th>
        </tr> 
    `;
    hideHistoryOrder1();
    hideHistoryOrder2();
    const tableBody = document.querySelector(".tableHistoryBody");
    let userIndex = dataUsers.findIndex((user) => user.id === login.id);
    let number = 0;
    listOrders.forEach((item) => {
        if (dataUsers[userIndex].id === item.userId) {
            number++;
            let row = `
                <tr>
                    <td>${number}</td> 
                    <td>${item.time}</td>
                    <td>${totalPriceOfOrder(item.order)}</td>
                    <td>${status(item.check)}</td>
                    <td onclick = "renderHistoryOrderItem(${item.id})">
                        <img class="showmore" src="./asset/images/showmore.png" alt="">
                    </td>
                </tr>`;
            tableBody.innerHTML += row;
        }
    });
}

function totalPriceOfOrder(arrOfOrderInListOrder) {
    let sumQuantity = 0;
    let sumPrice = 0;
    let shipTotal = 0;
    arrOfOrderInListOrder.forEach((item) => {
        sumQuantity += item.quantity;
        sumPrice += item.price * item.quantity;
        shipTotal += 10000 * item.quantity;
    })
    let totalPriceFull = sumPrice + shipTotal;
    var formattedPrice = totalPriceFull.toLocaleString("vi-VN") + " đ";
    return formattedPrice;
}

function renderHistoryOrderItem(orderId) {
    const historyOrder = document.querySelector(".historyOrder");
    historyOrder.innerHTML = `
        <div class="table-header">
            <h2 class="title">History Order</h2>
        </div>
        <div class="container">
            <div>
                <img class="close-history" src="./asset/images/back_3114883.png" alt="Quay lại" onclick="handleRenderHistoryOrder()">
            </div>
            <table>
                <thead class = "tableHistoryHead"> 
            
                </thead>
                <tbody class = "tableHistoryBody">

                </tbody>
            </table>
        </div>
    `;
    hideHistoryOrder1();
    const tableHead = document.querySelector(".tableHistoryHead");
    tableHead.innerHTML = `
        <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Quatity</th>    
            <th>Price</th>
        </tr> 
    `;
    const table = document.querySelector(".tableHistoryBody");
    table.innerHTML = "";
    let number = 0;
    let totalPrice = 0;
    for (var i = 0; i < listOrders.length; i++) {
        if (listOrders[i].id === orderId) {
            listOrders[i].order.forEach((item) => {
                number++;
                let row = `
                <tr>
                    <td>${number}</td>
                    <td><img class="img-history" src="${item.img}" alt=""></td>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price.toLocaleString("vi-VN") + " Đ"}</td>
                </tr>`;
                table.innerHTML += row;
            });
        }
    }
}

handleRenderHistoryOrder();
function status(check) {
    if (check == 0) {
        return "Đang chờ...";
    } else {
        if (check == 1) {
            return "Đã xác nhận!";
        }
        else {
            return "Đã hủy";
        }
    }
}

// nghiên cứu em yêu khoa học

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// const slider = document.querySelector(".slider");
// setInterval(() => {
//     slider.style.boxShadow = getRandomColor() + " 0px 5px 15px";
// }, 100)

// let isIntervalIcon;
// iconLogin.addEventListener('mouseover', function() {
//     isIntervalIcon = setInterval(() => {
//         iconLogin.style.backgroundColor = getRandomColor();
//     }, 200);
// })

// iconLogin.addEventListener('mouseout', function() {
//     clearInterval(isIntervalIcon);
//     iconLogin.style.backgroundColor = "#fff";
// })

function cartHover() {
    var cart = document.querySelectorAll(".cart");
    for (let c of cart) {
        c.addEventListener('mouseover', function () {
            isInterval = setInterval(() => {
                c.style.boxShadow = getRandomColor() + " 0px 5px 15px";
            }, 100)
        })
    }
    for (let c of cart) {
        c.addEventListener('mouseout', function () {
            clearInterval(isInterval);
            c.style.boxShadow = "";
        })
    }
}

