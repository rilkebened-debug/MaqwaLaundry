/* Content Management Ready JSON Datasets */
const servicesData = [
  {
    id: 'cuci-reguler',
    title: 'Cuci Reguler',
    description: 'Pencucian bersih higienis dengan deterjen ramah serat kain, dikeringkan, dan dilipat rapi.',
    estimation: '2-3 Hari',
    icon: 'ri-t-shirt-air-line',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'cuci-express',
    title: 'Cuci Express',
    description: 'Layanan Kilat darurat untuk pakaian siap pakai dalam hitungan jam dengan kualitas maksimal.',
    estimation: '6-12 Jam',
    icon: 'ri-flashlight-line',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'setrika',
    title: 'Setrika Saja',
    description: 'Pakaian rapi licin bebas kusut dengan pelicin dan parfum aroma segar.',
    estimation: '1 Hari',
    icon: 'ri-iron-line',
    image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'bed-cover',
    title: 'Bed Cover & Sprei',
    description: 'Pembersihan mendalam untuk sprei dan bed cover agar bebas tungau, debu, dan higienis.',
    estimation: '2 Hari',
    icon: 'ri-hotel-bed-line',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'sepatu-boneka',
    title: 'Sepatu & Boneka',
    description: 'Perawatan khusus perlengkapan kesayangan menggunakan teknik deep clean tanpa merusak bahan.',
    estimation: '2-3 Hari',
    icon: 'ri-footprint-line',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=400'
  }
];

const pricesData = [
  { service: 'Cuci + Gosok', price: 'Rp 5.000', unit: '/kg', time: '2 Hari' },
  { service: 'Cuci + Lipat', price: 'Rp 3.500', unit: '/kg', time: '2 Hari' },
  { service: 'Gosok Saja', price: 'Rp 3.500', unit: '/kg', time: '1 Hari' },
  { service: 'Bed Cover', price: 'Mulai Rp 25.000', unit: '/pcs', time: '2 Hari' },
  { service: 'Sprei', price: 'Mulai Rp 15.000', unit: '/pcs', time: '2 Hari' },
  { service: 'Selimut', price: 'Mulai Rp 20.000', unit: '/pcs', time: '2 Hari' },
  { service: 'Boneka', price: 'Mulai Rp 15.000', unit: '/pcs', time: '2-3 Hari' },
  { service: 'Sepatu', price: 'Rp 10.000', unit: '/pasang', time: '2-3 Hari' }
];

const testimonialsData = [
  {
    name: 'Rian Ardiansyah',
    role: 'Mahasiswa Pekanbaru',
    comment: 'Pakai Maqwa Laundry bikin hidup anak kos jauh lebih praktis. Cucian selalu bersih, rapi, dan wangi tahan lama!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=12'
  },
  {
    name: 'Siti Sarah',
    role: 'Ibu Rumah Tangga',
    comment: 'Layanan antar jemputnya sangat membantu. Bed cover dan sprei jadi harum bebas debu.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=5'
  },
  {
    name: 'Budi Santoso',
    role: 'Karyawan Swasta',
    comment: 'Cuci express-nya mantap! Pagi diantar, sore sudah siap dipakai meeting kantor.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=33'
  }
];

const faqData = [
  {
    question: 'Berapa lama proses pengerjaan laundry reguler?',
    answer: 'Proses laundry reguler membutuhkan waktu sekitar 2 hingga 3 hari pengerjaan sampai rapi.'
  },
  {
    question: 'Apakah ada layanan kilat / express?',
    answer: 'Ya, kami menyediakan layanan Express 6-12 jam selesai untuk kebutuhan mendesak Anda.'
  },
  {
    question: 'Apakah menyediakan layanan jemput pakaian?',
    answer: 'Tentu! Kami menyediakan layanan jemput-antar langsung ke rumah atau lokasi kos Anda.'
  },
  {
    question: 'Bagaimana opsi cara pembayarannya?',
    answer: 'Pembayaran dapat dilakukan secara Tunai, QRIS, maupun Transfer Bank saat penyerahan.'
  },
  {
    question: 'Apakah menerima pencucian item satuan?',
    answer: 'Ya, kami menerima item satuan seperti bed cover, sprei, selimut, boneka, hingga sepatu.'
  }
];

/* Initialization on DOM Load */
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderPrices();
  renderTestimonials();
  renderFAQ();
  initCalculatorListeners();
  initMobileMenu();
});

/* Render Services Cards */
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;

  container.innerHTML = servicesData.map(service => `
    <div class="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div class="relative h-48 overflow-hidden">
          <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover">
          <span class="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-brand-purple font-extrabold text-[11px] px-3 py-1 rounded-full shadow-sm">
            <i class="ri-time-line mr-1"></i>${service.estimation}
          </span>
        </div>
        <div class="p-6 space-y-2">
          <h3 class="font-bold text-lg text-gray-900">${service.title}</h3>
          <p class="text-xs text-gray-500 leading-relaxed">${service.description}</p>
        </div>
      </div>
      <div class="p-6 pt-0">
        <button onclick="openOrderModal('${service.title}')" class="w-full py-3 rounded-2xl bg-purple-50 text-brand-purple font-bold text-xs hover:bg-brand-purple hover:text-white transition-all">
          Pesan Layanan
        </button>
      </div>
    </div>
  `).join('');
}

