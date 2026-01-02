// Generate circular favicon from image
export function generateCircularFavicon() {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  // Set canvas size for favicon (usually 192x192 or larger)
  const size = 192
  canvas.width = size
  canvas.height = size

  // Create image element
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = '/src/image.jpg'

  img.onload = () => {
    // Fill with white background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, size, size)

    // Create circular clipping path
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
    ctx.clip()

    // Draw image centered in circle
    const imgWidth = img.width
    const imgHeight = img.height
    const ratio = Math.max(size / imgWidth, size / imgHeight)

    const scaledWidth = imgWidth * ratio
    const scaledHeight = imgHeight * ratio
    const x = (size - scaledWidth) / 2
    const y = (size - scaledHeight) / 2

    ctx.drawImage(img, x, y, scaledWidth, scaledHeight)

    // Convert to data URL and set as favicon
    const faviconLink = document.querySelector("link[rel*='icon']") || document.createElement('link')
    faviconLink.rel = 'icon'
    faviconLink.href = canvas.toDataURL('image/png')
    document.head.appendChild(faviconLink)
  }
}

// Call on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', generateCircularFavicon)
} else {
  generateCircularFavicon()
}
