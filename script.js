function showContent(contentId) {
    
    var contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(function(section) {
        section.style.display = 'none';
    });

    document.getElementById(contentId).style.display = 'block';
}

document.getElementById("startOrderBtn").addEventListener("click", function() {
  
    var orderForm = document.getElementById("orderForm");
    orderForm.style.display = (orderForm.style.display === "none") ? "block" : "none";
});