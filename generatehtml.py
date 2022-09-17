f = open("output.html","x")

for i in range(100):
    f.write('''
<div class="col-xl-1 col-lg-1 col-md-6 col-sm-1">
    <div class="gallery-item h-100">
        <img src="img/patacones/%i.png" class="img-fluid" alt="Patacon Friend #%i">
        <div class="gallery-links d-flex align-items-center justify-content-center">
            <a href="img/patacones/%i.png" title="Patacon Friend #%i"
                class="glightbox preview-link"><i class="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
        </div>
    </div>
</div><!-- End Gallery Item -->\n''' %(i,i,i,i))