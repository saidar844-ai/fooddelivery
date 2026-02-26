// Constants
const CATEGORIES = [
    { id: 'pizza', name: 'Пицца', icon: '🍕' },
    { id: 'burger', name: 'Бургеры', icon: '🍔' },
    { id: 'sushi', name: 'Суши', icon: '🍣' },
    { id: 'pasta', name: 'Паста', icon: '🍝' },
    { id: 'dessert', name: 'Десерты', icon: '🍰' },
    { id: 'drink', name: 'Напитки', icon: '🥤' }
];

// State Management
const state = {
    cart: [],
    currentCategory: 'all',
    products: [
        // 🍕 ПИЦЦА (12)
        { id: 'pizza-1', categoryId: 'pizza', categoryName: 'Пицца', name: 'Маргарита', description: 'Классическая пицца с томатным соусом, моцареллой и свежим базиликом.', price: 2500, image: 'img/pizza-1.jpg' },
        { id: 'pizza-2', categoryId: 'pizza', categoryName: 'Пицца', name: 'Пепперони', description: 'Пицца с в меру острой колбасой пепперони и двойным сыром.', price: 3200, image: 'img/pizza-2.jpg' },
        { id: 'pizza-3', categoryId: 'pizza', categoryName: 'Пицца', name: 'Четыре сыра', description: 'Сырный микс: моцарелла, горгонзола, пармезан и эмменталь.', price: 3500, image: 'img/pizza-3.jpg' },
        { id: 'pizza-4', categoryId: 'pizza', categoryName: 'Пицца', name: 'Гавайская', description: 'Пицца с сочным ананасом, ветчиной и сыром моцарелла.', price: 2800, image: 'img/pizza-4.jpg' },
        { id: 'pizza-5', categoryId: 'pizza', categoryName: 'Пицца', name: 'Мясная', description: 'Сытная пицца с беконом, ветчиной, пепперони и говядиной.', price: 3800, image: 'img/pizza-5.jpg' },
        { id: 'pizza-6', categoryId: 'pizza', categoryName: 'Пицца', name: 'Грибная', description: 'Ароматная пицца с шампиньонами, трюфельным маслом и сыром.', price: 3000, image: 'img/pizza-6.jpg' },
        { id: 'pizza-7', categoryId: 'pizza', categoryName: 'Пицца', name: 'Диабло', description: 'Острая пицца с халапеньо, пепперони и соусом чили.', price: 3100, image: 'img/pizza-7.jpg' },
        { id: 'pizza-8', categoryId: 'pizza', categoryName: 'Пицца', name: 'Барбекю', description: 'Пицца с курицей, красным луком, беконом и соусом BBQ.', price: 3300, image: 'img/pizza-8.jpg' },
        { id: 'pizza-9', categoryId: 'pizza', categoryName: 'Пицца', name: 'Морская', description: 'Изысканная пицца с креветками, кальмарами и мидиями.', price: 4200, image: 'img/pizza-9.jpg' },
        { id: 'pizza-10', categoryId: 'pizza', categoryName: 'Пицца', name: 'Вегетарианская', description: 'Легкая пицца с брокколи, сладким перцем, томатами и оливками.', price: 2700, image: 'img/pizza-10.jpg' },
        { id: 'pizza-11', categoryId: 'pizza', categoryName: 'Пицца', name: 'Карбонара', description: 'Пицца на сливочном соусе с беконом и пармезаном.', price: 3400, image: 'img/pizza-11.jpg' },
        { id: 'pizza-12', categoryId: 'pizza', categoryName: 'Пицца', name: 'Мексиканская', description: 'Пицца с фаршем, кукурузой, халапеньо и красным луком.', price: 3500, image: 'img/pizza-12.jpg' },

        // 🍔 БУРГЕРЫ (12)
        { id: 'burger-1', categoryId: 'burger', categoryName: 'Бургеры', name: 'Чизбургер', description: 'Классический чизбургер с говяжьей котлетой, чеддером и солеными огурчиками.', price: 1800, image: 'img/burger-1.jpg' },
        { id: 'burger-2', categoryId: 'burger', categoryName: 'Бургеры', name: 'Гамбургер', description: 'Традиционный гамбургер со свежими томатами, салатом и луком.', price: 1600, image: 'img/burger-2.jpg' },
        { id: 'burger-3', categoryId: 'burger', categoryName: 'Бургеры', name: 'Дабл Чизбургер', description: 'Двойная котлета из мраморной говядины и двойной чеддер.', price: 2500, image: 'img/burger-3.jpg' },
        { id: 'burger-4', categoryId: 'burger', categoryName: 'Бургеры', name: 'Чикенбургер', description: 'Хрустящее куриное филе в панировке с соусом тар-тар.', price: 1700, image: 'img/burger-4.jpg' },
        { id: 'burger-5', categoryId: 'burger', categoryName: 'Бургеры', name: 'Веджибургер', description: 'Растительная котлета со свежими овощами и веганским соусом.', price: 2100, image: 'img/burger-5.jpg' },
        { id: 'burger-6', categoryId: 'burger', categoryName: 'Бургеры', name: 'Барбекю Бургер', description: 'Бургер с беконом, хрустящим луком фри и соусом барбекю.', price: 2400, image: 'img/burger-6.jpg' },
        { id: 'burger-7', categoryId: 'burger', categoryName: 'Бургеры', name: 'Блэк Бургер', description: 'Фирменный бургер на черной булочке с вишневым соусом.', price: 2600, image: 'img/burger-7.jpg' },
        { id: 'burger-8', categoryId: 'burger', categoryName: 'Бургеры', name: 'Техасский Бургер', description: 'Большой бургер с говяжьей котлетой, яйцом и луковыми кольцами.', price: 2800, image: 'img/burger-8.jpg' },
        { id: 'burger-9', categoryId: 'burger', categoryName: 'Бургеры', name: 'Фишбургер', description: 'Нежное филе белой рыбы в хрустящей панировке.', price: 1900, image: 'img/burger-9.jpg' },
        { id: 'burger-10', categoryId: 'burger', categoryName: 'Бургеры', name: 'Острый Бургер', description: 'Говяжья котлета с халапеньо и пикантным соусом спайси.', price: 2200, image: 'img/burger-10.jpg' },
        { id: 'burger-11', categoryId: 'burger', categoryName: 'Бургеры', name: 'Грибной Бургер', description: 'Говяжья котлета с жареными шампиньонами и трюфельным майонезом.', price: 2300, image: 'img/burger-11.jpg' },
        { id: 'burger-12', categoryId: 'burger', categoryName: 'Бургеры', name: 'VIP Бургер', description: 'Премиум говядина Вагю, фуа-гра и карамелизованный лук.', price: 4500, image: 'img/burger-12.jpg' },

        // 🍣 СУШИ (12)
        { id: 'sushi-1', categoryId: 'sushi', categoryName: 'Суши', name: 'Филадельфия', description: 'Нежный сыр филадельфия, свежий лосось, огурец.', price: 2900, image: 'img/sushi-1.jpg' },
        { id: 'sushi-2', categoryId: 'sushi', categoryName: 'Суши', name: 'Калифорния', description: 'Снежный краб, авокадо, огурец, икра тобико.', price: 2600, image: 'img/sushi-2.jpg' },
        { id: 'sushi-3', categoryId: 'sushi', categoryName: 'Суши', name: 'Дракон', description: 'Угорь, сливочный сыр, огурец, унаги соус, кунжут.', price: 3400, image: 'img/sushi-3.jpg' },
        { id: 'sushi-4', categoryId: 'sushi', categoryName: 'Суши', name: 'Унаги Маки', description: 'Классический ролл с угрем, унаги соусом и кунжутом.', price: 2200, image: 'img/sushi-4.jpg' },
        { id: 'sushi-5', categoryId: 'sushi', categoryName: 'Суши', name: 'Сяке Маки', description: 'Классический маки ролл со свежим лососем.', price: 1800, image: 'img/sushi-5.jpg' },
        { id: 'sushi-6', categoryId: 'sushi', categoryName: 'Суши', name: 'Спайси Тунец', description: 'Острый ролл с тунцом, спайси соусом и зеленым луком.', price: 2800, image: 'img/sushi-6.jpg' },
        { id: 'sushi-7', categoryId: 'sushi', categoryName: 'Суши', name: 'Запеченный ролл', description: 'Теплый ролл с крабом под сырной шапочкой.', price: 3100, image: 'img/sushi-7.jpg' },
        { id: 'sushi-8', categoryId: 'sushi', categoryName: 'Суши', name: 'Темпура ролл', description: 'Хрустящий жареный ролл с креветкой и сливочным сыром.', price: 3200, image: 'img/sushi-8.jpg' },
        { id: 'sushi-9', categoryId: 'sushi', categoryName: 'Суши', name: 'Канада', description: 'Лосось, сливочный сыр, угорь, авокадо и унаги соус.', price: 3500, image: 'img/sushi-9.jpg' },
        { id: 'sushi-10', categoryId: 'sushi', categoryName: 'Суши', name: 'Вулкан', description: 'Запеченный ролл с лососем, гребешком и острым соусом.', price: 3600, image: 'img/sushi-10.jpg' },
        { id: 'sushi-11', categoryId: 'sushi', categoryName: 'Суши', name: 'Аляска', description: 'Лосось, авокадо, огурец, кунжут, японский майонез.', price: 2800, image: 'img/sushi-11.jpg' },
        { id: 'sushi-12', categoryId: 'sushi', categoryName: 'Суши', name: 'Радуга', description: 'Ролл оборачивается тунцом, лососем, авокадо и креветкой.', price: 3800, image: 'img/sushi-12.jpg' },

        // 🍝 ПАСТА (12)
        { id: 'pasta-1', categoryId: 'pasta', categoryName: 'Паста', name: 'Карбонара', description: 'Спагетти с беконом, яичным желтком, черным перцем и пекорино.', price: 2800, image: 'img/pasta-1.jpg' },
        { id: 'pasta-2', categoryId: 'pasta', categoryName: 'Паста', name: 'Болоньезе', description: 'Паста в густом мясном томатном соусе с пармезаном.', price: 2900, image: 'img/pasta-2.jpg' },
        { id: 'pasta-3', categoryId: 'pasta', categoryName: 'Паста', name: 'Феттуччине Альфредо', description: 'Широкая паста в нежном сливочном соусе с курицей.', price: 2700, image: 'img/pasta-3.jpg' },
        { id: 'pasta-4', categoryId: 'pasta', categoryName: 'Паста', name: 'Песто', description: 'Паста с соусом из свежего базилика, кедровых орехов и пармезана.', price: 2500, image: 'img/pasta-4.jpg' },
        { id: 'pasta-5', categoryId: 'pasta', categoryName: 'Паста', name: 'Арабиата', description: 'Острая паста с томатным соусом, чесноком и перцем чили.', price: 2200, image: 'img/pasta-5.jpg' },
        { id: 'pasta-6', categoryId: 'pasta', categoryName: 'Паста', name: 'Фрутти ди Маре', description: 'Спагетти с морепродуктами в соусе из свежих томатов.', price: 4100, image: 'img/pasta-6.jpg' },
        { id: 'pasta-7', categoryId: 'pasta', categoryName: 'Паста', name: 'Четыре сыра', description: 'Пенне в соусе из моцареллы, горгонзолы, гауды и пармезана.', price: 3100, image: 'img/pasta-7.jpg' },
        { id: 'pasta-8', categoryId: 'pasta', categoryName: 'Паста', name: 'Примавера', description: 'Лапша со свежими сезонными овощами в легком соусе.', price: 2300, image: 'img/pasta-8.jpg' },
        { id: 'pasta-9', categoryId: 'pasta', categoryName: 'Паста', name: 'Вонголе', description: 'Паста с моллюсками вонголе, белым вином и чесноком.', price: 3800, image: 'img/pasta-9.jpg' },
        { id: 'pasta-10', categoryId: 'pasta', categoryName: 'Паста', name: 'Норма', description: 'Традиционная сицилийская паста с баклажанами и рикоттой.', price: 2600, image: 'img/pasta-10.jpg' },
        { id: 'pasta-11', categoryId: 'pasta', categoryName: 'Паста', name: 'Путанеска', description: 'Паста с томатами, оливками, каперсами и анчоусами.', price: 2700, image: 'img/pasta-11.jpg' },
        { id: 'pasta-12', categoryId: 'pasta', categoryName: 'Паста', name: 'Неаполитано', description: 'Классическая паста с томатным соусом и свежим базиликом.', price: 1900, image: 'img/pasta-12.jpg' },

        // 🍰 ДЕСЕРТЫ (12)
        { id: 'dessert-1', categoryId: 'dessert', categoryName: 'Десерты', name: 'Тирамису', description: 'Классический итальянский десерт с савоярди и маскарпоне.', price: 1800, image: 'img/dessert-1.jpg' },
        { id: 'dessert-2', categoryId: 'dessert', categoryName: 'Десерты', name: 'Чизкейк Нью-Йорк', description: 'Запеченный сливочный чизкейк на песочной основе.', price: 1900, image: 'img/dessert-2.jpg' },
        { id: 'dessert-3', categoryId: 'dessert', categoryName: 'Десерты', name: 'Наполеон', description: 'Слоеный торт с нежным заварным кремом.', price: 1700, image: 'img/dessert-3.jpg' },
        { id: 'dessert-4', categoryId: 'dessert', categoryName: 'Десерты', name: 'Медовик', description: 'Ароматный медовый торт со сметанным кремом.', price: 1600, image: 'img/dessert-4.jpg' },
        { id: 'dessert-5', categoryId: 'dessert', categoryName: 'Десерты', name: 'Брауни', description: 'Шоколадный десерт с кусочками орехов и шариком мороженого.', price: 2100, image: 'img/dessert-5.jpg' },
        { id: 'dessert-6', categoryId: 'dessert', categoryName: 'Десерты', name: 'Панна Котта', description: 'Сливочный итальянский десерт с ягодным соусом.', price: 1500, image: 'img/dessert-6.jpg' },
        { id: 'dessert-7', categoryId: 'dessert', categoryName: 'Десерты', name: 'Эклер', description: 'Заварное пирожное с ванильным кремом и шоколадной помадкой.', price: 900, image: 'img/dessert-7.jpg' },
        { id: 'dessert-8', categoryId: 'dessert', categoryName: 'Десерты', name: 'Макаронс', description: 'Набор из 5 французских миндальных пирожных макарон.', price: 2500, image: 'img/dessert-8.jpg' },
        { id: 'dessert-9', categoryId: 'dessert', categoryName: 'Десерты', name: 'Мороженое', description: 'Три шарика домашнего джелато (ваниль, шоколад, клубника).', price: 1200, image: 'img/dessert-9.jpg' },
        { id: 'dessert-10', categoryId: 'dessert', categoryName: 'Десерты', name: 'Фруктовый салат', description: 'Легкий салат из сезонных свежих фруктов.', price: 1400, image: 'img/dessert-10.jpg' },
        { id: 'dessert-11', categoryId: 'dessert', categoryName: 'Десерты', name: 'Блинчики', description: 'Французские блинчики с нутеллой и бананом.', price: 1600, image: 'img/dessert-11.jpg' },
        { id: 'dessert-12', categoryId: 'dessert', categoryName: 'Десерты', name: 'Свежий Круассан', description: 'Хрустящий круассан со сливочным маслом и джемом.', price: 800, image: 'img/dessert-12.jpg' },

        // 🥤 НАПИТКИ (12)
        { id: 'drink-1', categoryId: 'drink', categoryName: 'Напитки', name: 'Кока-Кола', description: 'Освежающий газированный напиток (0.5л).', price: 500, image: 'img/drink-1.jpg' },
        { id: 'drink-2', categoryId: 'drink', categoryName: 'Напитки', name: 'Спрайт', description: 'Газированный напиток с лимоном и лаймом (0.5л).', price: 500, image: 'img/drink-2.jpg' },
        { id: 'drink-3', categoryId: 'drink', categoryName: 'Напитки', name: 'Лимонад', description: 'Домашний лимонад с мятой и свежим лимоном.', price: 1200, image: 'img/drink-3.jpg' },
        { id: 'drink-4', categoryId: 'drink', categoryName: 'Напитки', name: 'Апельсиновый фреш', description: 'Свежевыжатый сок из спелых апельсинов.', price: 1500, image: 'img/drink-4.jpg' },
        { id: 'drink-5', categoryId: 'drink', categoryName: 'Напитки', name: 'Яблочный сок', description: 'Натуральный яблочный сок (1л).', price: 900, image: 'img/drink-5.jpg' },
        { id: 'drink-6', categoryId: 'drink', categoryName: 'Напитки', name: 'Мохито б/а', description: 'Безалкогольный мохито со льдом, мятой и лаймом.', price: 1400, image: 'img/drink-6.jpg' },
        { id: 'drink-7', categoryId: 'drink', categoryName: 'Напитки', name: 'Капучино', description: 'Классический кофе с густой молочной пенкой.', price: 900, image: 'img/drink-7.jpg' },
        { id: 'drink-8', categoryId: 'drink', categoryName: 'Напитки', name: 'Латте', description: 'Мягкий кофейный напиток с большим количеством молока.', price: 1000, image: 'img/drink-8.jpg' },
        { id: 'drink-9', categoryId: 'drink', categoryName: 'Напитки', name: 'Эспрессо', description: 'Крепкий и насыщенный итальянский кофе.', price: 700, image: 'img/drink-9.jpg' },
        { id: 'drink-10', categoryId: 'drink', categoryName: 'Напитки', name: 'Айс Кофе', description: 'Холодный кофе со льдом и карамельным сиропом.', price: 1200, image: 'img/drink-10.jpg' },
        { id: 'drink-11', categoryId: 'drink', categoryName: 'Напитки', name: 'Зеленый чай', description: 'Элитный зеленой чай Жасмин в чайнике (0.5л).', price: 1100, image: 'img/drink-11.jpg' },
        { id: 'drink-12', categoryId: 'drink', categoryName: 'Напитки', name: 'Черный чай', description: 'Индийский черный чай с чабрецом в чайнике (0.5л).', price: 1100, image: 'img/drink-12.jpg' }
    ]
};

