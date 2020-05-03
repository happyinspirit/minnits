<template>
  <div>
    <b-jumbotron>
      <b-container class="text-center">
        <h1 class="display-4">Minnits</h1>
        <p class="lead pb-3">Because minutes should not take hours.</p>
        <b-button-group size="lg">
          <router-link :to="{ name: 'search' }">
            <b-button variant="teal" class="mr-1">Show Meetings</b-button>
          </router-link>
          <router-link :to="{ name: 'add' }">
            <b-button variant="teal">Add Meeting</b-button>
          </router-link>
        </b-button-group>
      </b-container>
    </b-jumbotron>
    <router-view />
  </div>
</template>
