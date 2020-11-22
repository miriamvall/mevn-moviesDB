<template>
  <div>
  
    <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link :to="{name: 'home'}" class="navbar-brand float-left">MEVN App</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/create">Create Movie</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Movies</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>

  </div>
</template>


