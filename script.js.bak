/**
 * script.js
 * 
 * This script handles interactive elements on the Sova project page,
 * including theme switching, mobile navigation, and the narration modal.
 */

// --- Theme Toggle Logic ---
const htmlElement = document.getElementById('htmlElement');
const themeToggle = document.getElementById('theme-toggle');
const darkModeSvg = document.getElementById('dark-mode-svg');
const lightModeSvg = document.getElementById('light-mode-svg');

// Apply saved theme on load, default to dark if no theme is saved
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    htmlElement.classList.add('light');
    darkModeSvg.classList.add('hidden');
    lightModeSvg.classList.remove('hidden');
} else {
    htmlElement.classList.remove('light');
    darkModeSvg.classList.remove('hidden');
    lightModeSvg.classList.add('hidden');
    if (!savedTheme) {
        localStorage.setItem('theme', 'dark');
    }
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('light');
    darkModeSvg.classList.toggle('hidden');
    lightModeSvg.classList.toggle('hidden');
    if (htmlElement.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

// --- Mobile Menu Toggle Logic ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

if (mobileMenuButton && mobileMenu && hamburgerIcon && closeIcon) { // Ensure elements exist before adding listeners
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
}


// --- Generic Narration Modal Setup Function ---
function setupNarrationModal(openBtnId, modalId, audioId, playPauseBtnId, playIconId, pauseIconId, progressBarId, currentTimeId, totalDurationId, speedSelectId, soundWaveContainerSelector) {
    const openNarrationModalBtn = document.getElementById(openBtnId);
    const narrationModal = document.getElementById(modalId);
    if (!narrationModal) return; // Exit if modal itself doesn't exist

    const closeModalBtn = narrationModal.querySelector('#close-modal');
    const audioPlayer = document.getElementById(audioId);
    const playPauseBtn = narrationModal.querySelector('#' + playPauseBtnId);
    const playIcon = narrationModal.querySelector('#' + playIconId);
    const pauseIcon = narrationModal.querySelector('#' + pauseIconId);
    const progressBar = narrationModal.querySelector('#' + progressBarId);
    const currentTimeSpan = narrationModal.querySelector('#' + currentTimeId);
    const totalDurationSpan = narrationModal.querySelector('#' + totalDurationId);
    const speedSelect = narrationModal.querySelector('#' + speedSelectId);
    const soundBars = narrationModal.querySelectorAll(soundWaveContainerSelector + ' .sound-bar');

    // Only proceed if all core elements exist within the modal context
    if (!openNarrationModalBtn || !closeModalBtn || !audioPlayer || !playPauseBtn || !playIcon || !pauseIcon || !progressBar || !currentTimeSpan || !totalDurationSpan || !speedSelect) {
        // console.warn("Narration modal elements not fully found, skipping setup for:", audioId);
        return;
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    function updateProgressBar() {
        if (audioPlayer.duration) {
            progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
        }
    }

    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            soundBars.forEach(bar => bar.classList.remove('paused'));
        } else {
            audioPlayer.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            soundBars.forEach(bar => bar.classList.add('paused'));
        }
    }

    openNarrationModalBtn.addEventListener('click', () => {
        narrationModal.classList.remove('hidden');
        narrationModal.classList.add('flex');
        audioPlayer.currentTime = 0;
        audioPlayer.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        soundBars.forEach(bar => bar.classList.remove('paused'));
    });

    closeModalBtn.addEventListener('click', () => {
        narrationModal.classList.add('hidden');
        narrationModal.classList.remove('flex');
        audioPlayer.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        soundBars.forEach(bar => bar.classList.add('paused'));
        audioPlayer.currentTime = 0;
        progressBar.value = 0;
        currentTimeSpan.textContent = "0:00";
    });

    playPauseBtn.addEventListener('click', togglePlayPause);

    audioPlayer.addEventListener('loadedmetadata', () => {
        totalDurationSpan.textContent = formatTime(audioPlayer.duration);
        progressBar.max = 100;
        updateProgressBar();
    });

    audioPlayer.addEventListener('timeupdate', updateProgressBar);

    audioPlayer.addEventListener('ended', () => {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        soundBars.forEach(bar => bar.classList.add('paused'));
        progressBar.value = 0;
        currentTimeSpan.textContent = "0:00";
        audioPlayer.currentTime = 0;
    });

    progressBar.addEventListener('input', () => {
        const seekTime = (parseFloat(progressBar.value) / 100) * audioPlayer.duration;
        if (!isNaN(seekTime)) {
            audioPlayer.currentTime = seekTime;
        }
    });

    speedSelect.addEventListener('change', (event) => {
        audioPlayer.playbackRate = parseFloat(event.target.value);
    });

    window.addEventListener('load', () => {
        if (audioPlayer.paused) {
            soundBars.forEach(bar => bar.classList.add('paused'));
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            currentTimeSpan.textContent = "0:00";
            if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
                totalDurationSpan.textContent = formatTime(audioPlayer.duration);
            } else {
                audioPlayer.addEventListener('loadedmetadata', () => {
                    totalDurationSpan.textContent = formatTime(audioPlayer.duration);
                }, { once: true });
            }
        }
    });
}

