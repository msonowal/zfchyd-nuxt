<template>
  <section class="bg-gray-900 text-white">
    <div class="flex justify-center pt-1">
          <video controls autoplay class="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-2">
            <!-- muted -->
              <!-- <source src="/media/cc0-videos/flower.webm" type="video/webm"> -->

              <source src="/zubeen-gard-hyderbad-2023.mp4" type="video/mp4">

              Download the
              <!-- <a href="/media/cc0-videos/flower.webm">WEBM</a> -->
              <!-- or -->
              <a href="/zubeen-gard-hyderbad-2023.mp4">MP4</a>
              video.
          </video>
        </div>
    <div class="mx-auto max-w-screen-xl px-4 pb-14 pt-4 lg:flex min-h-fit lg:items-center">
      <div class="mx-auto max-w-3xl text-center">

        <h1
          class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          ZUBEEN GARG FAN CLUB of HYDERABAD

          <span class="sm:block text-2xl"> WELCOMES YOU. </span>
        </h1>

        <h2
          class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-lg font-extrabold text-transparent sm:text-4xl">
          Join Us on 7th April 2023
          <br>

          <span class="sm:block text-4xl md:text-6xl"> Zubeen Night</span>
        </h2>

        <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
          Watch this space, for more information!
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <!-- <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="mailto:admin@zfchyd.com?subject=Website Contact Us!"
        >
          Contact US
        </a> -->

          <a class="block w-full rounded border border-yellow-600 bg-gradient-to-r from-red-600 to-yellow-400 px-12 py-3 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto"
            href="tel:7989823144">
            Call US
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="bg-gradient-to-r from-red-600 via-yellow-400 to-pink-500">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-5xl font-bold text-white mb-4">Zubeen Garg Live in Concert</h1>
        <p class="text-lg text-white mb-8">Join us for a night of music, dance, and fun!</p>
        <a href="#" class="bg-white text-gray-800 rounded-full py-2 px-8 text-lg font-semibold hover:bg-gray-200 transition duration-300">Get Tickets</a>
      </div>
    </div> -->

  <!-- Event Details -->
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold mb-4">Event Details</h2>
        <p class="text-lg mb-4"><strong>Date:</strong> Friday, April 7, 2023</p>
        <p class="text-lg mb-4"><strong>Time:</strong> 7:00 PM onwards</p>
        <p class="text-lg mb-4"><strong>Location:</strong> Shilparam, Hitech City</p>
        <a href="tel:7989823144"
          class="bg-red-600 text-white rounded-full py-2 px-8 text-lg font-semibold hover:bg-red-700 transition duration-300">
          <!-- Buy Tickets Now -->
          Call for Tickets
        </a>
      </div>
      <div class="text-center md:col-span-2 pb-28 md:pb-0">
        <h2 class="text-3xl font-bold mb-4">About the Event</h2>
        <p class="text-lg mb-4">Our heartthrob Zubeen Garg, one of the true artist and musician of our time, is coming to
          Hyderbad for a night of music, dance, and entertainment. With his unique voice and eclectic music style, Zubeen
          Garg has won the hearts of millions of fans across the globe. This is a concert you do not want to miss!</p>
        <p class="text-lg mb-4">Join us for an unforgettable night of music and fun. Get your tickets now! By Contacting
          one of the numbers mentioned.
          <br />
          Please note that there are limited capacity only, So first come first serve.
        </p>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 pt-12 text-center">
    <p> Technology powered by <a href="https://claritytech.io" class="text-indigo-600"> claritytech.io</a> </p>
  </div>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Zubeen Garg Fan Club Hyderabad 7th April 2023',
  description: 'Bohag Bihu Celebration in Hyderabad on 7th April 2023',
  ogImage: '/bg.png',
})

</script>
