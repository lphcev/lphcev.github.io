const headerlinks = document.querySelectorAll('.headerlink');

if (headerlinks) {
	headerlinks.forEach(headerlink => {
		const i = document.createElement('i');
		i.classList.add('fas', 'fa-fw', 'fa-link', 'fa-sm');
		i.style.marginRight = '.5rem';
		i.style.opacity = '.3';
		headerlink.parentNode.insertBefore(i, headerlink);
	});
}