// DOM Elements Reference
const elements = {
    menuGrid: document.getElementById('menu-grid'),
    categoryFilters: document.getElementById('category-filters'),

    // Cart Elements
    cartBtn: document.getElementById('cart-toggle-btn'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartOverlay: document.getElementById('cart-overlay'),
    cartBadge: document.getElementById('cart-badge'),
    cartItemsContainer: document.getElementById('cart-items-container'),
    emptyCartMessage: document.getElementById('empty-cart-message'),
    cartTotalPrice: document.getElementById('cart-total-price'),
    checkoutBtn: document.getElementById('checkout-btn'),

    // Loading
    menuLoader: document.getElementById('menu-loader')
};

// Application Initialization
function init() {
    loadCartFromStorage();
    renderCategoryFilters();
    renderMenu(state.products);
    setupEventListeners();
}

// -----------------------------------------
// RENDERING FUNCTIONS
// -----------------------------------------

function renderCategoryFilters() {
    elements.categoryFilters.innerHTML = `<button class="category-btn active" data-category="all">Все блюда</button>`;

    CATEGORIES.forEach(cat => {
        elements.categoryFilters.innerHTML += `
            <button class="category-btn" data-category="${cat.id}">
                ${cat.icon} ${cat.name}
            </button>
        `;
    });
}

function renderMenu(products) {
    if (products.length === 0) {
        elements.menuGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--clr-text-muted);">
                <p>Блюда не найдены.</p>
            </div>
        `;
        return;
    }

    elements.menuGrid.innerHTML = products.map(product => `
        <article class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy" 
                     onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'300\\'><rect width=\\'400\\' height=\\'300\\' fill=\\'#f0f0f0\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' font-family=\\'sans-serif\\' font-size=\\'18\\' fill=\\'#999\\'>Фото ожидается (${product.image})</text></svg>';">
                <span class="product-badge">${product.categoryName}</span>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart('${product.id}')" aria-label="Добавить в корзину">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

// -----------------------------------------
// CART FUNCTIONS
// -----------------------------------------

// Expose to window for inline HTML onclick handlers
window.addToCart = function (productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = state.cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    saveCartToStorage();
    showToast(`${product.name} добавлено в корзину`);
};

window.updateQuantity = function (productId, change) {
    const itemIndex = state.cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        state.cart[itemIndex].quantity += change;

        // Remove item if quantity drops to 0
        if (state.cart[itemIndex].quantity <= 0) {
            state.cart.splice(itemIndex, 1);
        }

        updateCartUI();
        saveCartToStorage();
    }
};

window.removeFromCart = function (productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToStorage();
    showToast(`Товар удален из корзины`);
};

function updateCartUI() {
    // 1. Update Cart Badge
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.cartBadge.textContent = totalItems;

    // 2. Toggle Empty State or Items
    if (state.cart.length === 0) {
        elements.emptyCartMessage.classList.remove('hidden');
        elements.checkoutBtn.disabled = true;

        // Clear items container but keep empty message element
        elements.cartItemsContainer.innerHTML = '';
        elements.cartItemsContainer.appendChild(elements.emptyCartMessage);

        elements.cartTotalPrice.textContent = '0 ₸';
        return;
    }

    // Cart is not empty
    elements.emptyCartMessage.classList.add('hidden');
    elements.checkoutBtn.disabled = false;

    // 3. Render Cart Items
    const existingEmptyMsg = elements.cartItemsContainer.querySelector('.empty-cart-message');

    const itemsHTML = state.cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" 
                 onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'80\\' height=\\'80\\'><rect width=\\'80\\' height=\\'80\\' fill=\\'#f0f0f0\\'/></svg>';">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)" aria-label="Уменьшить">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)" aria-label="Увеличить">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${item.id}')">Удалить</button>
                </div>
            </div>
        </div>
    `).join('');

    elements.cartItemsContainer.innerHTML = itemsHTML;
    if (existingEmptyMsg) {
        elements.cartItemsContainer.appendChild(existingEmptyMsg);
    }

    // 4. Calculate Final Total Price
    const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    elements.cartTotalPrice.textContent = formatPrice(totalPrice);
}

function toggleCart(forceState) {
    const isOpening = typeof forceState === 'boolean'
        ? forceState
        : !elements.cartDrawer.classList.contains('active');

    if (isOpening) {
        elements.cartDrawer.classList.add('active');
        elements.cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Block background scroll
    } else {
        elements.cartDrawer.classList.remove('active');
        elements.cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// -----------------------------------------
// LOCAL STORAGE
// -----------------------------------------

function saveCartToStorage() {
    localStorage.setItem('vkusnoCart', JSON.stringify(state.cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('vkusnoCart');
    if (savedCart) {
        try {
            state.cart = JSON.parse(savedCart);
            updateCartUI();
        } catch (e) {
            console.error("Cart data corrupted", e);
            localStorage.removeItem('vkusnoCart');
            state.cart = [];
        }
    }
}

// -----------------------------------------
// EVENTS & UI HELPERS
// -----------------------------------------

function setupEventListeners() {
    // 1. Category Filters
    elements.categoryFilters.addEventListener('click', (e) => {
        const btn = e.target.closest('.category-btn');
        if (!btn) return;

        // Update active class
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter products
        const categoryId = btn.getAttribute('data-category');
        state.currentCategory = categoryId;

        const filteredProducts = categoryId === 'all'
            ? state.products
            : state.products.filter(p => p.categoryId === categoryId);

        renderMenu(filteredProducts);
    });

    // 2. Cart Toggles
    elements.cartBtn.addEventListener('click', () => toggleCart(true));
    elements.closeCartBtn.addEventListener('click', () => toggleCart(false));
    elements.cartOverlay.addEventListener('click', () => toggleCart(false));

    // 3. Checkout Button
    elements.checkoutBtn.addEventListener('click', () => {
        if (state.cart.length > 0) {
            showToast("Переход к оформлению заказа...");
            setTimeout(() => {
                alert("Это демо-версия. В реальном приложении здесь был бы переход на страницу оплаты.");
            }, 500);
        }
    });

    // 4. Smooth Scrolling Navigation Action
    document.querySelectorAll('.nav-links a, .hero-buttons a').forEach(anchor => {
        if (anchor.getAttribute('href').startsWith('#')) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });

                    // Highlight active nav link
                    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                    if (this.classList.contains('nav-links')) {
                        this.classList.add('active');
                    }
                }
            });
        }
    });
}

function formatPrice(price) {
    return `${price.toLocaleString('ru-RU')} ₸`;
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-icon">${type === 'success' ? '✅' : 'ℹ️'}</div>
        <div class="toast-content">${message}</div>
    `;

    document.body.appendChild(toast);

    // Trigger reflow to run animation
    void toast.offsetWidth;

    // Show toast
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400); // cleanup after animation
    }, 3000);
}

// -----------------------------------------
// BOOTSTRAP
// -----------------------------------------

document.addEventListener('DOMContentLoaded', init);
