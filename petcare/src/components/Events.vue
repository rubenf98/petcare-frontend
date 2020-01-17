<template>
  <div>
    <Header
      title="Eventos"
      description="Eventos do seu interesse"
      image="background-green.svg"
      class="mb-5"
    ></Header>
    <div class="container h-100 my-3">
      <div class="d-flex justify-content-center">
        <SearchBar :search="search" />
      </div>
    </div>
    <div class="container margin">
      <div class="row">
        <div
          class="col-sm-6 event-search"
          v-for="event in events"
          v-bind:key="event.id"
        >
          <div class="card my-5">
            <div class="img-container">
              <img
                class="card-img-top"
                src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
                alt="Card image cap"
              />
              <div class="event-date">
                <h2>13 July 2019</h2>

                <p>
                  <img src="/icon/hour.svg" class="icon" /> July 13, 2019 - July 18, 2019
                </p>
              </div>
            </div>

            <div class="card-body">
              <h5 class="card-title">{{event.name}}</h5>
              <p class="card-text">
                <img src="/icon/address.svg" class="icon" /> This is a wider card
              </p>
              <p
                class="card-text"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus tempore architecto, consectetur autem doloribus neque soluta, aliquam perferendis quos, itaque eveniet dignissimos amet quidem modi accusamus ipsam harum. Nihil.</p>
            </div>

            <div class="card-footer d-flex justify-content-end align-items-center">
              <div class="d-flex align-items-center">
                <img src="/icon/euro.svg" class="icon" />
                <span class="price-tag">55</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./layout/Header.vue";
import SearchBar from "./layout/SearchBar.vue";

export default {
  name: "events",
  components: {
    Header,
    SearchBar
  },
  data() {
    return {
      events: null,
      search: ".event-search"
    };
  },
  created: function() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.events = res.data;
    });
  }
};
</script>

<style scoped>
.img-container {
  position: relative;
}

.icon {
  width: 18px;
  height: 18px;
}

.price-icon {
  width: 30px;
  height: 30px;
}

.event-date {
  position: absolute;
  background-color: rgba(184, 233, 255, 0.835);
  color: rgb(1, 1, 87);
  top: 50%;
  transform: translateY(-50%);
  left: -10px;
  padding: 15px 60px 15px 30px;
}

.price-tag {
  color: rgb(1, 1, 87);
  font-size: 1.5em;
  font-weight: bold;
}

.card-footer {
  background: white;
  border: none;
}
</style>
