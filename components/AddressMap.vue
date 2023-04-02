<template>
    <div class="mapouter">
        <div class="gmap_canvas">
            <iframe width="100%" height="100%" id="gmap_canvas"
                src="https://maps.google.com/maps?q=Rock Heights&t=&z=16&ie=UTF8&iwloc=&output=embed" frameborder="0"
                scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <a href="https://www.google.com/maps?ll=17.450602,78.3787&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=14006617051100422929">Rok Heights</a>
        </div>
    </div>
</template>
<style>
.mapouter {
    position: relative;
    text-align: right;
    height: 80vh;
    width: 100%;
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 100%;
    width: 100%;
}
</style>