// --- Generic Image Lightbox Setup Function (moved and enhanced) ---
function setupImageLightbox(triggerSelector, lightboxId, imageId, closeBtnId) {
    const lightbox = document.getElementById(lightboxId);
    const lightboxImage = document.getElementById(imageId);
    const lightboxCloseBtn = document.getElementById(closeBtnId);
    let isImageZoomed = false; // State for zoom

    function resetImageZoom() {
        lightboxImage.style.transform = '';
        lightboxImage.style.transformOrigin = '';
        lightboxImage.style.cursor = 'zoom-in';
        lightboxImage.classList.add('object-contain', 'max-w-full', 'max-h-[90vh]'); // Re-apply initial fit

        // Reset parent container styles
        if (lightboxImage.parentElement) {
            lightboxImage.parentElement.style.overflow = 'auto'; // Keep auto for potentially large images
            lightboxImage.parentElement.style.maxWidth = 'calc(100vw - 2rem)'; // Keep full width
            lightboxImage.parentElement.style.maxHeight = 'calc(100vh - 2rem)'; // Keep full height
            lightboxImage.parentElement.style.alignItems = 'center'; // Center initially
            lightboxImage.parentElement.style.justifyContent = 'center'; // Center initially
            lightboxImage.parentElement.scrollTo(0, 0); // Scroll to top-left on reset
        }
        isImageZoomed = false;
    }

    if (lightbox && lightboxImage && lightboxCloseBtn) {
        document.querySelectorAll(triggerSelector).forEach(trigger => {
            trigger.addEventListener('click', (event) => {
                const imageSrc = event.currentTarget.dataset.image; // Assumes dataset.image for buttons
                if (imageSrc) {
                    lightboxImage.src = imageSrc;
                    lightbox.classList.remove('hidden');
                    lightbox.classList.add('flex');
                    document.body.classList.add('overflow-hidden');
                    resetImageZoom(); // Ensure reset when opening

                    // Remove fit classes temporarily, will be re-added by resetImageZoom() then removed again if zoomed
                    lightboxImage.classList.remove('max-w-full', 'max-h-[90vh]', 'object-contain');
                    
                    // Initial setup of parent for scrollability and centering
                    if (lightboxImage.parentElement) {
                        lightboxImage.parentElement.style.maxWidth = 'calc(100vw - 2rem)';
                        lightboxImage.parentElement.style.maxHeight = 'calc(100vh - 2rem)';
                        lightboxImage.parentElement.style.overflow = 'auto';
                        lightboxImage.parentElement.style.alignItems = 'center';
                        lightboxImage.parentElement.style.justifyContent = 'center';
                    }
                    // Re-apply initial fit to image after parent setup
                    lightboxImage.classList.add('max-w-full', 'max-h-[90vh]', 'object-contain');
                }
            });
        });

        lightboxCloseBtn.addEventListener('click', () => {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
            lightboxImage.src = '';
            document.body.classList.remove('overflow-hidden');
            resetImageZoom(); // Reset on close
        });

        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) { // Only close if clicking the backdrop
                lightbox.classList.add('hidden');
                lightbox.classList.remove('flex');
                lightboxImage.src = '';
                document.body.classList.remove('overflow-hidden');
                resetImageZoom(); // Reset on close
            }
        });

        // Add zoom functionality to the image itself
        lightboxImage.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent closing lightbox when clicking image
            if (!isImageZoomed) {
                lightboxImage.style.transform = 'scale(2)'; // Zoom level
                lightboxImage.style.transformOrigin = '0 0'; // Zoom from top-left
                lightboxImage.style.cursor = 'zoom-out';
                // Remove initial fit classes when zoomed
                lightboxImage.classList.remove('max-w-full', 'max-h-[90vh]', 'object-contain');
                
                // Adjust parent alignment for easier scrolling when zoomed
                if (lightboxImage.parentElement) {
                    lightboxImage.parentElement.style.alignItems = 'flex-start'; // Align top-left for easier scrolling
                    lightboxImage.parentElement.style.justifyContent = 'flex-start';
                }

            } else {
                resetImageZoom(); // Reset to initial state
                // After resetting, initial fit classes are re-applied by resetImageZoom
            }
            isImageZoomed = !isImageZoomed;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // --- Chimera Page Specific Setup ---
    // Check if on chimera.html by looking for a unique ID on the body or the audio element
    if (document.body.id === 'chimera-page' && document.getElementById('open-narration-modal') && document.getElementById('chimera-audio')) {
        setupNarrationModal(
            'open-narration-modal',
            'narration-modal',
            'chimera-audio', // Specific audio ID for chimera page
            'play-pause-btn',
            'play-icon',
            'pause-icon',
            'progress-bar',
            'current-time',
            'total-duration',
            'speed-select',
            '.sound-wave-container'
        );
    }

    // --- Sova Page Specific Setup ---
    // Check if on sova.html by looking for unique elements: the narration button and audio element
    if (document.getElementById('open-narration-modal') && document.getElementById('sova-audio')) {
        setupNarrationModal(
            'open-narration-modal',
            'narration-modal',
            'sova-audio', // Specific audio ID for Sova page
            'play-pause-btn',
            'play-icon',
            'pause-icon',
            'progress-bar',
            'current-time',
            'total-duration',
            'speed-select',
            '.sound-wave-container'
        );
    }

    // --- Achievements Page Specific Setup ---
    if (document.body.id === 'achievements-page') {
        const choiceModal = document.getElementById('choice-modal');
        const viewProjectsBtn = document.getElementById('view-projects-btn');
        const viewAchievementsBtn = document.getElementById('view-achievements-btn');
        const projectsContent = document.getElementById('projects-content');
        const achievementsContent = document.getElementById('achievements-content');
        const switchToAchievementsBtn = document.getElementById('switch-to-achievements-btn-from-projects');
        const switchToProjectsBtn = document.getElementById('switch-to-projects-btn-from-achievements');

        // New elements for extra-curricular achievements
        const viewExtraCurricularBtn = document.getElementById('view-extra-curricular-btn');
        const extraCurricularAchievementsContainer = document.getElementById('extra-curricular-achievements-container');

        function showSection(sectionId) {
            if (choiceModal) {
                choiceModal.classList.add('hidden');
                choiceModal.classList.remove('flex');
            }

            if (projectsContent) projectsContent.classList.add('hidden');
            if (achievementsContent) achievementsContent.classList.add('hidden');
            // Ensure extra-curricular is hidden when achievements section is generally shown/switched to
            if (extraCurricularAchievementsContainer) extraCurricularAchievementsContainer.classList.add('hidden');

            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                // Scroll to the top of the main content area after section change
                document.querySelector('main').scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            
            // Update URL hash without causing a page reload
            history.pushState(null, '', `#${sectionId}`);
        }

        // Initial load logic based on URL hash
        const currentHash = window.location.hash;
        if (currentHash === '#projects-content') {
            showSection('projects-content');
        } else if (currentHash === '#achievements-content') {
            showSection('achievements-content');
        } else {
            // No specific hash, show the choice modal if it exists
            if (choiceModal) {
                choiceModal.classList.remove('hidden');
                choiceModal.classList.add('flex');
            }
            // Ensure projects and achievements are hidden by default
            if (projectsContent) projectsContent.classList.add('hidden');
            if (achievementsContent) achievementsContent.classList.add('hidden');
            if (extraCurricularAchievementsContainer) extraCurricularAchievementsContainer.classList.add('hidden'); // Also hide the extra-curricular container
        }

        // Event listeners for the choice modal buttons
        if (viewProjectsBtn) viewProjectsBtn.addEventListener('click', () => showSection('projects-content'));
        if (viewAchievementsBtn) viewAchievementsBtn.addEventListener('click', () => showSection('achievements-content'));

        // Event listener for the new Extra-Curricular Achievements button
        if (viewExtraCurricularBtn && extraCurricularAchievementsContainer) {
            viewExtraCurricularBtn.addEventListener('click', () => {
                extraCurricularAchievementsContainer.classList.toggle('hidden');
                // If it's visible, scroll to it
                if (!extraCurricularAchievementsContainer.classList.contains('hidden')) {
                    extraCurricularAchievementsContainer.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }

        // Event listeners for the switch buttons within sections
        if (switchToAchievementsBtn) switchToAchievementsBtn.addEventListener('click', () => showSection('achievements-content'));
        if (switchToProjectsBtn) switchToProjectsBtn.addEventListener('click', () => showSection('projects-content'));
        
        // --- Project Card Toggle Functionality ---
        document.querySelectorAll('.project-card').forEach(card => {
            const toggleButton = card.querySelector('.project-toggle');
            const details = card.querySelector('.project-details');
            const toggleIcon = card.querySelector('.toggle-icon');

            if (toggleButton && details && toggleIcon) {
                toggleButton.addEventListener('click', () => {
                    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
                    toggleButton.setAttribute('aria-expanded', !isExpanded);
                    details.classList.toggle('hidden');
                    toggleIcon.textContent = isExpanded ? '+' : '-';
                });
            }
        });

        // The original image lightbox setup for achievements.html, now uses the generic function
        setupImageLightbox('.lightbox-trigger', 'image-lightbox', 'lightbox-image', 'lightbox-close-btn');
    }

    // --- Education Page Specific Setup ---
    if (document.body.id === 'edu-page') {
        // PDF Lightbox functionality (already here)
        const pdfLightbox = document.getElementById('pdf-lightbox');
        const pdfViewer = document.getElementById('pdf-viewer');
        const pdfLightboxCloseBtn = document.getElementById('pdf-lightbox-close-btn');

        if (pdfLightbox && pdfViewer && pdfLightboxCloseBtn) {
            document.querySelectorAll('.view-pdf-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const pdfSrc = event.currentTarget.dataset.pdf; // Use currentTarget to get the button
                    if (pdfSrc) {
                        pdfViewer.src = pdfSrc;
                        pdfLightbox.classList.remove('hidden');
                        pdfLightbox.classList.add('flex');
                        // Add overflow-hidden to body to prevent scrolling when modal is open
                        document.body.classList.add('overflow-hidden');
                    }
                });
            });

            pdfLightboxCloseBtn.addEventListener('click', () => {
                pdfLightbox.classList.add('hidden');
                pdfLightbox.classList.remove('flex');
                pdfViewer.src = ''; // Clear iframe source
                document.body.classList.remove('overflow-hidden');
            });

            pdfLightbox.addEventListener('click', (event) => {
                // Only close if clicking the backdrop, not the iframe content or the inner div
                if (event.target === pdfLightbox) {
                    pdfLightbox.classList.add('hidden');
                    pdfLightbox.classList.remove('flex');
                    pdfViewer.src = '';
                    document.body.classList.remove('overflow-hidden');
                }
            });
        }

        // Image Lightbox setup for edu.html (uses .view-image-btn)
        setupImageLightbox('.view-image-btn', 'image-lightbox', 'lightbox-image', 'lightbox-close-btn');
    }
});
