/* =============================================
   FOOD BLISS — MENU DATA
   All items with real Unsplash image URLs
   ============================================= */

const MENU_ITEMS = [
  // ── TEA & COFFEE ──
  {
    id: 1, cat: 'tea', catLabel: 'Tea / Coffee',
    name: 'Black Tea', nepali: 'कालो चिया',
    price: 'Rs. 20', desc: 'Light, aromatic black tea brewed to perfection.',
    descNe: 'हल्का, सुगन्धित कालो चिया।',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
    badge: null
  },
  {
    id: 2, cat: 'tea', catLabel: 'Tea / Coffee',
    name: 'Milk Tea', nepali: 'दूध चिया',
    price: 'Rs. 25', desc: 'Creamy milk tea with warming spices.',
    descNe: 'मसलादार दूध चिया।',
    img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80',
    badge: null
  },
  {
    id: 3, cat: 'tea', catLabel: 'Tea / Coffee',
    name: 'Black Coffee', nepali: 'कालो कफी',
    price: 'Rs. 30', desc: 'Bold, rich black coffee to start your day.',
    descNe: 'बलियो र सुगन्धित कालो कफी।',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    badge: null
  },
  {
    id: 4, cat: 'tea', catLabel: 'Tea / Coffee',
    name: 'Milk Coffee', nepali: 'दूध कफी',
    price: 'Rs. 50', desc: 'Smooth espresso with fresh steamed milk.',
    descNe: 'मलाईदार दूध र एस्प्रेसो।',
    img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
    badge: null
  },
  {
    id: 5, cat: 'tea', catLabel: 'Tea / Coffee',
    name: 'Hot Lemon with Honey', nepali: 'मह लेमन',
    price: 'Rs. 100', desc: 'Soothing hot lemon with natural honey — great for the throat.',
    descNe: 'प्राकृतिक मह र लेमनको न्यानो पेय।',
    img: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=600&q=80',
    badge: 'Popular'
  },

  // ── BREAKFAST ──
  {
    id: 6, cat: 'breakfast', catLabel: 'Breakfast',
    name: 'French Toast', nepali: 'फ्रेन्च टोस्ट',
    price: 'Rs. 130', desc: 'Egg-dipped golden toast with butter and jam.',
    descNe: 'अण्डामा डुबाएको सुनौलो टोस्ट।',
    img: 'https://images.unsplash.com/photo-1484723091739-30990093a101?w=600&q=80',
    badge: null
  },
  {
    id: 7, cat: 'breakfast', catLabel: 'Breakfast',
    name: 'Masala Umlet', nepali: 'मसला अमलेट',
    price: 'Rs. 100', desc: 'Spiced omelette with fresh herbs, onion, and green chilli.',
    descNe: 'मसाला र तरकारीसहितको अमलेट।',
    img: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&q=80',
    badge: null
  },
  {
    id: 8, cat: 'breakfast', catLabel: 'Breakfast',
    name: 'Samosa Tarkari', nepali: 'समोसा तरकारी',
    price: 'Rs. 75', desc: 'Crispy samosas served with spiced vegetable curry.',
    descNe: 'तरकारीसहितको कुरकुरे समोसा।',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    badge: null
  },
  {
    id: 9, cat: 'breakfast', catLabel: 'Breakfast',
    name: 'Plain Toast', nepali: 'सादा टोस्ट',
    price: 'Rs. 90', desc: 'Crispy golden bread toast with butter and jam.',
    descNe: 'मक्खन र जामसहितको टोस्ट।',
    img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80',
    badge: null
  },

  // ── SANDWICH & BURGER ──
  {
    id: 10, cat: 'sandwich', catLabel: 'Sandwich & Burger',
    name: 'Chicken Sandwich', nepali: 'चिकन स्यान्डविच',
    price: 'Rs. 150', desc: 'Grilled chicken strips in toasted bread with sauce.',
    descNe: 'ग्रिल गरेको चिकन र सस सहितको स्यान्डविच।',
    img: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&q=80',
    badge: null
  },
  {
    id: 11, cat: 'sandwich', catLabel: 'Sandwich & Burger',
    name: 'Spl Crispy Chi. Burger', nepali: 'क्रिस्पी चिकन बर्गर',
    price: 'Rs. 150', desc: 'Special crispy fried chicken burger with lettuce, tomato and house sauce.',
    descNe: 'विशेष क्रिस्पी चिकन बर्गर।',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    badge: 'Best!'
  },
  {
    id: 12, cat: 'sandwich', catLabel: 'Sandwich & Burger',
    name: 'Veg Burger', nepali: 'भेज बर्गर',
    price: 'Rs. 100', desc: 'Fresh vegetable patty burger loaded with greens.',
    descNe: 'हरियाली तरकारीको स्वस्थ बर्गर।',
    img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=80',
    badge: 'Veg'
  },
  {
    id: 13, cat: 'sandwich', catLabel: 'Sandwich & Burger',
    name: 'Clab Sandwich', nepali: 'क्लब स्यान्डविच',
    price: 'Rs. 200', desc: 'Triple-layered club sandwich with chicken, egg, and vegetables.',
    descNe: 'तीन तहको क्लब स्यान्डविच।',
    img: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=600&q=80',
    badge: null
  },

  // ── VEG SNACKS ──
  {
    id: 14, cat: 'vegsnack', catLabel: 'Veg Snacks',
    name: 'French Fry', nepali: 'फ्रेन्च फ्राई',
    price: 'Rs. 100', desc: 'Golden crispy potato fries, perfectly salted.',
    descNe: 'सुनौलो कुरकुरे आलुको फ्राई।',
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80',
    badge: 'Veg'
  },
  {
    id: 15, cat: 'vegsnack', catLabel: 'Veg Snacks',
    name: 'Paneer Chilly', nepali: 'पनीर चिली',
    price: 'Rs. 200', desc: 'Spicy stir-fried paneer with bell peppers and onions.',
    descNe: 'तीतो-मसालेदार पनीर चिली।',
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80',
    badge: 'Veg'
  },
  {
    id: 16, cat: 'vegsnack', catLabel: 'Veg Snacks',
    name: 'Peanut Sandeko', nepali: 'भटमास सन्धेको',
    price: 'Rs. 130', desc: 'Spiced roasted peanuts tossed in Nepali style — an irresistible snack.',
    descNe: 'नेपाली शैलीमा बनाइएको भटमास।',
    img: 'https://images.unsplash.com/photo-1567608198472-6796ad9466a2?w=600&q=80',
    badge: 'Veg'
  },
  {
    id: 17, cat: 'vegsnack', catLabel: 'Veg Snacks',
    name: 'Mustang Aaloo', nepali: 'मुस्ताङ आलु',
    price: 'Rs. 150', desc: 'Rustic spiced potatoes cooked in traditional Mustang style.',
    descNe: 'मुस्ताङ शैलीमा बनाइएको मसालेदार आलु।',
    img: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=600&q=80',
    badge: 'Popular'
  },

  // ── SEKUWA ──
  {
    id: 18, cat: 'sekuwa', catLabel: 'Sekuwa',
    name: 'Buff Sekuwa', nepali: 'राँगाको सेकुवा',
    price: 'Rs. Market Price', desc: 'Authentic Nepali buff sekuwa — charcoal-grilled marinated meat.',
    descNe: 'खरानीमा पकाइएको मसालेदार राँगाको मासु।',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    badge: 'Signature'
  },
  {
    id: 19, cat: 'sekuwa', catLabel: 'Sekuwa',
    name: 'Chicken Sekuwa', nepali: 'चिकन सेकुवा',
    price: 'Rs. Market Price', desc: 'Juicy marinated chicken grilled over charcoal — served with achar.',
    descNe: 'खरानीमा ग्रिल गरेको मसालेदार चिकन।',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    badge: 'Popular'
  },
  {
    id: 20, cat: 'sekuwa', catLabel: 'Sekuwa',
    name: 'Pork Sekuwa', nepali: 'सुँगुरको सेकुवा',
    price: 'Rs. Market Price', desc: 'Traditional pork sekuwa with local spices and herbs.',
    descNe: 'परम्परागत मसालाले बनाइएको सुँगुरको सेकुवा।',
    img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
    badge: null
  },

  // ── MO:MO ──
  {
    id: 21, cat: 'momo', catLabel: 'MO:MO',
    name: 'Buff MO:MO (Steam)', nepali: 'राँगा मम (स्टिम)',
    price: 'Rs. 120', desc: 'Classic steamed buff dumplings with spicy tomato achar.',
    descNe: 'स्टिममा पकाइएको राँगाको मम।',
    img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80',
    badge: 'Fan Fave'
  },
  {
    id: 22, cat: 'momo', catLabel: 'MO:MO',
    name: 'Chicken MO:MO (Chilly)', nepali: 'चिकन चिली मम',
    price: 'Rs. 170', desc: 'Fiery chilly chicken momos tossed in spicy sauce.',
    descNe: 'तीखो चटनीमा पकाइएको चिली चिकन मम।',
    img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
    badge: '🔥 Spicy'
  },
  {
    id: 23, cat: 'momo', catLabel: 'MO:MO',
    name: 'Veg MO:MO (Fried)', nepali: 'भेज फ्राइड मम',
    price: 'Rs. 110', desc: 'Crispy fried vegetable dumplings with dipping sauce.',
    descNe: 'कुरकुरे भेज मम।',
    img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
    badge: 'Veg'
  },
  {
    id: 24, cat: 'momo', catLabel: 'MO:MO',
    name: 'Buff MO:MO (Jhol)', nepali: 'राँगा झोल मम',
    price: 'Rs. 130', desc: 'Buff momos served in spicy, tangy sesame-tomato soup.',
    descNe: 'तीखो झोलमा डुबाइएको राँगाको मम।',
    img: 'https://images.unsplash.com/photo-1569878685854-af71f9c08073?w=600&q=80',
    badge: 'Popular'
  },

  // ── NON-VEG SNACKS ──
  {
    id: 25, cat: 'nonveg', catLabel: 'Non-Veg Snacks',
    name: 'Chicken Lollipop', nepali: 'चिकन लोलिपप',
    price: 'Rs. 300', desc: 'Marinated crispy chicken lollipops — a crowd favourite.',
    descNe: 'कुरकुरे चिकन लोलिपप।',
    img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80',
    badge: 'Popular'
  },
  {
    id: 26, cat: 'nonveg', catLabel: 'Non-Veg Snacks',
    name: 'Hot & Spicy Wings', nepali: 'मसालेदार विङ्स',
    price: 'Rs. 300', desc: 'Fiery chicken wings tossed in our signature hot sauce.',
    descNe: 'विशेष तीखो सससहितको चिकन विङ्स।',
    img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80',
    badge: '🔥 Hot'
  },
  {
    id: 27, cat: 'nonveg', catLabel: 'Non-Veg Snacks',
    name: 'Sukuti Sadheko', nepali: 'सुकुटी सन्धेको',
    price: 'Rs. 300', desc: 'Traditional Nepali dried meat seasoned with mustard and spices.',
    descNe: 'मसालाले सजाइएको सुकुटी।',
    img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&q=80',
    badge: 'Nepali'
  },
  {
    id: 28, cat: 'nonveg', catLabel: 'Non-Veg Snacks',
    name: 'Manchurian Chicken', nepali: 'मन्चुरियन चिकन',
    price: 'Rs. 300', desc: 'Indo-Chinese style crispy chicken in savoury manchurian sauce.',
    descNe: 'इन्डो-चाइनिज शैलीको मन्चुरियन चिकन।',
    img: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80',
    badge: null
  },
  {
    id: 29, cat: 'nonveg', catLabel: 'Non-Veg Snacks',
    name: 'Crispy Chicken', nepali: 'क्रिस्पी चिकन',
    price: 'Rs. 300', desc: 'Golden crispy fried chicken, perfectly seasoned.',
    descNe: 'सुनौलो कुरकुरे तलेको चिकन।',
    img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80',
    badge: null
  },

  // ── FRIED RICE ──
  {
    id: 30, cat: 'rice', catLabel: 'Fried Rice',
    name: 'Chicken Fried Rice', nepali: 'चिकन फ्राइड राइस',
    price: 'Rs. 180', desc: 'Wok-tossed fried rice with tender chicken pieces.',
    descNe: 'कडाहीमा भुटेको चिकन राइस।',
    img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
    badge: null
  },
  {
    id: 31, cat: 'rice', catLabel: 'Fried Rice',
    name: 'Mixed Fried Rice', nepali: 'मिक्स फ्राइड राइस',
    price: 'Rs. 200', desc: 'A colourful mix of meats and vegetables tossed in seasoned rice.',
    descNe: 'मिश्रित तरकारी र मासुको भुटेको राइस।',
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
    badge: null
  },
  {
    id: 32, cat: 'rice', catLabel: 'Fried Rice',
    name: 'Veg Fried Rice', nepali: 'भेज फ्राइड राइस',
    price: 'Rs. 130', desc: 'Stir-fried rice with seasonal vegetables.',
    descNe: 'तरकारीसहितको भुटेको राइस।',
    img: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&q=80',
    badge: 'Veg'
  },

  // ── NOODLES / CHOWMEIN ──
  {
    id: 33, cat: 'noodles', catLabel: 'Noodles & Chowmein',
    name: 'Chicken Chowmein', nepali: 'चिकन चाउमिन',
    price: 'Rs. 140', desc: 'Stir-fried noodles with chicken, vegetables, and house seasoning.',
    descNe: 'चिकन र तरकारीसहितको चाउमिन।',
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',
    badge: null
  },
  {
    id: 34, cat: 'noodles', catLabel: 'Noodles & Chowmein',
    name: 'Buff Keema Noodles', nepali: 'राँगा कीमा नुडल्स',
    price: 'Rs. 150', desc: 'Saucy noodles with spiced buff keema — hearty and warming.',
    descNe: 'राँगाको कीमासहितको नुडल्स।',
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    badge: null
  },
  {
    id: 35, cat: 'noodles', catLabel: 'Noodles & Chowmein',
    name: 'Veg Chowmein', nepali: 'भेज चाउमिन',
    price: 'Rs. 100', desc: 'Classic vegetarian chowmein with crispy vegetables.',
    descNe: 'सादा तरकारीको चाउमिन।',
    img: 'https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=600&q=80',
    badge: 'Veg'
  },

  // ── THUKPA ──
  {
    id: 36, cat: 'thukpa', catLabel: 'Thukpa',
    name: 'Chicken Thukpa', nepali: 'चिकन थुक्पा',
    price: 'Rs. 150', desc: 'Warming Tibetan noodle soup with tender chicken and fresh vegetables.',
    descNe: 'चिकन र तरकारीसहितको थुक्पा।',
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',
    badge: null
  },
  {
    id: 37, cat: 'thukpa', catLabel: 'Thukpa',
    name: 'Buff Thukpa', nepali: 'राँगा थुक्पा',
    price: 'Rs. 130', desc: 'Hearty buff thukpa — deeply comforting bowl of goodness.',
    descNe: 'स्वादिलो राँगाको थुक्पा।',
    img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80',
    badge: null
  },
  {
    id: 38, cat: 'thukpa', catLabel: 'Thukpa',
    name: 'Veg Thukpa', nepali: 'भेज थुक्पा',
    price: 'Rs. 100', desc: 'Comforting Tibetan-style vegetable noodle soup.',
    descNe: 'तरकारीसहितको भेज थुक्पा।',
    img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80',
    badge: 'Veg'
  },

  // ── DRINKS ──
  {
    id: 39, cat: 'drinks', catLabel: 'Lassi & Drinks',
    name: 'Mango Lassi', nepali: 'आँप लस्सी',
    price: 'Rs. 140', desc: 'Rich, chilled mango lassi made with real mango pulp.',
    descNe: 'ताजा आँपको रसले बनाइएको चिसो लस्सी।',
    img: 'https://images.unsplash.com/photo-1571167366136-b57c7b1a7c9b?w=600&q=80',
    badge: 'Fave'
  },
  {
    id: 40, cat: 'drinks', catLabel: 'Lassi & Drinks',
    name: 'Chocolate Milk Shake', nepali: 'चकलेट मिल्क शेक',
    price: 'Rs. 160', desc: 'Thick, indulgent chocolate milkshake.',
    descNe: 'मलाईदार चकलेट मिल्क शेक।',
    img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80',
    badge: null
  },
  {
    id: 41, cat: 'drinks', catLabel: 'Lassi & Drinks',
    name: 'Banana Lassi', nepali: 'केरा लस्सी',
    price: 'Rs. 125', desc: 'Thick banana lassi, naturally sweet and satisfying.',
    descNe: 'प्राकृतिक रूपमा मीठो केराको लस्सी।',
    img: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&q=80',
    badge: null
  },

  // ── KHANA SET ──
  {
    id: 42, cat: 'khana', catLabel: 'Khana Set',
    name: 'Buff Khana Set', nepali: 'राँगा खाना सेट',
    price: 'Rs. 180', desc: 'Complete Nepali thali with buff curry, dal, bhat, tarkari and achar.',
    descNe: 'राँगाको तरकारी, दाल, भात र अचारसहितको सम्पूर्ण खाना।',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
    badge: 'Signature'
  },
  {
    id: 43, cat: 'khana', catLabel: 'Khana Set',
    name: 'Chicken Khana Set', nepali: 'चिकन खाना सेट',
    price: 'Rs. 170', desc: 'Dal bhat with chicken curry, seasonal vegetables and pickles.',
    descNe: 'चिकन तरकारी, दाल र भातको सम्पूर्ण सेट।',
    img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80',
    badge: null
  },
  {
    id: 44, cat: 'khana', catLabel: 'Khana Set',
    name: 'Chicken Khaja Set', nepali: 'चिकन खजा सेट',
    price: 'Rs. 180', desc: 'Traditional Nepali khaja: chiura, chicken, bhatmas, achar — a wholesome snack platter.',
    descNe: 'चिउरा, चिकन, भटमास र अचारको खजा।',
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80',
    badge: 'Nepali'
  },

  // ── CURRY ──
  {
    id: 45, cat: 'curry', catLabel: 'Curry',
    name: 'Chicken Curry', nepali: 'चिकन करी',
    price: 'Rs. 150', desc: 'Traditional Nepali chicken curry with rich aromatic gravy.',
    descNe: 'परम्परागत नेपाली चिकन करी।',
    img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80',
    badge: null
  },
  {
    id: 46, cat: 'curry', catLabel: 'Curry',
    name: 'Motton Curry', nepali: 'खसीको मासु',
    price: 'Rs. 220', desc: 'Slow-cooked tender mutton in traditional spice blend.',
    descNe: 'पाकेको मसालेदार खसीको मासु।',
    img: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80',
    badge: 'Premium'
  },
  {
    id: 47, cat: 'curry', catLabel: 'Curry',
    name: 'Mutter Paneer', nepali: 'मटर पनीर',
    price: 'Rs. 200', desc: 'Creamy paneer and pea curry in tomato-based gravy.',
    descNe: 'मलाईदार मटर र पनीरको करी।',
    img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80',
    badge: 'Veg'
  },
];

