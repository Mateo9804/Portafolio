// Scroll animation utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        // Optional: stop observing after animation
        // observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Function to observe elements
  const observeElements = () => {
    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
      observer.observe(el)
    })
  }

  // Initial observation
  observeElements()

  // Re-observe when new content is loaded (for dynamic content)
  const mutationObserver = new MutationObserver(() => {
    observeElements()
  })

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  })

  return () => {
    observer.disconnect()
    mutationObserver.disconnect()
  }
}

