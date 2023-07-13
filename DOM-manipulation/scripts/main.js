

const flowers = [
    {
        flowerName: "Rose",
        flowerPrice: 5.99,
        grade: "A"
    },
    {
        flowerName: "Tulip",
        flowerPrice: 3.99,
        grade: "B"
    },
    {
        flowerName: "Sunflower",
        flowerPrice: 8.99,
        grade: "C"
    },
]



function createTable() {
    const tableSelect = document.querySelector('.main-table tbody');

    for(let i=0; i<flowers.length; i++) {

        const flower = flowers[i];

        const tableRow = document.createElement('tr');

        const tableCellFlowerName = document.createElement('td');

        const flowerName = document.createTextNode(flower.flowerName);

        tableCellFlowerName.appendChild(flowerName);

        tableRow.appendChild(tableCellFlowerName);

        tableSelect.appendChild(tableRow);

    }


}