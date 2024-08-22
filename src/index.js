let swiper;
let showMoreButton;
let isExpanded = false;
let expandIcon;
let collapseIcon;
let buttonText;



document.addEventListener('DOMContentLoaded', () => {
    // Get all elements with the class "tab-links" and set up a click event listener
    document.querySelectorAll('.tab-links a').forEach(tab => {
        tab.onclick = function(e) {
            e.preventDefault();

            // Remove "active" class from all tabs and hide all tab content
            document.querySelectorAll('.tab-links li').forEach(li => li.classList.remove('active'));
            document.querySelectorAll('.tabcontent').forEach(content => content.style.display = 'none');

            // Add "active" class to the clicked tab and show the corresponding tab content
            this.parentElement.classList.add('active');
            document.querySelector(this.getAttribute('href')).style.display = 'flex';
        };
    });

    // Optionally, activate the first tab by default
    document.querySelector('.tab-links li:first-child a').click();
});

function toggleText() {
    const moreText = document.getElementById("moreText");
    const btnText = document.getElementById("btnText");
    const showImg = document.getElementById("showImg")
    const hideImg = document.getElementById("hideImg")


    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        showImg.style.display = "none";
        hideImg.style.display = "block";
        btn.textContent = "Меньше"; // Change the button text to 'Read Less'
    } else {
        moreText.style.display = "none";
        hideImg.style.display = "none"
        showImg.style.display = "block";
        btn.textContent = "Читать далее"; // Reset the button text to 'Read More'
    }
}





function initSwiper(rows = 2) {
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 32,
      grid: {
        rows: rows,
        fill: 'row'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    },
    mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
    },
    // Improve touch support
    touchEventsTarget: 'container',
    touchRatio: 0.5,
    touchAngle: 45,
    simulateTouch: true,
    // Improve overall responsiveness
    speed: 400,
    preventInteractionOnTransition: false,
    });
}

function handleResize() {
  const windowWidth = window.innerWidth;
  showMoreButton = document.getElementById('show-more');

  if (windowWidth >= 1000) {
    showMoreButton.style.display = 'flex';
    if (swiper) swiper.destroy(true, true);
    initSwiper();
    updateSwiperHeight();
  } else {
    showMoreButton.style.display = 'none';
    if (swiper) swiper.destroy(true, true);
    initSwiper();
  }
}

function handleShowMore() {
  isExpanded = !isExpanded;
  updateSwiperHeight();
  updateButtonState();
}

function updateSwiperHeight() {
    const swiperContainer = document.querySelector('.swiper-container');
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (window.innerWidth >= 1000) {
      if (isExpanded) {
        swiperContainer.style.height = swiperWrapper.scrollHeight + 'px';
      } else {
        swiperContainer.style.height = (72 * 2 + 16) + 'px'; // Height of two rows
      }
    } else {
      swiperContainer.style.height = 'auto';
    }
  }

function updateButtonState() {
  const expandIcon = document.querySelector('.expand-icon');
  const collapseIcon = document.querySelector('.collapse-icon');
  const buttonText = showMoreButton.querySelector('span');

  if (isExpanded) {
    expandIcon.style.display = 'none';
    collapseIcon.style.display = 'inline';
    buttonText.textContent = 'Скрыть';
  } else {
    expandIcon.style.display = 'inline';
    collapseIcon.style.display = 'none';
    buttonText.textContent = 'Показать все';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  showMoreButton = document.getElementById('show-more');
  showMoreButton.addEventListener('click', handleShowMore);
  
  window.addEventListener('resize', handleResize);

  // Initial setup
  handleResize();
});

// Existing toggleText function remains unchanged



// sidebar

document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('openSidebarBtn');
  const closeBtn = document.getElementById('closeSidebarBtn');

  openBtn.addEventListener('click', function() {
      sidebar.classList.add('open');
  });

  closeBtn.addEventListener('click', function() {
      sidebar.classList.remove('open');
  });

  // Закрывать меню при клике вне его
  document.addEventListener('click', function(event) {
      if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
          sidebar.classList.remove('open');
      }
  });

  // Ваш существующий код для Swiper и других функций
  // ...
});

// Остальной JavaScript код остается без изменений


// grid

// Existing code...

// Grid functionality
document.addEventListener('DOMContentLoaded', function() {
  const gridContainer = document.querySelector('.grid-container');
  const showMoreButtonGrid = document.getElementById('show-more-grid');
  const expandIconGrid = showMoreButtonGrid.querySelector('.expand-icon');
  const collapseIconGrid = showMoreButtonGrid.querySelector('.collapse-icon');
  const buttonTextGrid = showMoreButtonGrid.querySelector('span');
  let isExpandedGrid = false;

  function updateGridVisibility() {
      const windowWidth = window.innerWidth;
      const gridItems = gridContainer.querySelectorAll('.grid-item');
      let visibleItems;

      if (windowWidth >= 1000) {
          visibleItems = 4;
      } else if (windowWidth >= 500) {
          visibleItems = 3;
      } else {
          visibleItems = 1;
      }

      gridItems.forEach((item, index) => {
          if (index < visibleItems || isExpandedGrid) {
              item.classList.remove('hidden');
          } else {
              item.classList.add('hidden');
          }
      });

      showMoreButtonGrid.style.display = gridItems.length > visibleItems ? 'flex' : 'none';
  }

  function toggleExpandGrid() {
      isExpandedGrid = !isExpandedGrid;
      updateGridVisibility();
      
      if (isExpandedGrid) {
          expandIconGrid.style.display = 'none';
          collapseIconGrid.style.display = 'inline';
          buttonTextGrid.textContent = 'Скрыть';
      } else {
          expandIconGrid.style.display = 'inline';
          collapseIconGrid.style.display = 'none';
          buttonTextGrid.textContent = 'Показать все';
      }
  }

  showMoreButtonGrid.addEventListener('click', toggleExpandGrid);
  window.addEventListener('resize', updateGridVisibility);

  // Initial call to set up the grid
  updateGridVisibility();
});

// Existing code for Swiper and other functionalities...

// sidebar feedback

document.addEventListener('DOMContentLoaded', function() {
  // Существующий код...

  const feedbackSidebar = document.getElementById('feedbackSidebar');
  const openFeedbackBtn = document.querySelector('.header__button-repair');
  const closeFeedbackBtn = document.getElementById('closeFeedbackBtn');

  openFeedbackBtn.addEventListener('click', function() {
      feedbackSidebar.classList.add('open');
  });

  closeFeedbackBtn.addEventListener('click', function() {
      feedbackSidebar.classList.remove('open');
  });

  // Закрывать меню обратной связи при клике вне его
  document.addEventListener('click', function(event) {
      if (!feedbackSidebar.contains(event.target) && !openFeedbackBtn.contains(event.target)) {
          feedbackSidebar.classList.remove('open');
      }
  });

  // Предотвращение отправки формы (для демонстрации)
  const feedbackForm = document.querySelector('.feedback-form');
  feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Форма отправлена!');
      feedbackSidebar.classList.remove('open');
  });
});