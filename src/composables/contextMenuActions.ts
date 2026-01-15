export function copyImage(src: string) {
	fetch(src)
		.then(response => response.blob())
		.then(blob => {
			const item = new ClipboardItem({ [blob.type]: blob });
			navigator.clipboard.write([item]);
		})
		.catch(err => {
			console.error('Failed to copy image: ', err);
		});
}

export function downloadImage(src: string) {
	fetch(src)
		.then(response => response.blob())
		.then(blob => {
			const link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = getFilenameFromUrl(src) || 'image.png';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(link.href);
		})
		.catch(err => {
			console.error('Failed to download image: ', err);
		});
}

function getFilenameFromUrl(url: string): string {
	try {
		const parsedUrl = new URL(url);
		const pathname = parsedUrl.pathname;
		return pathname.substring(pathname.lastIndexOf('/') + 1);
	} catch {
		// If URL parsing fails, try to extract filename using string operations
		const parts = url.split('/');
		const filename = parts[parts.length - 1];
		return filename.includes('?') ? filename.split('?')[0] : filename;
	}
}

export function scrollToTop() {
	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

export function back() {
	window.history.back();
}

export function forward() {
	window.history.forward();
}

export function refresh() {
	window.location.reload();
}

export function copyText(text: string) {
	navigator.clipboard.writeText(text);
}

export function openInNewTab(url: string) {
	window.open(url, '_blank');
}