const CATEGORIES = [
  { key: 'all',       label: 'All Items',   nepali: 'सबै',          icon: 'logo' },
  { key: 'tea',       label: 'Tea & Coffee', nepali: 'चिया/कफी',    icon: 'tea' },
  { key: 'breakfast', label: 'Breakfast',   nepali: 'ब्रेकफास्ट',   icon: 'breakfast' },
  { key: 'sandwich',  label: 'Sandwich',    nepali: 'स्यान्डविच',   icon: 'sandwich' },
  { key: 'vegsnack',  label: 'Veg Snacks',  nepali: 'भेज स्न्याक्स', icon: 'veg' },
  { key: 'sekuwa',    label: 'Sekuwa',      nepali: 'सेकुवा',        icon: 'grill' },
  { key: 'momo',      label: 'MO:MO',       nepali: 'मम',            icon: 'momo' },
  { key: 'nonveg',    label: 'Non-Veg',     nepali: 'मासु स्न्याक्स', icon: 'chicken' },
  { key: 'rice',      label: 'Fried Rice',  nepali: 'भुटेको राइस',  icon: 'rice' },
  { key: 'noodles',   label: 'Noodles',     nepali: 'नुडल्स',        icon: 'noodles' },
  { key: 'thukpa',    label: 'Thukpa',      nepali: 'थुक्पा',        icon: 'soup' },
  { key: 'drinks',    label: 'Drinks',      nepali: 'पेय',           icon: 'drink' },
  { key: 'khana',     label: 'Khana Set',   nepali: 'खाना सेट',     icon: 'khana' },
  { key: 'curry',     label: 'Curry',       nepali: 'करी',           icon: 'curry' },
];
