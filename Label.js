function changeLanguage(lang) {
    var vietnameseElements = document.querySelectorAll('.vietnamese');
    var japaneseElements = document.querySelectorAll('.japanese');

    if (lang === 'vi') {
        showElements(vietnameseElements);
        hideElements(japaneseElements);
    } else if (lang === 'ja') {
        showElements(japaneseElements);
        hideElements(vietnameseElements);
    }
}

function showElements(elements) {
    elements.forEach(function(element) {
        element.style.display = 'block';
    });
}

function hideElements(elements) {
    elements.forEach(function(element) {
        element.style.display = 'none';
    });
}

// Set initial language to Vietnamese
window.onload = function() {
    changeLanguage('vi');
}
        
   
 