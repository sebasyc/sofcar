export function initFavicon() {
    const color = getComputedStyle(document.documentElement)
    .getPropertyValue('--secondary-color').trim()
    
    const svg = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_300_126)">
            <path d="M3.95 9.01L11.99 1.91L16 5.45V3.54L11.99 0L3 7.94L3.95 9.01Z" fill="${color}"/>
            <path d="M16 10.54L11.43 14.58H9.66L16 8.94V7.07L11.99 3.52L4.01 10.57L1.1 8L10.16 0H4.02L0 3.55V5.45L4.55 1.43H6.38L0 7.07V8.93L4.01 12.48L11.99 5.43L14.9 8L5.84 16H11.99L16 12.46V10.54Z" fill="${color}"/>
            <path d="M12.05 6.98999L4.01 14.09L0 10.55V12.45L4.01 16L13 8.05999L12.05 6.98999Z" fill="${color}"/>
        </g>
        <defs>
            <clipPath id="clip0_300_126">
                <rect width="16" height="16" fill="white"/>
            </clipPath>
        </defs>
    </svg>`
    
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    
    document.querySelector("link[rel='icon']").href = url
}