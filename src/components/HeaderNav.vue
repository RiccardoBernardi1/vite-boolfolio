<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded-pill">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'homepage' }" class="nav-link active"
              >Home Page</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact-us' }" class="nav-link active"
              >Contacts</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Type
            </a>
            <ul class="dropdown-menu">
              <li v-for="type in store.types"> 
                <router-link :to="{name: 'type-filtered-list',params: { slug: type.slug }}"  class="dropdown-item">
                    {{ type.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "HeaderNav",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
