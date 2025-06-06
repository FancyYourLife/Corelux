document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImage = document.getElementById("modalImage");
    var modalCaption = document.getElementById("modalCaption");
    var galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            modal.style.display = "block";
            modalImage.src = this.src;
            modalCaption.innerHTML = this.alt;
        });
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal content, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});