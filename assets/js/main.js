/**
 * Chemea™ OCB - Main JavaScript
 * Minimal vanilla JS for progressive enhancement
 */

document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeThemeToggle();
  initializeAccordions();
  initializeSmoothScroll();
  initializeFormValidation();
});

/**
 * Initialize mobile navigation toggle
 */
function initializeNavigation() {
  const navButton = document.querySelector('[aria-label="Menu"]');
  const navMenu = document.querySelector('nav');
  
  if (!navButton || !navMenu) return;

  navButton.addEventListener('click', function() {
    navMenu.classList.toggle('hidden');
    navButton.setAttribute('aria-expanded', 
      navButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
  });

  // Close menu on link click
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.add('hidden');
      navButton.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Initialize dark/light theme toggle
 */
function initializeThemeToggle() {
  const themeToggle = document.querySelector('[data-theme-toggle]');
  if (!themeToggle) return;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

  function setTheme(theme) {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateThemeToggleText();
  }

  function updateThemeToggleText() {
    const isDark = document.documentElement.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  }

  setTheme(currentTheme);
  themeToggle.addEventListener('click', () => {
    const newTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
}

/**
 * Initialize accordion functionality (for FAQ, etc.)
 */
function initializeAccordions() {
  const accordions = document.querySelectorAll('details');
  
  accordions.forEach(accordion => {
    accordion.addEventListener('toggle', function() {
      if (this.open) {
        // Close other accordions (optional - for single-open behavior)
        // accordions.forEach(other => {
        //   if (other !== this) other.open = false;
        // });
      }
    });
  });
}

/**
 * Initialize smooth scroll behavior for anchor links
 */
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Update URL without page reload
      window.history.pushState(null, '', href);
    });
  });
}

/**
 * Initialize basic form validation
 */
function initializeFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = this.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('border-red-500');
          field.setAttribute('aria-invalid', 'true');
        } else {
          field.classList.remove('border-red-500');
          field.setAttribute('aria-invalid', 'false');
        }
      });

      if (!isValid) {
        e.preventDefault();
        console.warn('Form validation failed: Please fill all required fields.');
      }
    });

    // Clear error state on input
    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('input', function() {
        if (this.value.trim()) {
          this.classList.remove('border-red-500');
          this.setAttribute('aria-invalid', 'false');
        }
      });
    });
  });
}

/**
 * Utility: Copy to clipboard for code blocks
 */
function setupCopyButtons() {
  document.querySelectorAll('pre').forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.type = 'button';
    
    button.addEventListener('click', () => {
      const code = block.querySelector('code');
      if (code) {
        navigator.clipboard.writeText(code.textContent).then(() => {
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        });
      }
    });
    
    block.parentNode.insertBefore(button, block);
  });
}

/**
 * Utility: Log page performance metrics
 */
function logPerformanceMetrics() {
  if (window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    const metrics = {
      'Time to First Byte (TTFB)': timing.responseStart - timing.navigationStart,
      'DOM Content Loaded': timing.domContentLoadedEventEnd - timing.navigationStart,
      'Page Load Time': timing.loadEventEnd - timing.navigationStart
    };
    console.log('Performance Metrics:', metrics);
  }
}

// Call performance logging on load
window.addEventListener('load', logPerformanceMetrics);

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializeNavigation,
    initializeThemeToggle,
    initializeAccordions,
    initializeSmoothScroll,
    initializeFormValidation,
    setupCopyButtons,
    logPerformanceMetrics
  };
}