/* Render Price List Table Rows */
function renderPrices() {
  const tbody = document.getElementById('price-table-body');
  if (!tbody) return;

  tbody.innerHTML = pricesData.map(item => `
    <tr class="hover:bg-purple-50/60 transition-colors">
      <td class="py-4 px-6 font-semibold text-gray-800">${item.service}</td>
      <td class="py-4 px-6 font-extrabold text-brand-purple">${item.price} <span class="text-xs font-normal text-gray-400">${item.unit}</span></td>
      <td class="py-4 px-6 text-gray-500 text-xs">${item.time}</td>
      <td class="py-4 px-6 text-right">
        <button onclick="openOrderModal('${item.service}')" class="px-3.5 py-1.5 bg-brand-purple text-white rounded-xl text-xs font-bold hover:bg-brand-darkPurple transition-colors">
          Pesan
        </button>
      </td>
    </tr>
  `).join('');
}

/* Render Customer Testimonials */
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  container.innerHTML = testimonialsData.map(item => `
    <div class="p-6 bg-purple-50/40 rounded-3xl border border-purple-100 space-y-4 flex flex-col justify-between">
      <div class="space-y-2">
        <div class="flex items-center gap-1 text-amber-400 text-sm">
          ${Array(item.rating).fill('<i class="ri-star-fill"></i>').join('')}
        </div>
        <p class="text-xs text-gray-600 italic leading-relaxed">"${item.comment}"</p>
      </div>
      <div class="flex items-center gap-3 pt-2">
        <img src="${item.avatar}" alt="${item.name}" class="w-10 h-10 rounded-full border border-purple-200">
        <div>
          <h4 class="font-bold text-xs text-gray-900">${item.name}</h4>
          <p class="text-[10px] text-gray-400">${item.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* Render FAQ Accordion */
function renderFAQ() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.innerHTML = faqData.map((item, idx) => `
    <div class="border border-purple-100 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button onclick="toggleFAQ(${idx})" class="w-full p-4 sm:p-5 text-left font-bold text-sm text-gray-800 flex justify-between items-center focus:outline-none">
        <span>${item.question}</span>
        <i id="faq-icon-${idx}" class="ri-add-line text-brand-purple text-xl transition-transform"></i>
      </button>
      <div id="faq-ans-${idx}" class="hidden p-5 pt-0 text-xs text-gray-500 leading-relaxed border-t border-purple-50">
        ${item.answer}
      </div>
    </div>
  `).join('');
}

/* FAQ Toggle Helper */
window.toggleFAQ = (index) => {
  const ans = document.getElementById(`faq-ans-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (ans.classList.contains('hidden')) {
    ans.classList.remove('hidden');
    icon.classList.replace('ri-add-line', 'ri-subtract-line');
  } else {
    ans.classList.add('hidden');
    icon.classList.replace('ri-subtract-line', 'ri-add-line');
  }
};

/* Interactive Calculator Logic */
function initCalculatorListeners() {
  const serviceSelect = document.getElementById('calc-service');
  const weightInput = document.getElementById('calc-weight');

  if (serviceSelect && weightInput) {
    serviceSelect.addEventListener('change', calculatePrice);
    weightInput.addEventListener('input', calculatePrice);
  }
}

function calculatePrice() {
  const rate = parseInt(document.getElementById('calc-service').value) || 0;
  const weight = parseFloat(document.getElementById('calc-weight').value) || 0;
  const total = Math.max(0, rate * weight);
  
  const formatted = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(total);
  document.getElementById('calc-result').innerText = formatted;
}

window.orderWithCalculation = () => {
  const weight = document.getElementById('calc-weight').value;
  const select = document.getElementById('calc-service');
  const serviceText = select.options[select.selectedIndex].text.split('(')[0].trim();
  
  document.getElementById('form-weight').value = `${weight} kg`;
  openOrderModal(serviceText);
};

/* Mobile Menu Drawer Toggle */
function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-link');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}

/* WhatsApp Modal Controls */
window.openOrderModal = (serviceName = '') => {
  const modal = document.getElementById('order-modal');
  if (serviceName) {
    const select = document.getElementById('form-service');
    if (select) {
      // Attempt matching option value
      for (let option of select.options) {
        if (option.value.toLowerCase().includes(serviceName.toLowerCase())) {
          select.value = option.value;
          break;
        }
      }
    }
  }
  modal.classList.remove('hidden');
};

window.closeOrderModal = () => {
  document.getElementById('order-modal').classList.add('hidden');
};

/* Submit WhatsApp Form */
window.sendWhatsApp = (e) => {
  e.preventDefault();
  const phone = "08xxxxxxxxxx"; // Placeholder Number
  const name = document.getElementById('form-name').value;
  const address = document.getElementById('form-address').value;
  const service = document.getElementById('form-service').value;
  const weight = document.getElementById('form-weight').value || "-";
  const method = document.getElementById('form-method').value;

  const text = `Halo Maqwa Laundry.%0ASaya ingin memesan layanan laundry.%0A%0A*Nama:* ${encodeURIComponent(name)}%0A*Alamat:* ${encodeURIComponent(address)}%0A*Jenis Laundry:* ${encodeURIComponent(service)}%0A*Berat/Jumlah:* ${encodeURIComponent(weight)}%0A*Metode:* ${encodeURIComponent(method)}%0A%0AMohon informasi lebih lanjut.%0ATerima kasih.`;

  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  closeOrderModal();
};
