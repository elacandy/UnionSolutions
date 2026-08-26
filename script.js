/**
 * UnionSolutions Page Routing & Deep Linking System
 */

const VALID_PAGES = ['home', 'services', 'contact', 'union365', 'infavour', 'membermate', 'unioninbox'];

/**
 * Page routing & tab switching with optional target section scroll
 * @param {string} pageId - Target page identifier ('home', 'services', 'contact', 'union365', 'infavour', 'membermate', 'unioninbox')
 * @param {string} [targetSectionId] - Optional element ID to scroll to after page switch
 * @param {boolean} [updateHistory=true] - Whether to update browser URL hash
 */
function showPage(pageId, targetSectionId, updateHistory = true) {
  const cleanId = (pageId || 'home').replace(/^#/, '').replace(/^page-/, '').toLowerCase();
  const targetId = VALID_PAGES.includes(cleanId) ? cleanId : 'home';

  document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const targetPage = document.getElementById('page-' + targetId);
  const targetNav = document.getElementById('nav-' + targetId);

  if (targetPage) {
    targetPage.classList.add('active');
  }

  if (targetNav) {
    targetNav.classList.add('active');
  } else if (['union365', 'infavour', 'membermate', 'unioninbox'].includes(targetId)) {
    document.getElementById('nav-services')?.classList.add('active');
  }

  // Update browser URL hash for shareable deep links
  if (updateHistory) {
    const hash = targetId === 'home' ? '' : '#' + targetId;
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }
  }

  if (targetSectionId) {
    setTimeout(() => {
      const el = document.getElementById(targetSectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/**
 * Direct navigation from Home Page cards to specific software sections on Ecosystem page
 * @param {string} serviceKey - 'union365', 'infavour', 'membermate', 'unioninbox'
 */
function navigateToService(serviceKey) {
  showPage(serviceKey);
}

/**
 * Smooth scroll to element
 */
function scrollToSection(sectionId, event) {
  if (event) event.preventDefault();
  const el = document.getElementById(sectionId) || document.querySelector('.' + sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Initialize page based on URL hash on load
 */
function handleHashRouting() {
  const rawHash = (window.location.hash || '').replace(/^#/, '').replace(/^page-/, '');
  if (rawHash && VALID_PAGES.includes(rawHash.toLowerCase())) {
    showPage(rawHash.toLowerCase(), null, false);
  }
}

// Execute immediately upon script load and bind all lifecycle events
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', handleHashRouting);
} else {
  handleHashRouting();
}
window.addEventListener('load', handleHashRouting);
window.addEventListener('hashchange', handleHashRouting);
window.addEventListener('popstate', handleHashRouting);

/**
 * Contact form submission handler
 */
function handleFormSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('full-name')?.value.trim() || '';
  const union = document.getElementById('union-name')?.value.trim() || '';
  const email = document.getElementById('work-email')?.value.trim() || '';
  const role = document.getElementById('user-role')?.value.trim() || '';
  const roleText = role ? ` (${role})` : '';

  const feedback = document.getElementById('form-feedback');
  if (feedback) {
    feedback.innerHTML = `
      <div class="feedback-title-row">
        <svg class="feedback-check-svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <strong>Consultation Request Received</strong>
      </div>
      <p>Thank you, <strong>${name}</strong>${roleText}. A UnionSolutions Canadian implementation specialist has received your inquiry for <strong>${union}</strong> and will reach out to <strong>${email}</strong> within 1 business day.</p>
    `;
    feedback.classList.add('show');
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  const form = document.getElementById('contact-form');
  if (form) form.reset();
}