// ============================================
// GOFACT - LOGIQUE DU SITE E-COMMERCE
// ============================================

// État du panier
let cart = JSON.parse(localStorage.getItem('gofast_cart')) || [];

// Éléments DOM
const popularProductsGrid = document.getElementById('popularProducts');
const allProductsGrid = document.getElementById('allProducts');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const emptyCart = document.getElementById('emptyCart');
const cartTotal = document.getElementById('cartTotal');
const whatsappOrderBtn = document.getElementById('whatsappOrderBtn');
const categoryButtons = document.querySelectorAll('.category-btn');
const allProductsSection = document.querySelector('.all-products');

// Initialisation
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    renderPopularProducts();
    renderAllProducts();
    updateCartUI();
    setupEventListeners();
    setupCategoryFilter(); // Filtrage par catégories avec auto-scroll
}

// ===== RENDU DES PRODUITS =====
function renderPopularProducts() {
    const popularProducts = produitsGoFast.filter(p => p.populaire);
    
    popularProductsGrid.innerHTML = popularProducts.map(product => `
        <div class="product-card" data-category="${product.categorie}">
            ${product.populaire ? '<span class="product-badge">🔥 Populaire</span>' : ''}
            <img src="${product.image}" alt="${product.nom}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=Produit+GoFast'">
            <div class="product-info">
                <h3 class="product-name">${product.nom}</h3>
                <div class="product-price">${parseFloat(product.prix).toFixed(2)} $</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Ajouter
                    </button>
                    <button class="order-btn" onclick="addToCart(${product.id}); showCart()">
                        <i class="fas fa-bolt"></i> Commander
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderAllProducts() {
    // Toujours afficher TOUS les produits initialement
    const filteredProducts = produitsGoFast;
    
    allProductsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.categorie}">
            ${product.populaire ? '<span class="product-badge">🔥 Populaire</span>' : ''}
            <img src="${product.image}" alt="${product.nom}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=Produit+GoFast'">
            <div class="product-info">
                <h3 class="product-name">${product.nom}</h3>
                <div class="product-price">${parseFloat(product.prix).toFixed(2)} $</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Ajouter
                    </button>
                    <button class="order-btn" onclick="addToCart(${product.id}); showCart()">
                        <i class="fas fa-bolt"></i> Commander
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== FILTRAGE PAR CATÉGORIES AVEC AUTO-SCROLL =====
function setupCategoryFilter() {
    const buttons = document.querySelectorAll('.category-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            button.classList.add('active');
            
            const category = button.dataset.category;
            
            // Filtrer les produits dans la section "Tous Nos Produits"
            const allProducts = document.querySelectorAll('#allProducts .product-card');
            
            // Animation de filtrage
            allProducts.forEach(product => {
                if (category === 'all' || product.dataset.category === category) {
                    product.style.display = 'flex';
                    setTimeout(() => {
                        product.style.opacity = '1';
                        product.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    product.style.opacity = '0';
                    product.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        product.style.display = 'none';
                    }, 300);
                }
            });
            
            // Auto-scroll vers la section des produits après 350ms (le temps de l'animation)
            setTimeout(() => {
                scrollToProductsSection();
            }, 350);
        });
    });
}

// ===== FONCTION AUTO-SCROLL =====
function scrollToProductsSection() {
    if (!allProductsSection) return;
    
    // Position de la section des produits
    const productsSectionTop = allProductsSection.offsetTop - 80; // 80px pour laisser de l'espace avec le header
    
    // Animation de scroll douce
    window.scrollTo({
        top: productsSectionTop,
        behavior: 'smooth'
    });
    
    // Petit effet visuel pour indiquer la section
    allProductsSection.style.boxShadow = '0 0 0 2px var(--primary)';
    setTimeout(() => {
        allProductsSection.style.boxShadow = 'none';
    }, 1000);
}

// ===== GESTION DU PANIER =====
function addToCart(productId) {
    const product = produitsGoFast.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${product.nom} ajouté au panier`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Produit retiré du panier');
}

function updateCart() {
    localStorage.setItem('gofast_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    // Mettre à jour le compteur
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Afficher/masquer le panier vide
    if (cart.length === 0) {
        emptyCart.classList.remove('hidden');
        whatsappOrderBtn.style.display = 'none';
    } else {
        emptyCart.classList.add('hidden');
        whatsappOrderBtn.style.display = 'flex';
    }
    
    // Rendre les articles du panier
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.nom}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/60x60?text=Produit'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nom}</div>
                <div class="cart-item-price">${parseFloat(item.prix).toFixed(2)} $ × ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    // Calculer le total
    const total = cart.reduce((sum, item) => sum + (parseFloat(item.prix) * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2) + ' $';
    
    // Mettre à jour le lien WhatsApp
    updateWhatsAppLink(total);
}

function updateWhatsAppLink(total) {
    const phoneNumber = '243970332222';
    let message = `🚀 *COMMANDE Gofast*\n\n`;
    message += `Bonjour GoFast ! Je souhaite commander :\n\n`;
    
    cart.forEach(item => {
        message += `▶️ ${item.nom}\n`;
        message += `   Prix: ${parseFloat(item.prix).toFixed(2)} $\n`;
        message += `   Quantité: ${item.quantity}\n`;
        message += `   Sous-total: ${(parseFloat(item.prix) * item.quantity).toFixed(2)} $\n\n`;
    });
    
    message += `💰 *TOTAL: ${total.toFixed(2)} $*\n\n`;
    message += `📦 *Informations de livraison :*\n`;
    message += `Nom: _________\n`;
    message += `Adresse: _________\n`;
    message += `Téléphone: _________\n\n`;
    message += `⏰ Heure de livraison souhaitée: _________\n\n`;
    message += `_Cette commande a été générée via le site web GoFast_`;
    
    const encodedMessage = encodeURIComponent(message);
    whatsappOrderBtn.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

// ===== INTERFACE UTILISATEUR =====
function showCart() {
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideCart() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showNotification(message) {
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Styles pour la notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        box-shadow: var(--shadow-hover);
        z-index: 3000;
        animation: fadeIn 0.3s ease-out;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        notification.style.animation = 'fadeIn 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== ÉVÉNEMENTS =====
function setupEventListeners() {
    // Bouton panier
    cartButton.addEventListener('click', showCart);
    
    // Fermer le panier
    cartOverlay.addEventListener('click', hideCart);
    closeCart.addEventListener('click', hideCart);
    
    // Fermer le panier avec la touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideCart();
    });
    
    // Bouton "Voir les produits" pour scroll manuel
    const seeProductsBtn = document.createElement('button');
    seeProductsBtn.innerHTML = '<i class="fas fa-arrow-down"></i> Voir les produits';
    seeProductsBtn.className = 'see-products-btn';
    seeProductsBtn.style.cssText = `
        display: none;
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        box-shadow: var(--shadow-hover);
        z-index: 999;
        font-weight: 500;
        transition: var(--transition);
    `;
    
    seeProductsBtn.addEventListener('click', scrollToProductsSection);
    document.body.appendChild(seeProductsBtn);
    
    // Afficher le bouton quand on est en haut de page
    window.addEventListener('scroll', () => {
        if (window.scrollY < 100) {
            seeProductsBtn.style.display = 'block';
        } else {
            seeProductsBtn.style.display = 'none';
        }
    });
}

// ===== FONCTIONS GLOBALES =====
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.showCart = showCart;
window.hideCart = hideCart;
window.scrollToProductsSection = scrollToProductsSection; // Rendre accessible globalement

// ===== GESTION DES IMAGES MANQUANTES =====
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/400x300?text=GoFast+Produit';
            this.onerror = null;
        };
    });
});