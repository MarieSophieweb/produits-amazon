// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            name: "Livre XYZ",
            image: "chemin/vers/image.jpg",
            description: "Plongez-vous dans ce best-seller qui vous transporte dans un monde fascinant de suspense et d'aventure.",
            link: "https://www.amazon.com/dp/B07XYZABC?tag=monidentifiant-20"
        },
        {
            name: "Produit 2",
            image: "chemin/vers/image2.jpg",
            description: "Description du produit 2.",
            link: "https://www.amazon.com/dp/B09ABCDE?tag=monidentifiant-20"
        },
        // Ajoutez plus de produits ici
    ];

    const productsContainer = document.getElementById("products");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <a href="${product.link}" target="_blank" rel="noopener noreferrer">
                Découvrez ce produit sur Amazon
            </a>
        `;
        productsContainer.appendChild(productElement);
    });
});
