 // Leaflet mapa sa tačnim koordinatama
  const map = L.map('map');
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
   const markers = [
   { coords: [44.79097, 20.27168], name: 'Surčin' },


    { coords: [44.81622, 20.39465], name: 'Novi Beograd' },
    { coords: [44.85287, 20.36925], name: 'Zemun' }
  ];
const markerGroup = L.featureGroup();
  markers.forEach(m => {
      const marker = L.marker(m.coords).addTo(map).bindPopup('<b>' + m.name + '</b>');
      markerGroup.addLayer(marker);
  });
map.fitBounds(markerGroup.getBounds(), { padding: [50, 50] });
 // Animacija fade-in na scroll
  const faders = document.querySelectorAll('.animate-fadeInUp');
  const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('fadeInUp-show');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));
    // Back to top dugme
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 400) backToTop.style.display = 'block';
    else backToTop.style.display = 'none';
  });
  backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
    // Automatsko zatvaranje menija kad se klikne link
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
    Fancybox.bind("[data-fancybox='gallery']", {
    Thumbs: { autoStart: true },
    Toolbar: { display: ["close", "thumbs", "zoom"] }
  });
  document.getElementById("pw-year").textContent = new Date().getFullYear();